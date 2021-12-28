class valueNotSpported extends Error {
    constructor (contentType) {
        super(`value ${contentType} not supported`)
        this.name = 'valueNotSpported'
        this.idErro = 3
    }
}

module.exports = valueNotSpported