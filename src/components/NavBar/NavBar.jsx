import React from 'react';
import styles from "./NavBar.module.scss";
import image from "./logo.png";
const NavBar = () => {
    return (
       <>
       <ul className={styles.NavBar}>
       <li><img src={image} alt="logo" className={styles.images}/></li>
           <li>HOME</li>
           <li>NEWS</li>
           <li>ART</li>
           <li>FOOD</li>
           <li>FILM + TV</li>
           <li>MUSIC</li>
           <li>LIFESTYLE</li>
           <li>TRAVEL</li>
       </ul>
       </>
    )
}

export default NavBar
