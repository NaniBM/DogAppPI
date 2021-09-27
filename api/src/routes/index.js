const { Router } = require('express');
// Importar todos los routers;
const dogRouter = require('./dogRoute.js')
const dogsRouter = require('./dogsRoute.js')
const temperamentRouter = require('./temperamentRoute.js')


const router = Router();

// Configurar los routers
router.use('/dog', dogRouter);
router.use('/dogs', dogsRouter);
router.use('/temperament', temperamentRouter);


module.exports = router;
