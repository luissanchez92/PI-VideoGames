//const { response } = require('../app');
const {Videogame, Genre}=require('../db')
const {Op}=require('sequelize')
const axios=require('axios')
const {API_VIDEOGAMES, API_KEY, API_QUERY}=process.env;

const videoGameCreate=async(name, description, platforms, imagen, released, rating, genres)=>{
    try{
        const createNewVideoGame= await Videogame.create({name, description, platforms, imagen, released, rating})

        await createNewVideoGame.addGenre(genres)

        if (createNewVideoGame.dataValues.hasOwnProperty('id')){
            return createNewVideoGame;
        }
        throw Error('Duplicate name controller')
      

    }catch(error){

        return error.message
        
    }

}

const findOneVideoGame=async(id)=>{

    if (isNaN(id)){
        const objetId= await Videogame.findOne({
            where: { id:`${id}`},
            include: [{
                model: Genre,
                attributes:['name']}
            ]
        })
        const response={
            id: objetId.id,
            name: objetId.name,
            platforms: objetId.platforms,
            imagen: objetId.imagen,
            rating: objetId.rating,
            description: objetId.description,
            released: objetId.released,
            genres: objetId.Genres.map(element=>element.name),
            create: true
        }
        return response;
    }
    const oneVideoGameApi=(
        await axios.get(`${API_VIDEOGAMES}/${id}?key=${API_KEY}`)
    ).data;

    if(!oneVideoGameApi) throw Error(`the Id: ${id} not found`)

    return {
        id: oneVideoGameApi.id,
        name: oneVideoGameApi.name,
        description: oneVideoGameApi.description,
        platforms:  oneVideoGameApi.platforms.map(element=>element.platform.name),
        imagen: oneVideoGameApi.background_image,
        rating: oneVideoGameApi.rating,
        released: oneVideoGameApi.released,
        genres: oneVideoGameApi.genres.map(element=>element.name),
        create: oneVideoGameApi.create || false
    }

}


const getAllBdd=async()=>{
    const response= await Videogame.findAll({
        include: [{
            model: Genre,
            attributes: ['name']}
        ]
    })
  
    const filterVideoGames=response.map(element=>{
        const genresData=element.Genres.map(genre=>genre.name);
        return {
            id: element.id,
            name: element.name,
            platforms: element.platforms,
            imagen: element.imagen,
            released: element.released,
            description: element.description,
            rating: element.rating,
            genres: genresData,
            create: element.create
        }
    })
    return filterVideoGames
}


const getAllApi=async(page, limit=15)=>{

    const url = await axios.get(`${API_VIDEOGAMES}?key=${API_KEY}&page=${page}&page_size=${limit}`); 
 
    const response = url.data.results.map(element => {
        return {
            id: element.id,
            name: element.name,
            description: element.description,
            platforms: element.platforms.map(element=>element.platform.name),
            imagen: element.background_image,
            rating: element.rating,
            released: element.released,
            genres: element.genres.map(element=>element.name),
            create: false
        }
    })
    return response;
}

const getVideoGame=async(page)=>{

    const responseBdd = await getAllBdd();
    let response =[];

    if(parseInt(page) === 1){

        if(responseBdd.length < 15){
            let result = (15 - responseBdd.length);
            const responseApi = await getAllApi(1, result);            
            response = responseBdd.concat(responseApi);            
        } else {
            const responseApi = await getAllApi(page)
            response = response.concat(responseApi);
        }

    }else{
        const responseApi = await getAllApi(page)
        response = response.concat(responseApi);
    }
    return response;
}

const getVideoGameQuery=async(name)=>{

    try{
        const responseAxios= (
            await axios.get(`${API_QUERY}=${name}&key=${API_KEY}`)
        ).data.results
    
        const responseAxiosClean= responseAxios.map((element)=>{
            return {
                id: element.id,
                name: element.name,
                imagen: element.background_image,
                genres: element.genres.map(element=>element.name),
                released:element.released,
                rating:element.rating,
                create: false
            }
        })
    
        const responseBdd = await Videogame.findAll({
            where: {name: {[Op.iLike]:`${name}`}},
            include: [{model: Genre}]
        })
    
        let response=[...responseBdd, ...responseAxiosClean]
        
        const searchNameQuery= response.filter(
            element=>element.name.toLowerCase().includes(name.toLowerCase())
        )
        if (searchNameQuery.length===0) throw Error('Name not found')

        return searchNameQuery;

    }catch(error){
        return error.message

    }

}

module.exports= {
    videoGameCreate,
    findOneVideoGame,
    getVideoGame,
    getVideoGameQuery
}