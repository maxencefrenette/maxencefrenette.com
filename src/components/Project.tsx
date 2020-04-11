import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

const TypedMDXRendered = MDXRenderer as any;

export const pageQuery = graphql`
    query($id: String!) {
        project: mdx(id: { eq: $id }) {
            id
            frontmatter {
                title
                description
                image
            }
            body
        }
    }
`;

const Project = ({ data }) => {
    const project = data.project;

    return (
        <div>
            <h3>{project.frontmatter.title}</h3>
            <TypedMDXRendered children={project.body} />
        </div>
    );
};

export default Project;
