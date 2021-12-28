const Model = require('../task')


module.exports = {
    list (idnotes) {
        return Model.findAll({
          where: {
            notesId:  idnotes
          }
        })
      },
    
      insert (data) {
        return Model.create(data)
      },
    
      remove(idTask, idnotes) {
        return Model.destroy({ 
          where: {
            id: idTask,
            notesId: idnotes
          }
        })
      },
        
      async catchById (idTask, idnotes) {
        const found = await Model.findOne({
          where: {
            id: idTask,
            notesId: idnotes
          },
          raw: true
        })
    
        if (!found) {
          throw new Error ('Not Found')
        }
    
        return found
      },
    
      Update(taskData, dataToUpdate){
        return Model.update(
            dataToUpdate,
            {
              where : taskData
            })
      }
       
}
