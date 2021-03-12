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
        { __typename: "One", id: `u2398nfu289f` },
        { __typename: "Two", id: `8unwe8vu9w` }
      ]
    },
    {
      title: 'second',
      slug: "/second",
      sections: [
        { __typename: "One", id: `wen8fun89w` },
        { __typename: "Three", id: `we90fiw0e9w` },
        { __typename: "Two", id: `we9fnuweu0fn` }
      ]
    },
    {
      title: 'third',
      slug: "/third",
      sections: [
        { __typename: "One", id: `232fjkhwfef` },
        { __typename: "Three", id: `svsdjfbhwkf` }
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
  // unlinkSync(statsPath);
};
