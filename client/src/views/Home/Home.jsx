import React from 'react'
import Cards from '../../components/Cards/Cards'
import NavBar from '../../components/NavBar/NavBar'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getVideoGames, getNameVideoGame, getGenres, getOrigin, getGenreFilter, getOrder} from '../../redux/actions'
import style from './Home.module.css'



const Home = () => {
  const [name, setName]=useState('')
  const [ page, setPage ] =useState(1);
  const [ primer, savePrimer ] =useState(false);
  const [ second, setSecond ] =useState(false);

  const genreState= useSelector(state => state.genres)
  const availableGames= useSelector(state=> state.videoGames)

  const dispatch=useDispatch()

  useEffect( ()=>{
    if(primer === false){
      dispatch( getVideoGames(page));
      savePrimer(true);
    }

    if(second === false){
      dispatch( getGenres());
      setSecond(true);
    }

  },[primer,dispatch, page, second])

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

  const back =()=>{
    let nextPage = page - 1;
    setPage(nextPage);
    savePrimer(false);
  }

  const next =()=>{
    let backPage=page + 1;
    setPage(backPage);
    savePrimer(false);
  }
  
  return (
    <div className={style.mainContainer}>
      <NavBar handlerChange={handlerChange} handlerSubmit={handlerSubmit} name={name}/>

      <div className={style.containerFilterOrder}>
        <div className={style.filter}>
          <h2 className={style.h2}>ORDER</h2>
          <select name='order' onChange={handlerOrder} className={style.select}>
            <option>--SELECT--</option>
            <option value='upward'>UPWARD</option>
            <option value='falling'>FALLING</option>
            <option value='hight-rating'>HIGHT RATING</option>
            <option value='low-rating'>LOW RATING</option>
          </select>

        </div>
        <div className={style.filter}>
          <h2 className={style.h2}>GENRE</h2>
          <select name='genre' onChange={handleGenre} className={style.select}>
            {genreState?.map((genre, index)=>{
              return <option key={index} name={genre} value={genre}>{genre}</option>
            })}
          </select>
        </div>

        <div className={style.filter}>
          <h2 className={style.h2}>ORIGIN</h2>
          <select name='origin' onChange={handlerOrigin} className={style.select}>
            <option>--SELECT--</option>
            <option value='api'>API</option>
            <option value='database'>DATABASE</option>
          </select>
        </div>
        
      </div>
      <Cards/>
      <br />
      <br />

      <div className={style.buttonPg}>
        {
          (page >= 2 ) ? (
            <button type="button" onClick={back} className={style.buttonPag}>BACK</button>
          ) : (
            null
          )
        }
        {
          (name || !availableGames || availableGames.length<15 ) ? (
            null
          ) : (
            <button type="button" onClick={next} className={style.buttonPag}>NEXT</button>
          )
        }
        <span className={style.page}>PAGE: {page}</span>
      </div>

    </div>
  )
}

export default Home
