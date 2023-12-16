import express from "express"
import cors from "cors"
import userController from './controller/userController.js'
import albumController from './controller/albumController.js'
const server = express()

server.use(cors())
server.use(express.json())

server.use(userController)
server.use(albumController)



const PORTA_API = 5001

server.listen ( PORTA_API, () => console.log(`api subiu na porta ${PORTA_API}`))