
import { useParams } from 'react-router-dom'
import { useEffect} from 'react'
import {getVideoGameId} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import style from './Detail.module.css'
import { NavLink } from 'react-router-dom'


const Detail = () => {

  const {id}=useParams()

  const detail = useSelector(state => state.videoGameID)

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getVideoGameId(id))
  },[dispatch, id])

  return (
    <div className={style.mainContainer}>
          <div className={style.divContainer}>
            <h1 className={style.title}>DESCRIPTION OF THE VIDEOGAME</h1>
            <h2 style={style.name}>NAME: {detail.name}</h2>
            <h3 style={style.idDetail}>ID: {detail.id}</h3>
            <img src={detail.imagen} className={style.image} alt='foodImage'/>
            <ul className={style.genres}>GENRES: 
              {detail.genres?.map((genre)=>(
                <li key={genre}>{genre}</li>
              ))}
            </ul>
            <h3 className={style.platforms}>RELEASED: {detail.released}</h3>
            <h3 className={style.platforms}>RATING: {detail.rating}</h3>
            <ul className={style.platforms}>PLATFORMS: 
              {detail.platforms?.map((platform)=>(
                <li key={platform}>{platform}</li>
              ))}
            </ul>
            <p className={style.detail}>DETAIL: {detail.description}</p>

            <button className={style.buttonBack}>
              <NavLink to='/home' className={style.NavLink}>Back</NavLink>
            </button>

          </div>

      

    </div>
  )
}

export default Detail
