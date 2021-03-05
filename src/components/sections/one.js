import React from 'react'

import Button from '../button'
import TextRenderer from '../text/renderer'

import { containerClass, wrapperClass, headlineClass, sublineClass, teaserClass, buttonWrapperClass } from './one.module.scss'

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
    <section className={containerClass}>
      <div className={wrapperClass} data-has-background={backgroundImage !== null}>
        <h2 className={headlineClass} style={{ color: textColor }}>{headline}</h2>
        {( subline &&
          <div className={sublineClass} style={{ color: textColor }}>
            <TextRenderer text={subline}/>
          </div>
        )}
        {( teaser &&
          <div className={teaserClass} style={{ color: textColor }}>
            {teaser}
          </div>
        )}
        {( ((buttonLabel && buttonLink) || (buttonLabel && buttonUrl)) &&
          <div className={buttonWrapperClass}>
            <Button to={url}>{buttonLabel}</Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default SectionOne
