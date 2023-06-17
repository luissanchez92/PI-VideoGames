import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import style from './Landing.module.css'

const Landing = () => {
  return (
    <div className={style.mainContainer}>
        <h1>landing</h1>
        <button>
          <NavLink to='/home'>Home</NavLink>
        </button>
      
    </div>
  )
}

export default Landing
