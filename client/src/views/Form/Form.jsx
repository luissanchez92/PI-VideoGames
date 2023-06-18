import React from 'react'
import style from './Form.module.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getGenres, getVideoGames} from '../../redux/actions'
import validation from './validation';
import { NavLink } from 'react-router-dom'
import axios from 'axios';



const Form = () => {
  const [form, setForm]=useState({
    name:'',
    description:'',
    released:'',
    rating: Number,
    imagen:'',
    platforms:[],
    genres:[]

  })

  const [error, setError]=useState({})

  const genreState = useSelector(state => state.genres)
  const platformState=useSelector(state=> state.videoGames)

  const aux=platformState.map(element=>element.platforms.map(element=>element))
  const newAux=aux.flat()
  //const platformsFilter=[...new Set(newAux)]
  const platformsFilter = newAux.filter((element, index, array) =>(array.indexOf(element) ===index))
  

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getVideoGames())
  }, [dispatch])

  useEffect(()=>{
    dispatch(getGenres())
  },[dispatch])

  const handlerChange=(event)=>{
    const property= event.target.name;
    const value= event.target.value;

    setForm({...form, [property]:value})
    setError(validation({...form,[property]:value},setForm))
  }

  const handlerChangePlatform= (event) => {
    const { name, checked } = event.target;
    
    setForm((prevFormData) => {
      const {platforms}=prevFormData;
     
      if(checked){
        return {
          ...prevFormData,
          platforms: [...platforms, name],
        };

      }else{
        return {
          ...prevFormData,
          platforms: platforms.filter(element => element !== name),
        };
      }
    })
    setError(validation({...form, platforms: checked}))
  };

  const handlerChangeGenre=(event)=>{
    const {name, checked}= event.target;

    setForm((formData)=>{
      const {genres}=formData;

      if (checked){
        return {
          ...formData,
          genres:[...genres, name],
        }
      }else{
        return {
          ...formData,
          genres: genres.filter(genre=> genre !==name)
        }
      }
    })
    setError(validation({...form, genres: checked}))
  }

  const handleSubmit=async(event)=>{
    event.preventDefault()
 
    const response=(await axios.post('http://localhost:3001/videoGames',form)).data
    if (response.hasOwnProperty('id')){
      window.alert('successfully created')
    }else{
      window.alert('Repeated name')
    }
    setForm({
      name:'',
      description:'',
      released:'',
      rating: Number,
      imagen:'',
      platforms:[],
      genres:[] 
    })

  }

  return (

    <form onSubmit={handleSubmit} className={style.mainContainer}>

        <div className={style.divContainer}>

          <h2 className={style.titleH2}>Registration</h2>

          <label htmlFor='name' className={style.formName}>Name:</label>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handlerChange}
              placeholder='Enter the name.'
              className={style.inputName}
            />
            {error.name ? <span>{error.name}</span> : ''}

          <label htmlFor='description' className={style.formDescription}>Description:</label>
            <input
              type='text'
              name='description'
              value={form.description}
              onChange={handlerChange}
              placeholder='Enter the description.'
              className={style.inputDescription}
            />
            {error.description ? <span>{error.description}</span> : ''}

          <label className={style.formReleased}>Released:</label> 
            <input
              type='date'
              name='released'
              value={form.released}
              onChange={handlerChange}
              placeholder='Enter the released.'
              className={style.inputReleased}
            />
            {error.released ? <span>{error.released}</span> : ''}

          <label className={style.formRating}>Rating:</label>
            <input
              type='number'
              name='rating'
              value={form.rating}
              onChange={handlerChange}
              placeholder='Enter the rating.'
              className={style.inputRating}
            />
            {error.rating ? <span>{error.rating}</span> : ''}

          <label className={style.formImage}>Image:</label>
            <input
              type='url'
              name='imagen'
              value={form.imagen}
              onChange={handlerChange}
              placeholder='Enter a link image.'
              className={style.inputImage}
            />
            {error.imagen ? <span>{error.imagen}</span> : ''}

            <div>
              <h3 className={style.platformH3}>SELECT PLATFORMS</h3>

              {
                platformsFilter?.map((element, index)=>(
                  <label htmlFor={element} key={index} className={style.textPlatforms}>{element}
                    <input type='checkbox' name={element} key={index} value={form.platforms} onChange={handlerChangePlatform}/>
                  </label>
                ))
              }

            </div>
            <span>{error.platforms && form.platforms.length===0 ? <span>{error.platforms}</span> : ''}</span>

            <div>
              <h3 className={style.genresH3}>SELECT GENRES</h3>

              {
                genreState?.map((element, index)=>(
                  <label htmlFor={element} key={index} className={style.textPlatforms}>{element}
                    <input type='checkbox' name={index+1} key={index} value={form.genres} onChange={handlerChangeGenre}/>
                  </label>
                ))
              }

            </div>
            <span>{error.genres && form.genres.length===0 ? <span>{error.genres}</span> : ''}</span>

          <div className={style.divButton}>
          <button className={style.buttonBack}>
            <NavLink to='/home' className={style.NavLink}>Back</NavLink>
          </button>
          <button disabled={!form.name  || !form.description || !form.rating || !form.imagen || !form.released || !form.platforms || !form.genres || form.platforms.length===0 || form.genres.length===0 }
           className={style.buttonForm}>CREATE
          </button>

          </div>
        </div>
    </form>
  )
}

export default Form
