const Model = require('./task')


module.exports = {
    list (idnotes) {
        return Model.findAll({
          where: {
            note_id:  idnotes
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
            note_id: idnotes
          }
        })
      }
               
}
