import Router from "express";

import { inserirDados, visualizarUsuarios } from "../repository/usuario.js";
import { validacaoCadastro, validacaoVisualizacao } from '../services/validacoes.js'

const server = Router()

server.post("/usuario", async (req,resp) => {
    try {
        const data = req.body
       
        if(validacaoCadastro(data)) {
            throw new Error("Campos inválidos")
        }

        const userCadastrado = await inserirDados(data)
        resp.status(200).send({
            msg : "usuario cadastrado!",
            data
        })
    } catch (error) {
        resp.status(400).send(error.message)
    }

})



server.get("/cadastros/usuarios", async (req, res) => {
try {
    const usuarios = await visualizarUsuarios()
    // if (!usuarios[0]) {
    //     throw new Error ("Nenhum usuário encontrado!")
    // }
    if(validacaoVisualizacao(usuarios)) {
        throw new Error(error.message)
    }    

    res.send(usuarios)

} catch (error) {

    res.status(401).send({
        erro: error.message
    })
}    

})




export default server