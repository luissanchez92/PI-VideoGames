const axios=require('axios')
const { API_GENRES, API_KEY }=process.env;
const {Genre}=require('../db')


const getGenres=async()=>{
    const responseGenres= (
        await axios.get(`${API_GENRES}?key=${API_KEY}`)
    ).data.results;

    const cleanResponse= responseGenres.map(element=>element.name)

    for (let i=0; i<cleanResponse.length; i++){
        await Genre.findOrCreate({
            where: {name:cleanResponse[i]}
        })
    }
    return cleanResponse;
}


module.exports=getGenres