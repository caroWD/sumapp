import express from 'express'
import cors from 'cors'
import { PORT } from '../config'

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (_req, res) => {
  res.send('Hello World!')
})

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
