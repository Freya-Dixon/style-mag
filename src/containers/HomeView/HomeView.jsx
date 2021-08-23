import React from 'react'
import Cards from '../../components/Cards'
import TallCard from '../../components/TallCard'
import contents from '../../data/contents'
import styles from './HomeView.module.scss'
const HomeView = () => {
    return (
        <div className={styles.homeContainer}>
                 <h1 className={styles.heading}>Top Story</h1>
    <div className={styles.headline}>
     <Cards content={contents[8]}/>
     <Cards content={contents[5]}/>
    </div>
    <div className={styles.subHeadline}>
    </div>
    <Cards content={contents[3]}/>
    <Cards content={contents[7]}/>
    <Cards content={contents[2]}/>
        </div>
    )
}

export default HomeView
