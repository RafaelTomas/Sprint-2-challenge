class invalidField extends Error{
    constructor(field) {
        const message = `Field '${field}' is invalid`
        super(message)
        this.name = 'invalidField'
        this.idErro = 0
    }
}

module.exports = invalidField