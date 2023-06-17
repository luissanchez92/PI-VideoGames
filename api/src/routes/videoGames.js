const {Router}=require('express')

const {searchVideoGames, searchVideoGamesID, createVideoGame, searchNameVideoGames}=require('../handlers/videoGames')


const videoGamesRouter=Router()



videoGamesRouter.get('/', searchVideoGames)

videoGamesRouter.get('/name', searchNameVideoGames)

videoGamesRouter.get('/:id', searchVideoGamesID)

videoGamesRouter.post('/', createVideoGame)



module.exports=videoGamesRouter