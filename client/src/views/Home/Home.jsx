import React from 'react'
import Cards from '../../components/Cards/Cards'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getVideoGames} from '../../redux/actions'


const Home = () => {

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getVideoGames())
  },[dispatch])
  return (
    <>
      <Cards/ >
    </>
  )
}

export default Home
