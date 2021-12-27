const Note = require('../models/notes')

module.exports = app => {
    
    app.post('/notes',(req, res) => {
        const notes = req.body

        Note.adiciona(notes, res)
    })
    
    app.get('/notes', res => {
        Note.lista(res)
    })
   
    app.get('/notes/:id', (req, res) => {
        const id = parseInt(req.parms.id)

        Note.buscaPorId(id,res)
    })

    app.patch('/notes/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body

        Note.altera(id, values, res)

    })
   
    app.delete('/notes/:id', (req, res) => {
        const id = parseInt(req.parms.id)
        
        Note.delete(id, res)
    })

}