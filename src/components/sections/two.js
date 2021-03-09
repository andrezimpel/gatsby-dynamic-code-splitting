import React from 'react';

import Container from '../container';
import TextRenderer from '../text/renderer';

import * as styles from './two.module.scss';
import image from '../../images/cristina-gottardi-qQJveB1VtmM-unsplash.jpg'

const SectionTwo = ({
  title=`Please add the title`,
  ingredients=`Please add an ingredients list`,
  instructions=`Please add instructions`,
  preparationTime,
  currentLocale
}) => {

  const ingredientsRenderer = (props) => {
    return React.createElement('li', {...props, index: null, ordered: "false", 'itemProp': 'recipeIngredient', tight: null});
  }

  return (
    <section className={styles.card}>
      <Container>
        <h2 className={styles.title}>
          {title}
        </h2>
        <div className={styles.sections}>
          <div className={styles.section}>
            <h3 className={styles.headline}>'recipe.ingredients'</h3>
            <div className={styles.ingredients}>
              <TextRenderer text={ingredients} renderers={{ listItem: ingredientsRenderer }}/>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.headline}>'recipe.instructions'</h3>
            <img className={styles.image} src={image} alt="hi"/>
            <div className={styles.instructions} itemProp="recipeInstructions">
              <TextRenderer text={instructions}/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SectionTwo;
