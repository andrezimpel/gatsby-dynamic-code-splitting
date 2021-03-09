import React from 'react'

import SectionOne from './one'
import SectionTwo from './two'
import SectionThree from './three'

const SectionRenderer = ({ sections=[] }) => {
  return sections.map((section, index) => {
    switch (section.__typename) {
      case 'One':
        return <SectionOne key={index} {...section}/>
      case 'Two':
        return <SectionTwo key={index} {...section}/>
      case 'Three':
        return <SectionThree key={index} {...section}/>
      default:
        return null
    }
  })
}

export default SectionRenderer
