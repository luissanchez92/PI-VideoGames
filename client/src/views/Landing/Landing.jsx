import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import style from './Landing.module.css'

const Landing = () => {
  return (
    <div className={style.mainContainer}>
        <h1 className={style.titleLanding}>INDIVIDUAL PROJECT</h1>

        <span className={style.text}>
          Welcome. You will find a page that will allow you to view video games, <br></br> search for them by name, see their detailed information, <br></br>order them according to your search, and even create a video game.<br></br>
          Thanks for your visit. <br></br>Created by Luis Sanchez.
        </span>
        
        <button className={style.button}>
          <NavLink to='/home' className={style.linkButton}>START</NavLink>
        </button>
      
    </div>
  )
}

export default Landing
