// const getAllApiNew=async()=>{
//     //https://api.rawg.io/api/games?key=3199e611cb3942878545cea3e0621ac0
//     let i=1
//     try{
//         const  response=(  
//             await axios.get(`${API_VIDEOGAMES}?key=${API_KEY}&page=${1}`)
//         ).data.results

//         response?.map((element)=>{
//             return{
//                 id: element.id,
//                 name: element.name,
//                 description: element.description,
//                 platforms: element.platforms.map(element=>element.platform.name),
//                 imagen: element.background_image,
//                 rating: element.rating,
//                 released: element.released,
//                 genres: element.genres.map(element=>element.name),
//                 create: false
//             }
//         })

//     }catch(error){
//         console.log(error)
//     }


// }


// const getAllApiNew=async()=>{

//     let i=1
//     let aux=[]
//     try{
//         const response=(  
//             await axios.get(`${API_VIDEOGAMES}?key=${API_KEY}&page=${i}`)
//         ).data.results
//         aux.push(response);
//         aux=(await Promise.all(aux))
//         console.log(aux)

//         aux?.map((element)=>{
//             return({
//                 id: element.id,
//                 name: element.name,
//                 description: element.description,
//                 platforms: element.platforms.map(element=>element.platform.name),
//                 imagen: element.background_image,
//                 rating: element.rating,
//                 released: element.released,
//                 genres: element.genres.map(element=>element.name),
//                 create: false
//             })
//         })
        
//     }catch(error){
//         console.log(error)
//     }
// }