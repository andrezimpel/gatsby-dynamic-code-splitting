const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')
const { unlinkSync } = require('fs')
const { statsFilename, statsPath } = require('./constants')

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

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "build-javascript") {
     actions.setWebpackConfig({
       plugins: [new LoadablePlugin({ filename: statsFilename, writeToDisk: true })]
     });
   }
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({ name: '@loadable/babel-plugin' });
};

exports.onPostBuild = () => {
  // Clean after ourselves
  unlinkSync(statsPath);
};
