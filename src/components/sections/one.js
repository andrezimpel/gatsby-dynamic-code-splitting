import React from 'react'

import Button from '../button'
import TextRenderer from '../text/renderer'

import * as styles from './one.module.scss'

const SectionOne = ({
  headline='Please add a headline',
  subline,
  teaser,
  buttonLabel,
  buttonLink,
  buttonUrl,
  backgroundImage,
  textColor
}) => {
  if (!headline) { return null; };

  const url = 'dopeurl';
  return (
    <section className={styles.containerClass}>
      <div className={styles.wrapperClass} data-has-background={backgroundImage !== null}>
        <h2 className={styles.headlineClass} style={{ color: textColor }}>{headline}</h2>
        {( subline &&
          <div className={styles.sublineClass} style={{ color: textColor }}>
            <TextRenderer text={subline}/>
          </div>
        )}
        {( teaser &&
          <div className={styles.teaserClass} style={{ color: textColor }}>
            {teaser}
          </div>
        )}
        {( ((buttonLabel && buttonLink) || (buttonLabel && buttonUrl)) &&
          <div className={styles.buttonWrapperClass}>
            <Button to={url}>{buttonLabel}</Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default SectionOne
