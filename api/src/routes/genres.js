const {Router}=require('express')

const searchGenres=require('../handlers/genres')

const genresRouter=Router()



genresRouter.get('/', searchGenres)



module.exports=genresRouter