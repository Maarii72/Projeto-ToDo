const TaskModel = require('../model/TaskModel');

class TaskController{
// criar uma nova tarefa no BD

async create(req, res){
    const task = new TaskModel(req.body);
    await task
          .save()
          .then(response =>{
              return res.status(200).json(response);
          })
          .catch(error =>{
              return res.status(500).json(error);
          });
}
//para atualizar dados da tarefa
async update(req, res){
    //resgatar dados da tarefa que queremos atualizar
    await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
    .then(response =>{
        return res.status(200).json(response);
    })
    .catch(error =>{
        return res.status(500).json(error);
    });
}
}

module.exports = new TaskController();