const callmodels = [
    require('../models/notes'),
    require('../models/task')
]

async function createTable() {
    for (let index = 0; index < callmodels.length; index++) {
        const models = callmodels[index];
        await models.sync()
        
    }
}

createTable()