import express from "express"
import cors from "cors"
import userController from './controller/userController.js'

const server = express()

server.use(cors())
server.use(express.json())

server.use(userController)




const PORTA_API = 5001

server.listen ( PORTA_API, () => console.log(`api subiu na porta ${PORTA_API}`))