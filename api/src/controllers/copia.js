// const getVideoGame=async(page)=>{
//     let responseBdd = await getAllBdd();
//     let response = [];    
//     if(parseInt(page) === 1){

//         if(responseBdd.length < 15){
//             let result = (15 - responseBdd.length);
//             let responseApi = await getAllApi(1, result);            
//             response = responseBdd.concat(responseApi);            
//         } else {
//             let responseApi = await getAllApi(page)
//             response = response.concat(responseApi);
//         }

//     } else {

//         let responseApi = await getAllApi(page)
//         response = response.concat(responseApi);

//     }
//     console.clear();
//     console.log("******************************");
//     console.log(response);
//     return response;
// }