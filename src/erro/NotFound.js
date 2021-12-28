class NotFound extends Error {
    constructor () {
      const message = "Not Found!"  
      super(message)
      this.name = 'NotFound'
      this.idErro = 2
    }
  }
  
  module.exports = NotFound