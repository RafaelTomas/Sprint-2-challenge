const TableNotes = require("./tableNotes")

class Notes {
    constructor({id, title, description, createdAt, updatedAt, tasks}){
        this.id = id
        this.title = title
        this.description = description
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.tasks = tasks 
    }


    async create() {
        const result = await TableNotes.insert({
            title: this.title,
            description: this.description
    })
    this.id = result.id
    this.createdAt = result.createdAt
    this.updatedAt = result.updatedAt
    }

    async update() {
        await TableNotes.catchById(this.id)
        const camp = ['title','description','task']
        const dataToUpdate = {}

        camp.forEach(camp =>{
            const value = this[camp]
            if (typeof value == 'string' && value.length > 0){
                dataToUpdate[camp] = value
            }
        })
        if (Object.keys(dataToUpdate).length === 0) {
            throw new Error('No data provided to update')
        }
        await TabelaProject.atualizar(this.id, dadosParaAtualizar)

    }

    remove() {
        return TableNotes.remove(this.id)
    }    

    validate () {
        const camp = ['title', 'description', 'task']

        camp.forEach(camp => {
            const value = this[camp]

            if (typeof valor !== 'string' || value.length === 0) {
                throw new Error(`The camp '${camp}'is invalid`)
            }
        })
    }
}


module.exports = Notes

//feito