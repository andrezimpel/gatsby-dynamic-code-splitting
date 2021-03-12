import React from 'react'
import loadable from '@loadable/component'

const SECTION_MAP = {
  One: loadable(() => import('./one')),
  Two: loadable(() => import('./two')),
  Three: loadable(() => import('./three')),
}

const SectionRenderer = ({ sections=[] }) => {
  console.log(sections);
  return sections.map((section, index) => {
    const ModuleComponent = SECTION_MAP[section.__typename]
    console.log(ModuleComponent);
    return <ModuleComponent key={index}/>
  })
}

export default SectionRenderer
