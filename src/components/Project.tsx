import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from "gatsby-image";

const TypedMDXRenderer = MDXRenderer as any;

export const query = graphql`
    fragment ProjectFragment on Mdx {
        parent {
            ... on File {
                name
                sourceInstanceName
            }
        }
        frontmatter {
            title
            path
        }
        body
    }

    fragment ProjectImageFragment on File {
        childImageSharp {
            fixed(width: 300) {
                aspectRatio
                base64
                height
                originalName
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
                width
            }
        }
    }
`;

const Project = ({ project, image }) => {
    return (
        <div key={project.id}>
            <Img fixed={image.childImageSharp.fixed} />
            <h3>{project.frontmatter.title}</h3>
            <TypedMDXRenderer children={project.body} />
        </div>
    );
};

export default Project;
