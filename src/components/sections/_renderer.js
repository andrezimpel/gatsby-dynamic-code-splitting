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
    return (
      <ModuleComponent
        key={index}
        id={section.id}
        fallback={getFallback(section.id)}
      />
    )
  })
}

const getFallback = (id) => {
  if (typeof window === 'undefined') return null
  const element = window.document.getElementById(id)
  console.log('element', id, element);
  return element ? <section key={id} dangerouslySetInnerHTML={{ __html: element.innerHTML }}/> : null
}

export default SectionRenderer
