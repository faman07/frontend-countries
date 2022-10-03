import React from 'react'
import styles from './card.module.css'
import {Link} from 'react-router-dom'

export default function Card({image,name,continent,id}){
   
    return(
        <div>
            <div className={styles.cardContainer}>
                <div className={styles.banderin}>
                <Link to={`/home/detail/${id}`}><img className='Bandera' src={image} alt="No existe bandera"/></Link>
                </div>
                <div className={styles.cardName}>     
                <p><b>Name:</b> <Link to={`/home/detail/${id}`}>{name}</Link></p>
                <p><b>Continent:</b> {continent}</p>
                
                </div>
            </div>
        </div>
    )
}