import {con}  from './connection.js'

export async function Post(post) {
    const comando = `
    Insert INTO tb_produto(id_categoria,nm_produto,vl_preco,ds_ingredientes)
    VALUES (?,?,?,?,?)
    `
    const[resposta] = await con.query (comando, [post.categoria,post.nome,post.preco,post.ingredientes])
    post.id = resposta.insertId;

    return post;    
}

export async function inserirImagem (imagem, id) {
    const comando = 
    `UPDATE tb_produto
    SET img_produto             = ?
    WHERE id_produto            = ?`

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}

export async function listarCategorias(id) {
    const comando = `
        select id_categoria         as id,
               nm_categoria         as categoria
          from tb_categoria
         where id_categoria = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}