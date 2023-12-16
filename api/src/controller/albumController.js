import Router from "express";
import { cadastroAlbum, visualizarTodosAlbuns } from "../repository/album.js";


const server = Router()


//endpoint para cadastrar um álbum
server.post("/album", async (req,resp) => {
    try {
        const data = req.body
       
        const albumCadastrado = await cadastroAlbum(data)
        resp.status(200).send({
            msg : "Álbum Cadastrado!",
            data
        })
    } catch (error) {
        resp.status(400).send(error.message)
    }
})


//endpoint para visualizar todos os albúns cadastrados
server.get("/albuns", async (req, res) => {
    try {
        const albuns = await visualizarTodosAlbuns()

        if(!albuns || albuns[0] == null || undefined) {
            res.status(404).send()
        }

        res.send(albuns)
    } catch (error) {
    
        res.status(401).send({
            erro: error.message
        })
    }    
    })

export default server