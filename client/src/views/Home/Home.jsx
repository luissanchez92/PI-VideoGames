import React from 'react'
import Cards from '../../components/Cards/Cards'
import NavBar from '../../components/NavBar/NavBar'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getVideoGames, getNameVideoGame, getGenres, getOrigin, getGenreFilter, getOrder} from '../../redux/actions'
import style from './Home.module.css'



const Home = () => {
  const [name, setName]=useState('')
  const [ primer, savePrimer ] = useState(false);

  const genreState = useSelector(state => state.genres)

  const dispatch=useDispatch()
  useEffect( ()=>{

    if(primer === false){
      dispatch( getVideoGames());
      savePrimer(true);
      dispatch( getGenres())
    }

  },[primer,dispatch])

  const handlerChange=(event)=>{
    const name=event.target.value
    setName(name)

  }

  const handlerSubmit=async()=>{
    dispatch(getNameVideoGame(name))

  }

  const handleGenre=(event)=>{

    const genre= event.target.value;

    dispatch(getGenreFilter(genre))
  }

  const handlerOrigin=(event)=>{

    const origin= event.target.value;

    dispatch(getOrigin(origin))
  }

  const handlerOrder=(event)=>{

    const order=event.target.value;

    dispatch(getOrder(order))
  }
  
  return (
    <div className={style.mainContainer}>
      <NavBar handlerChange={handlerChange} handlerSubmit={handlerSubmit} name={name}/>
      <div className={style.containerFilterOrder}>
        <div className={style.order}>
          <h2>ORDER</h2>
          <select name='order' onChange={handlerOrder}>
            <option>--SELECT--</option>
            <option value='upward'>UPWARD</option>
            <option value='falling'>FALLING</option>
            <option value='hight-rating'>HIGHT RATING</option>
            <option value='low-rating'>LOW RATING</option>
          </select>

        </div>
        <div className={style.filter}>
          <h2>GENRE FILTER</h2>
          <select name='genre' onChange={handleGenre}>
            {genreState?.map((genre, index)=>{
              return <option key={index} name={genre} value={genre}>{genre}</option>
            })}
          </select>
        </div>

        <div className={style.filterApiBdd}>
          <h2>SOURCE FILTER</h2>
          <select name='origin' onChange={handlerOrigin}>
            <option>--SELECT--</option>
            <option value='api'>API</option>
            <option value='database'>DATABASE</option>
          </select>
        </div>
        
      </div>
      <Cards />
      
    </div>
  )
}

export default Home
