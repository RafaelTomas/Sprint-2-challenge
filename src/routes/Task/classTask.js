const table = require('./task')


class Task {
    constructor({title, taskRelevance, completed, createdAt, updatedAt, note_id}){
        this.title = title
        this.taskRelevance = taskRelevance
        this.completed = completed
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.note_id = note_id
    }
    async create() {
        const result = await Tabela.insert({
            title: this.title,
            taskRelevance: this.taskRelevance,
            completed: this.completed,
            note_id: this.note_id

        })
        this.id = result.id
        this.createdAt = result.createdAt
        this.updatedAt = result.updatedAt
    }
    remove() {
        return table.remove(this.note_id)
    }
}


module.exports = Task