const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id',TaskValidation,  TaskController.update);



//mostrar uma unica tarefa
router.get('/:id', TaskController.show);

//para deletar tarefas
router.delete('/:id', TaskController.delete);

//atualizar o status de uma tarefa
router.put('/:id/:done', TaskController.done);



//rota do listar
router.get('/filter/all/:macaddress', TaskController.all)

//exibir tarefas atrasadas
router.get('/filter/late/:macaddress', TaskController.late);

//exibir tarefas do dia
router.get('/filter/today/:macaddress', TaskController.today);

//exibir tarefas da semana
router.get('/filter/week/:macaddress', TaskController.week);

//exibir tarefas do mes
router.get('/filter/month/:macaddress', TaskController.month);

//exibir tarefas do ano
router.get('/filter/year/:macaddress', TaskController.year);

module.exports = router;
