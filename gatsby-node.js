const path = require('path');
const Project = require.resolve('./src/components/Project.tsx');
const Projects = require.resolve('./src/components/Projects.tsx');

exports.createPages = async ({ graphql, actions }, opts) => {
    const { createPage } = actions;
    const projectsPath = '/projects';

    const toProjectsPath = node => {
        const { dir } = path.parse(node.parent.relativePath);
        return path.join(projectsPath, dir, node.parent.name);
    };

    const result = await graphql(`
        {
            mdxPages: allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            path
                            title
                        }
                        parent {
                            ... on File {
                                name
                                base
                                relativePath
                                sourceInstanceName
                            }
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        console.log(result.errors);
        throw new Error(`Could not query projects`, result.errors);
    }

    const { mdxPages } = result.data;
    const projects = mdxPages.edges.filter(
        ({ node }) => node.parent.sourceInstanceName === 'projects'
    );

    // Create projects pages
    projects.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path || toProjectsPath(node),
            context: node,
            component: Project
        });
    });

    createPage({
        path: projectsPath,
        component: Projects
    });
};
