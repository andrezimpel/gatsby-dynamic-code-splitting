const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = [
    {
      title: 'home',
      slug: "/",
      sections: [
        { __typename: "One" },
        { __typename: "Two" }
      ]
    },
    {
      title: 'second',
      slug: "/second",
      sections: [
        { __typename: "One" },
        { __typename: "Three" },
        { __typename: "Two" }
      ]
    },
    {
      title: 'third',
      slug: "/third",
      sections: [
        { __typename: "One" },
        { __typename: "Three" }
      ]
    }
  ]

  pages.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        ...node
      },
    })
  })
}
