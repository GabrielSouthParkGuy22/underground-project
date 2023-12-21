import Router from "express";
import { cadastroAlbum, deletarAlbumPorId, visualizarTodosAlbuns } from "../repository/album.js";


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
            throw new Error("Nenhum album encontrado!")
        }

        res.send(albuns)
    } catch (error) {
    
        res.status(401).send({
            erro: error.message
        })
    }    
})

// deletar album
server.delete("/album/:idBanda", async (req,resp) => {
    try {
        const id = req.params.idBanda
        await deletarAlbumPorId(id)
        resp.status(200).send()

    } catch (error) {
        resp.status(401).send(error.message)
    }
})

export default server