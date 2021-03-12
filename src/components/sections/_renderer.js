/* webpackChunkName: "renderer" */

import React from 'react'
import loadable from '@loadable/component'

const SECTION_MAP = {
  One: loadable(() => import('./one')),
  Two: loadable(() => import('./two')),
  Three: loadable(() => import('./three')),
}

const SectionRenderer = ({ sections=[] }) => {
  return sections.map((section, index) => {
    const ModuleComponent = SECTION_MAP[section.__typename]
    return <ModuleComponent
      key={index}
      id={section.__typename}
      fallback={<div>loading....</div>}
    />
  })
}

// const getFallback = (id) => {
//   if (typeof window === 'undefined') return ''
//   const element = window.document.querySelector(`[data-fallback-id="${id}"]`)
//   return element ? element.innerHTML : ''
// }

export default SectionRenderer
