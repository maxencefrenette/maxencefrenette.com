import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Project from './project';
import styled from 'styled-components';

function removeFileExtension(filename: string): string {
    return filename.split('.')[0];
}

const query = graphql`
    query ProjectsQuery {
        allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
            edges {
                node {
                    parent {
                        ... on File {
                            name
                        }
                    }
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

const Container = styled.div`
    display: flex;
    margin: -15px;
    
    & > * {
        margin: 15px;
    }
`;

const Projects = () => {
    const data = useStaticQuery(query);

    const projects = data.allMdx.edges.map((e: any) => e.node);
    projects.sort(p => -p.frontmatter.order);

    const images = data.allFile.edges.map(e => e.node);

    return (
        <Container>
            {projects.map(project => (
                <Project
                    key={project.id}
                    project={project}
                    image={images.find(
                        i =>
                            removeFileExtension(i.name) ===
                            removeFileExtension(project.parent.name)
                    )}
                />
            ))}
        </Container>
    );
};

export default Projects;
