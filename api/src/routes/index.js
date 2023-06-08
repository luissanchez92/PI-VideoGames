const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const genresRouter=require('./genres')
const videoGamesRouter=require('./videoGames')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/genres', genresRouter)
router.use('/videoGames', videoGamesRouter)

module.exports = router;
