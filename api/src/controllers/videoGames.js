//const { response } = require('../app');
const {Videogame, Genre}=require('../db')
const axios=require('axios')
const {API_VIDEOGAMES, API_KEY}=process.env;

const videoGameCreate=async(name, description, platforms, imagen, released, rating, genres)=>{
    const createNewVideoGame= await Videogame.create({name, description, platforms, imagen, released, rating})

    await createNewVideoGame.addGenre(genres)

    return createNewVideoGame;
}

const findOneVideoGame=async(id)=>{

    if (isNaN(id)){
        const oneVideoGameBdD= await Videogame.findOne({
            where: { id:`${id}`},
            include: [{model: Genre} ]
        })
        return oneVideoGameBdD
    }
    const oneVideoGameApi=(
        await axios.get(`${API_VIDEOGAMES}/${id}?key=${API_KEY}`)
    ).data;

    if(!oneVideoGameApi) throw Error(`the Id: ${id} not found`)

    return {
        id: oneVideoGameApi.id,
        name: oneVideoGameApi.name,
        description: oneVideoGameApi.description,
        platforms:  oneVideoGameApi.platforms.map((element)=>element.platform.name),
        imagen: oneVideoGameApi.background_image,
        rating: oneVideoGameApi.rating,
        released: oneVideoGameApi.released,
        genres: oneVideoGameApi.genres.map((element)=>element.name),
        create: oneVideoGameApi.create || false
    }

}

const getAllBdd=async()=>{
    const response= await Videogame.findAll({
        include: [{model: Genre} ]
    })
    return response
}

const getAllApi=async()=>{
    let i=1
    let response=[];
 
        while(i<6){
            let promises=  await axios.get(`${API_VIDEOGAMES}?key=${API_KEY}&page=${i}`);
            response.push(promises);
            i++
        }
        response=(await Promise.all(response))
        .map(proms=>
            proms.data.results.map(element=>{
                return ({
                    id: element.id,
                    name: element.name,
                    description: element.description,
                    platforms: element.platforms.map((element)=>element.platform.name),
                    imagen: element.background_image,
                    rating: element.rating,
                    released: element.released,
                    genres: element.genres.map((element)=>element.name),
                    create: false
                })
            })
        )

        let allResponse=[];
        response.map(array=>{
            allResponse=allResponse.concat(array)
        });
        return allResponse;

}


const getVideoGame=async(name)=>{
    const responseApi= await getAllApi();
    const responseBdd= await getAllBdd();

    const allVideoGames=[ ...responseBdd, ...responseApi];
    if (!name){
        return allVideoGames
    }
    const searchNameQuery= allVideoGames.filter(
        element=>element.name.toLowerCase().includes(name.toLowerCase())
    )
    return searchNameQuery;
}

module.exports= {
    videoGameCreate,
    findOneVideoGame,
    getVideoGame
}