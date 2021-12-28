class dataNotProvided  extends Error{
    constructor() {
        const message = `Did not provide the data`
        super(message)
        this.name = 'dataNotProvided'
        this.idErro = 1
    }
}

module.exports = dataNotProvided    