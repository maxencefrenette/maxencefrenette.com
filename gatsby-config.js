module.exports = {
    siteMetadata: {
        title: `This Is Not a Blog`,
        description: `My digital garden. A loosely coupled collection of my thoughts, ideas and projects.`,
        author: `Maxence Frenette`
    },
    plugins: [
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-typegen`,
            options: {
                emitSchema: {
                    'src/__generated__/gatsby-schema.graphql': true,
                    'src/__generated__/gatsby-introspection.json': true
                },
                emitPluginDocuments: {
                    'src/__generated__/gatsby-plugin-documents.graphql': true
                }
            }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `content/images`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'project-images',
                path: 'content/projects',
                ignore: [`**/*.mdx`]
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: 'content/projects',
                ignore: ['**/*.png']
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/images/gatsby-icon.png`
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,

        // Theme config
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            options: {
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/blog`
                    },
                    {
                        title: `Projects`,
                        slug: `/projects`
                    }
                ],
                externalLinks: [
                    {
                        name: `Github`,
                        url: `https://github.com/maxencefrenette`
                    }
                ]
            }
        }
    ]
};
