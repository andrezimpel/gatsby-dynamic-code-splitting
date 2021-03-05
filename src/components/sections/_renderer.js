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
    switch (section) {
      case 'One':
        return <SectionOne key={index}/>
      case 'Two':
        return <SectionTwo key={index}/>
      case 'Three':
        return <SectionThree key={index}/>
      case 'Four':
        return <SectionFour key={index}/>
      case 'Five':
        return <SectionFive key={index}/>
      case 'Six':
        return <SectionSix key={index}/>
      case 'Seven':
        return <SectionSeven key={index}/>
      case 'Eight':
        return <SectionEight key={index}/>
      case 'Nine':
        return <SectionNine key={index}/>
      case 'Ten':
        return <SectionTen key={index}/>
      case 'Eleven':
        return <SectionEleven key={index}/>
      case 'Twelve':
        return <SectionTwelve key={index}/>
      case 'Thirteen':
        return <SectionThirteen key={index}/>
      case 'Fourteen':
        return <SectionFourteen key={index}/>
      case 'Fivteen':
        return <SectionFivteen key={index}/>
      case 'Sixteen':
        return <SectionSixteen key={index}/>
      case 'Seventeen':
        return <SectionSeventeen key={index}/>
      case 'Eighteen':
        return <SectionEighteen key={index}/>
      case 'Nineteen':
        return <SectionNineteen key={index}/>
      case 'Twenty':
        return <SectionTwenty key={index}/>
      default:
        return null
    }
  })
}

export default SectionRenderer
