const model = require('../notes')
const task = require('../task')
const NotFound = require('../../erro/NotFound')

module.exports = {
    
    insert (notes) {
        return model.create(notes)
    },
    
    remove(id){
        return model.destroy({
            where: {id: id}
        })
    },

    list (){
        return model.findALL()
    },

    async catchById(id){
        const found = await model.findOne({ 
            where : {id: id},
                include : task
    })

        if(!found){
            throw new NotFound()
        }
        
        return found
    },
    update (id, dataToUpdate){
        return model.update( 
            dataToUpdate,
            {
                where: {id: id}
            }
        )
    }  
    
}