import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Project from './project';

const query = graphql`
    query ProjectsQuery {
        allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
            edges {
                node {
                    id
                    frontmatter {
                        order
                    }
                    ...ProjectFragment
                }
            }
        }
        allFile(filter: { sourceInstanceName: { eq: "project-images" } }) {
            edges {
                node {
                    name
                    ...ProjectImageFragment
                }
            }
        }
    }
`;

const Projects = () => {
    const data = useStaticQuery(query);
    const projects = data.allMdx.edges.map((e: any) => e.node);
    const images = data.allFile.edges.map(e => e.node);

    return (
        <div>
            {projects.map(project => (
                <Project key={project.id} project={project} image={images[0]} />
            ))}
        </div>
    );
};

export default Projects;
