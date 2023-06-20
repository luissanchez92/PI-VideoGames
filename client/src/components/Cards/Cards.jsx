import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from './Cards.module.css'
const Cards = () => {

  const allData=useSelector(store=>store.videoGames)
          
  return (
    <div className={style.mainContainer}>
        {
          (allData.length > 0) ? (
            allData.map(element=>{
              return <Card
                key={element.id}
                id={element.id}
                name= {element.name}
                img= {element.imagen}
                genres= {element.genres}
              />
    
            })
          ) : (
            null
          )    
        }
    </div>
  )
}

export default Cards
