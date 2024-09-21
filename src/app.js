import express from 'express'
import './utils/global.js'
import cors from "cors"
import 'dotenv/config.js'

let servidor = express()
servidor.use(cors())
servidor.use(express.json())



const PORT = process.env.PORT
servidor.listen(PORTA, () => console.log(`api subi na porta ${PORT}`))


