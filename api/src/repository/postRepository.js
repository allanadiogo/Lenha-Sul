import {con}  from './connection.js'

export async function Post(post) {
    console.log(post);
    const comando = `
    Insert INTO tb_produto(nm_categoria,nm_produto, vl_preco, ds_ingredientes)
    VALUES (?,?,?,?)
    `
    const[resposta] = await con.query (comando, [post.nomeCat,post.nome,post.preco,post.ingredientes])
    

    return resposta[0];    
}

export async function inserirImagem (imagem, id) {
    const comando = 
    `update tb_produto
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

export async function listarPosts (id) {
    const comando = 
    `SELECT
        id_categoria       Categoria,
        nm_produto           NomeProduto,
        vl_preco          Preço,
        ds_ingredientes   Ingredientes
    FROM tb_produto`
    const [linhas] = await con.query(comando);
    return linhas;
}