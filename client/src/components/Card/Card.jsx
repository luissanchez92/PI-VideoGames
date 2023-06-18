import React from 'react'
import style from './Card.module.css'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className={style.mainContainer}>
      <h2 className={style.name}>{props.name}</h2>
      <NavLink to={`/detail/${props.id}`}>
        <img src={props.img} className={style.cardImage} alt='foodImage'/>
      </NavLink>

      <ul className={style.genre}>
        {props.genres.map((genre)=>(
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  )
}


export default Card
