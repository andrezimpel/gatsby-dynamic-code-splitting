/* webpackChunkName: "One" */

import React from 'react'
import { one } from './one.module.scss'

const SectionOne = ({ id }) => {
  return (
    <section id={id}>
      <div className={one}>section one :)</div>
    </section>
  )
}

export default SectionOne
