import React from 'react'
import Cards from '../../components/Cards/Cards'
import NavBar from '../../components/NavBar/NavBar'
import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import {getVideoGames, getNameVideoGame} from '../../redux/actions'



const Home = () => {
  const [name, setName]=useState('')
  const [ primer, savePrimer ] = useState(false);

  const dispatch=useDispatch()
  useEffect( ()=>{

    if(primer === false){
      dispatch( getVideoGames());
      savePrimer(true);
    }

  },[primer,dispatch])

  const handlerChange=(event)=>{
    setName(event.target.value.toLowerCase())

  }

  const handlerSubmit=async()=>{
    const aux= dispatch(getNameVideoGame(name))
    console.log(aux)
    
  }

  return (
    <>
      <NavBar handlerChange={handlerChange} handlerSubmit={handlerSubmit} name={name}/>
      <Cards />
      
    </>
  )
}

export default Home
