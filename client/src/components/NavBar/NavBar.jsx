import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import style from './NavBar.module.css'


const NavBar=({handlerSubmit, handlerChange, name})=> {

  return (
    <div className={style.mainContainer}>
      <button className={style.buttonHome}>
        <NavLink to='/home' className={style.NavLink}>HOME</NavLink>
      </button>

      <button className={style.buttonCreate}>
        <NavLink to='/create' className={style.NavLink} >FORM</NavLink>
      </button>

      <label className={style.label}>Search VideoGame
        <input
          type="search"
          placeholder="Enter name"
          onChange={handlerChange}
          className={style.input}
        />
      </label>

      <div>
        <button type="button" disabled={!name} onClick={() => handlerSubmit()} className={style.buttonSearch} >SEARCH</button>

      </div>

      

    </div>
  )
}

export default NavBar
