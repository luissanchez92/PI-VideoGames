
import { useParams } from 'react-router-dom'
import { useEffect} from 'react'
import {getVideoGameId} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import style from './Detail.module.css'


const Detail = () => {

  const {id}=useParams()

  const detail = useSelector(state => state.videoGameID)

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getVideoGameId(id))
  },[dispatch, id])

  return (
    <div>
      <h1>DESCRIPTION OF THE VIDEOGAME</h1>
        <div>
          <h2>{detail.name}</h2>
          <h2>{detail.id}</h2>
          <img src={detail.imagen} className={style.videoImage} alt='foodImage'/>
          <ul>
            {detail.genres?.map((genre)=>(
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <h2>{detail.released}</h2>
          <h2>{detail.rating}</h2>
          <ul>
            {detail.platforms?.map((platform)=>(
              <li key={platform}>{platform}</li>
            ))}
          </ul>
          <p>{detail.description}</p>
        </div>

    </div>
  )
}

export default Detail
