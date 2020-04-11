import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
    query ProjectsQuery {
        allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
            edges {
                node {
                    id
                    parent {
                        ... on File {
                            name
                            sourceInstanceName
                        }
                    }
                    frontmatter {
                        title
                        path
                        description
                        image
                    }
                    body
                }
            }
        }
    }
`;

const Projects = () => {
    const data = useStaticQuery(query);
    const projects = data.allMdx.edges.map((e: any) => e.node);
    
    return (
        <div>
            {projects.map(project => (
                <div key={project.id}>
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
