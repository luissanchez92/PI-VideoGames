
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
            <h2 style={style.id}>ID: {detail.id}</h2>
            <img src={detail.imagen} className={style.videoImage} alt='foodImage'/>
            <ul>GENRES: 
              {detail.genres?.map((genre)=>(
                <li key={genre}>{genre}</li>
              ))}
            </ul>
            <h2>RELEASED: {detail.released}</h2>
            <h2>RATING: {detail.rating}</h2>
            <ul>PLATFORMS: 
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
