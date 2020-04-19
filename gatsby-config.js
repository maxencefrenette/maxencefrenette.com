module.exports = {
    siteMetadata: {
        siteTitle: `This Is Not a Blog`,
        siteTitleAlt: `This Is Not a Blog - Maxence Frenette's Website`,
        siteHeadline: `This Is Not a Blog - Maxence Frenette's Website`,
        siteUrl: `https://maxencefrenette.com`,
        siteLanguage: `en`,
        siteDescription: `My digital garden. A loosely coupled collection of my thoughts, ideas and projects.`,
        siteImage: `/og-image.png`,
        author: `Maxence Frenette`,
    },
    plugins: [
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-typegen`,
            options: {
                emitSchema: {
                    'src/__generated__/gatsby-schema.graphql': true,
                    'src/__generated__/gatsby-introspection.json': true,
                },
                emitPluginDocuments: {
                    'src/__generated__/gatsby-plugin-documents.graphql': true,
                },
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `content/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'project-images',
                path: 'content/projects',
                ignore: [`**/*.mdx`],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: 'content/projects',
                ignore: ['**/*.png'],
            },
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
                icon: `content/images/gatsby-icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-15461090-7',
                head: false,
                anonymize: true,
                respectDNT: true,
                pageTransitionDelay: 0,
            },
        },

        // Theme config
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            options: {
                navigation: [
                    {
                        title: `Home`,
                        slug: `/`,
                    },
                    {
                        title: `Projects`,
                        slug: `/projects`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Github`,
                        url: `https://github.com/maxencefrenette`,
                    },
                ],
            },
        },
    ],
};
