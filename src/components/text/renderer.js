import React from 'react'
import ReactMarkdown from 'react-markdown'
import breaks from 'remark-breaks'

import * as styles from './renderer.module.css'

const TextRenderer = ({ text='', textAlignment='Left' }) => {
  return (
    <div className={styles.text}>
      <ReactMarkdown source={text} plugins={[breaks]}/>
    </div>
  )
}

export default TextRenderer;
