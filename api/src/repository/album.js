import {con} from '../connection.js'

export async function cadastroAlbum(info) {
    const comando = `
    INSERT INTO tb_album (NOME, DESCRICAO, LANCAMENTO, PRECO, QUANTIDADE, FK_BANDA)
    VALUES (?, ?, ?, ?, ?, ?);
    `
    const [call] = await con.query(comando, [info.nome, info.descricao, info.lancamento, info.preco, info.quantidade, info.fkId])
    return call
}


export async function visualizarTodosAlbuns () {
    const comando = 
    `
    SELECT
    tb_album.ID_ALBUM AS album,
    tb_album.NOME AS nome_album,
    tb_album.DESCRICAO AS descricao,
    tb_album.LANCAMENTO AS lancamento_data,
    tb_album.PRECO AS preco,
    tb_album.QUANTIDADE AS quantidade,
    tb_album.TIPO AS tipo,
    tb_album.FORMATO AS formato,
    tb_album.DATA_ORIGEM AS fund_data,
    tb_album.IMAGEM_URL	as img,
    tb_album.FK_BANDA AS fkId,
    tb_banda.NOME AS nome_banda
FROM
    tb_album
LEFT JOIN
    tb_banda ON tb_album.FK_BANDA = tb_banda.ID_BANDA;

    `
    const [call] = await con.query(comando, [])
    return call
}


export async function deletarAlbumPorId (idBanda) {
    const comando = 
    `
    delete from tb_album where id_banda = ?

    `
    const [call] = await con.query(comando, [idBanda])
    return call.affectedRows
}




