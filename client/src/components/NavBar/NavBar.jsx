import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import style from './NavBar.module.css'


const NavBar=()=> {

  return (
    <div className={style.mainContainer}>
      <button>
        <NavLink to='/home'>Home</NavLink>
      </button>

      <button>
        <NavLink to='/create'>Form</NavLink>
      </button>

      <label>Search VideoGame</label>
      <input
        type="search"
        placeholder="Enter name"
      />
      <button>Search</button>

    </div>
  )
}

export default NavBar
