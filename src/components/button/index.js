import React from 'react'
import { Link } from 'gatsby'

import { buttonClass } from './index.module.scss'

const Button = ({ children, to, onClick, type="submit" }) => {
  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClass} type={type}>
        {children}
      </button>
    )
  }

  if (to !== undefined || to !== null) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    )
  }

  return null
}


export default Button
