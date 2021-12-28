const router = require('express').Router()
const tableNotes= require('../Notes/tableNotes')
const routerTask = require('../Task/classTask')
const Notes = require('../Notes/classNotes')

router.get('/', async (req, res) => {
  const result = await tableNotes.list()
 
  res.status(200)
  
  res.send(JSON.stringify(result))
})

router.post('/', async (req, res, next) => {
  try {
    const datareciver = req.body
    const notation = new Notes(datareciver)
    await notation.create()

    res.status(201)
    res.send(JSON.stringify(notation))
  } catch (erro) {
    next(erro)
  }
})

router.get('/:idnotes', async (req, res, next) => {
  try {
    const id = req.params.idnotes
    const notation = new Notes({ id: id })
    await notation.load()
    res.status(200)

    res.send(JSON.stringify(notation))
    
    
  } catch (erro) {
    next(erro)
  }
})

router.put('/:idnotes', async (req, res, next) => {
  try {
    const id = req.params.idnotes
    const datareciver = req.body
    const dados = Object.assign({}, datareciver, { id: id })
    const notes = new notes(dados)

    res.status(204)
    await notes.update()
    res.end()
  } catch (erro) {
    next(erro)
  }
})

router.delete('/:idnotes', async (req, res, next) => {
  try {
    const id = req.params.idnotes
    const notes = new notes({ id: id })
    await notes.load()
    await notes.remove()

    res.status(204)
    res.end()
  } catch (erro) {
    next(erro)
  }
})




router.use('/:idnotes/task', routerTask)

module.exports = router