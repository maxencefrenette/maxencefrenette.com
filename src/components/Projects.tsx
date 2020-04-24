import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Project from "./Project";
import styled from "styled-components";

function removeFileExtension(filename: string): string {
  return filename.split(".")[0];
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;

  & > * {
    margin: 15px;
  }
`;

const Fill = styled.div`
  width: 300px;
  margin-top: 0;
  margin-bottom: 0;
`;

const Projects = () => {
  const data = useStaticQuery<GatsbyTypes.ProjectsQuery>(graphql`
    query Projects {
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
            ...ProjectDetails
          }
        }
      }
      images: allFile(
        filter: { sourceInstanceName: { eq: "project-images" } }
      ) {
        nodes {
          name
          ...ProjectImageDetails
        }
      }
    }
  `);

  const projects = data.projects.nodes;
  const images = data.images.nodes;

  return (
    <Container>
      {projects.map((project) => (
        <Project
          key={project.name}
          project={project.childMdx}
          image={images.find(
            (i) =>
              removeFileExtension(i.name) === removeFileExtension(project.name)
          )}
        />
      ))}
      {/* Fills the remaining space to prevent the bottom row from being centered */}
      <Fill />
      <Fill />
    </Container>
  );
};

export default Projects;
