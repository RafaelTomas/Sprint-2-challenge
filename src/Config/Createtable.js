const callmodels = [
    require('../routes/Notes/notes'),
    require('../routes/Task/task')
]

async function createTable() {
    for (let index = 0; index < callmodels.length; index++) {
        const models = callmodels[index];
        await models.sync()
        
    }
}

createTable()