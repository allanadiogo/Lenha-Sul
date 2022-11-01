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

export async function listarHisto (id) {
        const pedido =
        `SELECT
            id_pedido       PedidoNum,
            dt_pedido       DataDoPedido,
            id_usuario      QualCliente,
            tp_pagamento    tipoPagamento  
        FROM tb_pedido      
        `
    const [linhas] = await con.query(pedido);
    return linhas;

}

export async function listarHisto2 (id) {
    const endereco =
    `SELECT 
    ds_rua      Endereço
    from tb_endereco
    `
    const [linhas] = await con.query(endereco);
    return linhas;
}

export async function listarHisto3 (id) {
    const produto =
    `select
    nm_produto   Produto,
    vl_preco     Valor
    from tb_produto
    `
    const [linhas] = await con.query(produto);
    return linhas;
}