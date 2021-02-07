const TaskModel = require('../model/TaskModel');
const {startOfDay, endOfDay, startOfWeek, endOfWeek} = require('date-fns');

const current = new Date();

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

//rota para listar todas as tarefas
async all(req, res){
    //listar filtrando pelo macaddress
    await TaskModel.find({macaddress: {'$in': req.body.macaddress}})
    //organizar por data e hora
    .sort('when')
    .then(response =>{
        return res.status(200).json(response);
    })
    .catch(error =>{
        return res.status(500).json(error);
    })

}

//exibir tarefa específica
async show(req, res){
    await TaskModel.findById(req.params.id)
    .then(response =>{
        if(response)
        return res.status(200).json(response)
        else
        return res.status(404).json({error: 'tarefa não encontrada'});
    })
    .catch(error =>{
        return res.status(500).json(error);
    })
}

//deletar tarefa usando id
async delete(req, res){
    await TaskModel.deleteOne({'_id': req.params.id})
    .then(response =>{
        return res.status(200).json(response);
    })
    .catch(error =>{
        return res.status(500).json(error);
    })
}

//atualizar o status de uma tarefa
async done(req, res){
    await TaskModel.findByIdAndUpdate(
        {'_id': req.params.id},
        {'done': req.params.done},
        {new: true})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
}

//exibir tarefas atrasadas
async late(req, res){
    //procurar baseado na data,primeiro saber data e hora atual com a const current
    await TaskModel
    .find({
        //data menor ou igual a current
        'when': {'$lt': current},
        'macaddress': {'$in': req.body.macaddress}
    })
    //organizar tarefas por data e hora
    .sort('when')
    .then(response =>{
        return res.status(200).json(response);
    })
    .catch(error =>{
        return res.status(500).json(error);
    });
}

//filtrar tarefa do dia
async today(req, res){
    await TaskModel
    .find({'macaddress': {'$in': req.body.macaddress},
    //data sej maior ou igual ao inicio do dia corrente 
    'when': {'$gte': startOfDay(current), '$lt': endOfDay(current)}
    })
    .sort('when')
    .then(response =>{
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
}

//filtar tarefa semanal
async week(req, res){
    await TaskModel
    .find({'macaddress': {'$in': req.body.macaddress},
    //data seja maior ou igual ao inicio da semana e final da semana 
    'when': {'$gte': startOfWeek(current), '$lt': endOfWeek(current)}
    })
    .sort('when')
    .then(response =>{
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    });
}
}

module.exports = new TaskController();