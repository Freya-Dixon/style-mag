import React from 'react'
import styles from "./Cards.module.scss";
const Card = (props) => { 
  const {
   title,
   info,
   img,
   type
  } = props.content
    return (
      <article className={styles.cards}>
          <img src={img} alt={title} className={styles.images}/>
            <h2 className={styles.titles}>{title}</h2>
            <p className={styles.infos}>{info}</p>
            <p className={styles.smallTitle}>{type}</p>
            </article>
    )
}

export default Card

