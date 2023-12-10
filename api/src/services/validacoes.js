
function validacaoCadastro(info) {
    try {
        let temErro = false
        if(!info.email) {
            temErro = true
            throw new Error("Campo e-mail obrigatório!")
        }
        if(!info.cpf) {
            temErro = true
            throw new Error("Campo cpf obrigatório!")
        }
        if(!info.telefone) {
            temErro = true
            throw new Error("Campo telefone obrigatório!")
        }
        if(!info.celular) {
            temErro = true
            throw new Error("Campo celular obrigatório!")
        }
        if(!info.senha) {
            temErro = true
            throw new Error("Campo senha obrigatório!")
        }
        return temErro

    } catch (error) {
        throw new Error(error.message)
    }
}

function validacaoVisualizacao (info) {
    try {
        let temErro = false

        if (!info[0]) {
            temErro = true
            throw new Error ("Nenhum usuário encontrado!")
        }

        return temErro
    } catch (error) {
        throw new Error(error.message)
    }
}

export { validacaoCadastro, validacaoVisualizacao }