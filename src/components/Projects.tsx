import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Project from './project';
import styled from 'styled-components';

function removeFileExtension(filename: string): string {
    return filename.split('.')[0];
}

const query = graphql`
    query ProjectsQuery {
        # allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
        #     edges {
        #         node {
        #             parent {
        #                 ... on File {
        #                     name
        #                 }
        #             }
        #             frontmatter {
        #                 order
        #             }
        #             ...ProjectFragment
        #         }
        #     }
        # }
        projects: allFile(
            filter: { sourceInstanceName: { eq: "projects" } }
            sort: { fields: childMdx___frontmatter___order, order: DESC }
        ) {
            nodes {
                name
                childMdx {
                    frontmatter {
                        order
                    }
                    ...ProjectFragment
                }
            }
        }
        images: allFile(
            filter: { sourceInstanceName: { eq: "project-images" } }
        ) {
            edges {
                node {
                    name
                    ...ProjectImageFragment
                }
            }
        }
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -15px;

    & > * {
        margin: 15px;
    }
`;

const Projects = () => {
    const data = useStaticQuery(query);

    const projects = data.projects.nodes;
    projects.sort(p => -p.childMdx.frontmatter.order);

    const images = data.images.edges.map(e => e.node);

    return (
        <Container>
            {projects.map(project => (
                <Project
                    key={project.name}
                    project={project.childMdx}
                    image={images.find(
                        i =>
                            removeFileExtension(i.name) ===
                            removeFileExtension(project.name)
                    )}
                />
            ))}
        </Container>
    );
};

export default Projects;
