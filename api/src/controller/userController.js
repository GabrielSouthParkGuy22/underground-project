import Router from "express";

import { inserirDados, realizarLogin, visualizarUsuarios } from "../repository/usuario.js";
import { validacaoCadastro, validacaoVisualizacao } from '../services/validacoes.js'

const server = Router()


// Endpoint de cadastro do usuário
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

// Endpoint para carregar todos os usuários cadastrados
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


// Endpoint para verificar se um usuário existe na tabela na hora de realiar o login
server.get("/usuario/login", async (req,resp) => {
    try {
        const info = req.body 
        const userLogado = await realizarLogin(info)
        console.log(userLogado, typeof userLogado)
        
        if(userLogado[0] == null || undefined || !userLogado) {
            resp.status(401).send("USER NOT REGISTERED")
        } else {
            resp.status(200).send("LOGIN PERMITIDO")
        }
    } catch (error) {
        resp.send(error.message)
    }
})




export default server