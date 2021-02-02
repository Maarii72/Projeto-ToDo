//importar express
const express = require('express');
//identifica as rotas
const router = express.Router();

const TaskController =require('../controller/TaskController')

//criar uma nova rota
router.post('/', TaskController.create);
module.exports = router;