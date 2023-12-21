import Router from "express";

import { inserirDados, realizarLogin, visualizarItemPedido, visualizarUsuarios } from "../repository/usuario.js";
import { validacaoCadastro, validacaoVisualizacao } from '../services/validacoes.js'
import { pedidoUsuario } from "../repository/pedido.js";

const server = Router()


// Endpoint de cadastro do usuário
server.post("/usuario", async (req, resp) => {
    try {
        const data = req.body

        if (validacaoCadastro(data)) {
            throw new Error("Campos inválidos")
        }

        const userCadastrado = await inserirDados(data)
        resp.status(200).send({
            msg: "usuario cadastrado!",
            data
        })
    } catch (error) {
        resp.status(400).send(error.message)
    }

})

// Endpoint para carregar todos os usuários cadastrados
server.get("/cadastros/usuarios", async (req, res) => {
    try {
        const usuarios = await visualizarUsuarios()
        // if (!usuarios[0]) {
        //     throw new Error ("Nenhum usuário encontrado!")
        // }
        if (validacaoVisualizacao(usuarios)) {
            throw new Error(error.message)
        }

        res.send(usuarios)

    } catch (error) {

        res.status(401).send({
            erro: error.message
        })
    }
})


// Endpoint para verificar se um usuário existe na tabela na hora de realiar o login
server.post("/usuario/login", async (req, resp) => {
    try {
        const { email, senha } = req.body
        const userLogado = await realizarLogin(email, senha)
        console.log(email, senha)

        if (!userLogado) {
            resp.status(401).send('nao autorizado')
        } else {
            resp.status(200).send(userLogado)
        }
    } catch (error) {
        resp.send(error.message)
    }
})

server.post("/cadastro/pedido", async (req, resp) => {
    try {
        const { idAlbum, idUsuario } = req.body
        const userLogado = await pedidoUsuario(idAlbum, idUsuario)
        console.log(userLogado)
        if (!idAlbum || !idUsuario) {
            throw new Error("Campos de id inválidos ou não cadastrados")
        }
        resp.status(200).send(userLogado.data)
    } catch (error) {
        resp.status(401).send(error.message)
    }
})


//Visuaizar Album comprado pelo usuario
server.get("/albuns-comprados", async (req, res) => {
    try {
        const usuarios = await visualizarItemPedido()

        res.send(usuarios)


    } catch (error) {

        res.status(401).send({
            erro: error.message
        })
    }
})





export default server