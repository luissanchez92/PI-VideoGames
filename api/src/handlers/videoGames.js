const { videoGameCreate, findOneVideoGame, getVideoGame, getVideoGameQuery }=require('../controllers/videoGames')

const searchVideoGames= async(req,res)=>{
    try{
        const {page} = req.query
        const response= await getVideoGame(page)

        return res.status(200).json(response)

    }catch(error){
        return res.status(400).json({error: error.message})
    }
}

const searchNameVideoGames=async(req,res)=>{
    const {name}= req.query
    try{

        const response = await getVideoGameQuery(name)

        return res.status(200).json(response)
        

    }catch(error){
        return res.status(400).json({error: error.message})

    }
}

const searchVideoGamesID= async(req,res)=>{
    const {id}=req.params
    try{
        const response= await findOneVideoGame(id)
        
        return res.status(200).json(response)

    }catch(error){

        return res.status(404).send(`the id: ${id} not found`)
    }

}


const createVideoGame= async(req,res)=>{
    try{
        const {name, description, platforms, imagen, released, rating, genres}= req.body
        if (!name || !description || !platforms || !imagen || ! released || !rating || !genres) throw Error('missing data for registration')

        const response=  await videoGameCreate (name, description, platforms, imagen, released, rating, genres)

        return res.status(201).json(response)

    }catch(error){

        return res.status(400).send(error.message)
    }
   
}

module.exports={
    searchVideoGames,
    searchVideoGamesID,
    createVideoGame,
    searchNameVideoGames
}