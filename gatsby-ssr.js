import { existsSync, readFileSync } from 'fs'

import { ChunkExtractor } from '@loadable/server'
import { statsPath } from './constants'

const path = require('path')
const statsFile = path.resolve(statsPath)
const extractor = new ChunkExtractor({ entrypoints: ['main'], statsFile });

// extractor.collectChunks() will wrap the application in a ChunkExtractorManager
export const wrapRootElement = ({ element }) => extractor.collectChunks(element);

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  // Set link rel="preload" tags in the head to start the request asap. This will NOT parse the assets fetched
  // console.log(extractor.getLinkElements());
  // setHeadComponents(extractor.getLinkElements());
  // //
  // // // Set script and style tags at the end of the document to parse the assets.
  // setPostBodyComponents([...extractor.getScriptElements(), ...extractor.getStyleElements()]);
  //
  // // Reset collected chunks after each page is rendered
  extractor.chunks = [];
};
