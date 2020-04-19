// This is not an apollo project. This file enables the apollo VS Code extension which makes my queries type-safe.
// See https://github.com/cometkim/gatsby-plugin-typegen

module.exports = {
  client: {
    name: "your-project-name",
    tagName: "graphql",
    includes: [
      "./src/**/*.{ts,tsx}",
      "./src/__generated__/gatsby-plugin-documents.graphql",
    ],
    service: {
      name: "GatsbyJS",
      localSchemaFile: "./src/__generated__/gatsby-schema.graphql",
    },
  },
};
