const router = require('express').Router({ mergeParams: true })
const table = require('../Task/tableTask')
const Task = require('../Task/classTask')

router.get('/', async (req, res) => {
  const tasks = await table.list(req.Note.id)
  res.send(
    JSON.stringify(tasks)
  )
})

router.post('/', async (req, res, next)=> {
    try {
      const idnotes = req.Note.id
      const body = req.body
      const data = Object.assign({}, body, { note_id: idnotes})
      const task = new Task(data)
      await task.create()
      res.status(201)
    
      res.send(task)
    } catch (erro) {
      next(erro)
    }
})

router.delete('/:id', async (req, res) => {
  const data = {
    id: req.params.id,
    NoteId: req.Note.id
  }

  const task = new Task(data)
  await task.remove()
  res.status(204)
  res.end()
})

router.get('/:id', async (req, res, next) => {
  try{
    const data = {
      id: req.params.id,
      note_id: req.Note.id
    }
    const task = new Task(data)
    await task.load()
    res.send(
      JSON.stringify(task)
    )
}catch (erro) {
  next(erro)
}
})

router.put('/:id', async (req, res, next) => {
  try{
    const data = Object.assign(
      {},
      req.body,
      {
        id: req.params.id,
        note_id: req.Note.id,
      }
    )
    const task = new Task(data)
    await task.update()
    res.status(204)
    res.end()
  }catch (erro){
    next(erro)
  }

})

module.exports = router