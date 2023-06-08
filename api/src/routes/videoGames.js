const {Router}=require('express')

const {searchVideoGames, searchVideoGamesID, createVideoGame}=require('../handlers/videoGames')


const videoGamesRouter=Router()



videoGamesRouter.get('/', searchVideoGames)

videoGamesRouter.get('/:id', searchVideoGamesID)

videoGamesRouter.post('/', createVideoGame)



module.exports=videoGamesRouter