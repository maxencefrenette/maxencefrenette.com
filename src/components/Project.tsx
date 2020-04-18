import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import styled from 'styled-components';

const TypedMDXRenderer = MDXRenderer as any;

export const query = graphql`
    fragment ProjectDetails on Mdx {
        frontmatter {
            title
            github
            live
        }
        body
    }

    fragment ProjectImageDetails on File {
        childImageSharp {
            fixed(width: 300) {
                ...GatsbyImageSharpFixed
            }
        }
    }
`;

const Container = styled.div`
    width: 300px;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
    padding-left: 8px;
    padding-right: 8px;

    & > * {
        margin-right: 4px;
    }
`;

const Title = styled.h3`
    margin-top: 0;
    margin-bottom: 4px;
`;

const Description = styled.div`
    padding-left: 8px;
    padding-right: 8px;

    & p {
        margin: 0;
    }
`;

interface ProjectProps {
    project: GatsbyTypes.ProjectDetailsFragment;
    image: GatsbyTypes.ProjectImageDetailsFragment;
}

const Project: React.FC<ProjectProps> = ({ project, image }) => {
    const { frontmatter, body } = project;
    const { title, github, live } = frontmatter;

    return (
        <Container>
            <Img fixed={image.childImageSharp.fixed} />
            <TitleContainer>
                <Title>{title}</Title>
                {github && <a href={github}>Github</a>}
                {live && <a href={live}>Live</a>}
            </TitleContainer>
            <Description>
                <TypedMDXRenderer children={body} />
            </Description>
        </Container>
    );
};

export default Project;
