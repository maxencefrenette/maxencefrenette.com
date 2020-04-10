module.exports = {
    siteMetadata: {
        title: `This Is Not a Blog`,
        description: `My digital garden. A loosely coupled collection of my thoughts, ideas and projects.`,
        author: `Maxence Frenette`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/images`
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
                icon: `images/gatsby-icon.png`
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,

        // Theme config
        {
            resolve: 'gatsby-theme-digital-garden',
            options: {
                header: {
                    home: {
                        href: '/',
                        label: 'Home'
                    },
                    links: []
                }
            }
        }
    ]
};
