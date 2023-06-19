/*import React from 'react'
import Cards from '../../components/Cards/Cards'
import NavBar from '../../components/NavBar/NavBar'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getVideoGames, getNameVideoGame, getGenres, orderData} from '../../redux/actions'
import style from './Home.module.css'



const Home = () => {
  const [name, setName]=useState('')
  const [filter, setFilter]=useState({})
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
    setName(event.target.value.toLowerCase())

  }

  const handlerSubmit=async()=>{
    dispatch(getNameVideoGame(name))
    //const aux=
    //console.log(aux)
  }
  const handleChangeSelect=(event)=>{
    const property= event.target.name;
    const value= event.target.value;

    //setForm({...form, [property]:value})
    setFilter({...filter, [property]: value})
  }

  const handlerSubmitFilter=(event)=>{
    event.preventDefault();
    const buttonName = event.target.name;
    event.preventDefault();
    if (buttonName==='clean'){
      setFilter({})
    }else{
      dispatch(orderData(filter))
    }
  }


  return (
    <div className={style.mainContainer}>
      <NavBar handlerChange={handlerChange} handlerSubmit={handlerSubmit} name={name}/>
      <div className={style.containerFilterOrder}>
        <div className={style.order}>
          <h2>ORDER</h2>
          <select name='order' onChange={handleChangeSelect}>
            <option>--SELECT--</option>
            <option value='upward'>UPWARD</option>
            <option value='falling'>FALLING</option>
            <option value='hight-rating'>HIGHT RATING</option>
            <option value='low-rating'>LOW RATING</option>
          </select>

        </div>
        <div className={style.filter}>
          <h2>GENRE FILTER</h2>
          <select name='genre' onChange={handleChangeSelect}>
            {genreState?.map((genre, index)=>{
              return <option key={index} name={genre} value={genre}>{genre}</option>
            })}
          </select>
        </div>

        <div className={style.filterApiBdd}>
          <h2>SOURCE FILTER</h2>
          <select name='origin' onChange={handleChangeSelect}>
            <option>--SELECT--</option>
            <option value='api'>API</option>
            <option value='database'>DATABASE</option>
          </select>
        </div>
        <button name='search' disabled={Object.keys(filter).length===0} onClick={handlerSubmitFilter} className={style.filterButton}>SEARCH</button>
        <button name='clean' disabled={Object.keys(filter).length===0} onClick={handlerSubmitFilter} className={style.filterButton}>CLEAN</button>
      </div>
      <Cards />
      
    </div>
  )
}

export default Home*/
