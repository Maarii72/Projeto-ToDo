const TaskModel = require('../model/TaskModel');

class TaskController{
//função para receber requisição e a resposta e criar uma nova tarefa
async create(req, res){
    const task =new TaskModel(req.body);
    await task
        .save()
        .then(Response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });

}
}

module.exports = new TaskController();