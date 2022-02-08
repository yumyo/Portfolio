const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, printTypeDefinitions } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      embeddedImagesRemote: [File] @link(from: "fields.embeddedImagesRemote")
    }

    type Frontmatter @dontInfer {
      title: String!
      description: String
      date: Date! @dateformat(formatString: "YYYY-MM-DD")
      template: String!
      services: [String]
      mission: String
      tags: [String]
      client: String
      profile: String
      published: Boolean
      banner: File @fileByRelativePath
      video: String
      embeddedImagesLocal: [File] @fileByRelativePath
      embeddedImagesRemote: [String]
    }
    `)

  // printTypeDefinitions({ path: './typeDefs.txt' });
}

exports.onCreateNode = async ({
  node,
  createNodeId,
  actions: { createNodeField, createNode },
  cache,
  store,
}) => {
  if (
    node.internal.type === "Mdx" &&
    node.frontmatter &&
    node.frontmatter.embeddedImagesRemote
  ) {
    let embeddedImagesRemote = await Promise.all(
      node.frontmatter.embeddedImagesRemote.map(url => {
        try {
          return createRemoteFileNode({
            url,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store,
          })
        } catch (error) {
          console.error(error)
        }
      })
    )
    if (embeddedImagesRemote) {
      createNodeField({
        node,
        name: "embeddedImagesRemote",
        value: embeddedImagesRemote.map(image => {
          return image.id
        }),
      })
    }
  }
}
