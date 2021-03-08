import React from 'react'

import SectionOne from './one'
import SectionTwo from './two'
import SectionThree from './three'
import SectionFour from './four'
import SectionFive from './five'
import SectionSix from './six'
import SectionSeven from './seven'
import SectionEight from './eight'
import SectionNine from './nine'
import SectionTen from './ten'
import SectionEleven from './eleven'
import SectionTwelve from './twelve'
import SectionThirteen from './thirteen'
import SectionFourteen from './fourteen'
import SectionFivteen from './fivteen'
import SectionSixteen from './sixteen'
import SectionSeventeen from './seventeen'
import SectionEighteen from './eighteen'
import SectionNineteen from './nineteen'
import SectionTwenty from './twenty'

const SectionRenderer = ({ sections=[] }) => {
  return sections.map((section, index) => {
    switch (section.__typename) {
      case 'One':
        return <SectionOne key={index} {...section}/>
      case 'Two':
        return <SectionTwo key={index} {...section}/>
      case 'Three':
        return <SectionThree key={index} {...section}/>
      case 'Four':
        return <SectionFour key={index} {...section}/>
      case 'Five':
        return <SectionFive key={index} {...section}/>
      case 'Six':
        return <SectionSix key={index} {...section}/>
      case 'Seven':
        return <SectionSeven key={index} {...section}/>
      case 'Eight':
        return <SectionEight key={index} {...section}/>
      case 'Nine':
        return <SectionNine key={index} {...section}/>
      case 'Ten':
        return <SectionTen key={index} {...section}/>
      case 'Eleven':
        return <SectionEleven key={index} {...section}/>
      case 'Twelve':
        return <SectionTwelve key={index} {...section}/>
      case 'Thirteen':
        return <SectionThirteen key={index} {...section}/>
      case 'Fourteen':
        return <SectionFourteen key={index} {...section}/>
      case 'Fivteen':
        return <SectionFivteen key={index} {...section}/>
      case 'Sixteen':
        return <SectionSixteen key={index} {...section}/>
      case 'Seventeen':
        return <SectionSeventeen key={index} {...section}/>
      case 'Eighteen':
        return <SectionEighteen key={index} {...section}/>
      case 'Nineteen':
        return <SectionNineteen key={index} {...section}/>
      case 'Twenty':
        return <SectionTwenty key={index} {...section}/>
      default:
        return null
    }
  })
}

export default SectionRenderer
