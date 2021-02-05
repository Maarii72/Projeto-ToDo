const TaskModel = require('../model/TaskModel');
const {isPast} = require('date-fns');

const TaskValidation = async (req, res, next) =>{

    const { macaddress, type, title, description, when } = req.body;

    if(!macaddress)
    return res.status(400).json({error: 'macadress é obrigatório'});
    else if(!type)
    return res.status(400).json({error: 'Tipo é obrigatório'});
    else if(!title)
    return res.status(400).json({error: 'Título é obrigatório'});
    else if(!description)
    return res.status(400).json({error: 'Descrição é obrigatória'});
    else if(!when)
    return res.status(400).json({error: 'Data e Hora são obrigatórias'});

    //exceções data e hota
    else if(isPast(new Date(when)))
    return res.status(400).json({error: 'Escolha uma Data e Hora Futura'});
    else{
        //não permitir uma tarefa na mesma data e hora
        let exists;

        exists = await TaskModel.
        findOne({
            'when': {'$eq': new Date(when)},
            'macaddress': {'$in': macaddress}
        });

 //verificar se a tarefa existe
 if(exists){
    return res.status(400).json({error: 'Já existe uma tarefa nesse dia e horário'}); 
 }
next();
        
    }


}

module.exports = TaskValidation;