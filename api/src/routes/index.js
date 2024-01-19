const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getGames = require('./videogames.js');
const getGenres= require('./genres.js');
const getFilters = require('./filters.js');
const getPlatformss = require('./platforms.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',(req,res)=>{
    res.status(200).send("indic");
});
router.use('/videogames',getGames);
router.use("/genres",getGenres)
router.use("/filters",getFilters)
router.use("/platforms",getPlatformss)

module.exports = router;
