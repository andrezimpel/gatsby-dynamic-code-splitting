import React from 'react'
import loadable from '@loadable/component'

const SECTION_MAP = {
  One: loadable(() => import('./one'), {
    fallback: <div>Loading...</div>
  }),
  Two: loadable(() => import('./two'), {
    fallback: <div>Loading...</div>
  }),
  Three: loadable(() => import('./three'), {
    fallback: <div>Loading...</div>
  }),
}

const SectionRenderer = ({ sections=[] }) => {
  return sections.map((section, index) => {
    const ModuleComponent = SECTION_MAP[section.__typename]
    return <ModuleComponent key={index}/>
  })
}

export default SectionRenderer
