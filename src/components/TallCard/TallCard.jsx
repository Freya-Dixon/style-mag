import React from 'react'
import styles from './TallCard.module.scss'
const TallCard = (props) => {
    const {
        title,
        info,
        img,
        type
       } = props.content
         return (
           <article className={styles.cards}>
                 <h2 className={styles.titles}>{title}</h2>
               <img src={img} alt={title} className={styles.images}/>
                 <p className={styles.infos}>{info}</p>
                 <p className={styles.smallTitle}>{type}</p>
                 </article>
         )
     
}

export default TallCard
