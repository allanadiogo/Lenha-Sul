import { con } from "./connection.js";


export async function salvarProduto(produto) {
    const comando = `
        insert into tb_produto (nm_produto, vl_preco, ds_ingredientes)
                        values (?, ?, ?, ?)
    `

    const dataAtual = new Date();
    const [resp] = await con.query(comando, [
                            produto.nome,
                            produto.preco,
                            dataAtual,
                            produto.ingredientes
                        ])
    return resp.insertId;
}



export async function alterarProduto(id, produto) {
    const comando = `
        update tb_produto 
           set  
               nm_produto = ?, 
               vl_preco = ?, 
               ds_ingredientes= ?
         where id_produto = ?
    `

    const [resp] = await con.query(comando, [
            
                            produto.nome,
                            produto.preco,
                            produto.ingredientes,
                            id
                        ])
    return resp.affectedRows;
}



export async function salvarProdutoCategoria(idProduto, idCategoria) {
    const comando = `
        insert into tb_produto_categoria (id_categoria, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}






export async function salvarProdutoImagem(idProduto, imagemPath) {
    const comando = `
        insert into tb_produto_imagem (id_produto, ds_imagem)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, imagemPath])
}


export async function buscarProdutos() {
    const comando = `
        select tb_produto.id_produto        as id,
            nm_produto                      as produto,
            vl_preco                        as preco,
            ds_ingredientes                   as ingredientes,
            count(nm_categoria)             as qtdCategorias
        from tb_produto 
        inner join tb_produto_categoria on tb_produto_categoria.id_produto = tb_produto.id_produto
        inner join tb_categoria on tb_categoria.id_categoria = tb_produto_categoria.id_categoria
        group 
            by tb_produto.id_produto,
                nm_produto,
                vl_preco,
                ds_ingredientes,
               
        `

    const [registros] = await con.query(comando);
    return registros;
}



export async function buscarProdutoPorId(id) {
    const comando = `
         select id_produto                      as id,
                nm_produto                      as produto,
                vl_preco                        as preco,
                ds_ingredientes                     as ingredientes,
        from tb_produto 
       where id_produto = ?
        `

    const [registros] = await con.query(comando, [id]);
    return registros[0];
}


export async function buscarProdutoCategorias(idProduto) {
    const comando = `
         select id_categoria   as id
           from tb_produto_categoria 
          where id_produto = ?
        `

    const [registros] = await con.query(comando, [idProduto]);
    return registros.map(item => item.id);
}



export async function buscarProdutoImagens(idProduto) {
    const comando = `
          select ds_imagem   as imagem
            from tb_produto_imagem 
           where id_produto = ?
        `

    const [registros] = await con.query(comando, [idProduto]);
    return registros.map(item => item.imagem);
}






export async function removerProdutoCategorias(idProduto) {
    const comando = `
        delete from tb_produto_categoria 
              where id_produto = ?
    `

    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}



export async function removerProdutoImagens(idProduto) {
    const comando = `
        delete from tb_produto_imagem 
              where id_produto = ?
    `

    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}




export async function removerProduto(idProduto) {
    const comando = `
        delete from tb_produto 
              where id_produto = ?
    `

    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}




export async function removerProdutoImagensDiferentesDe(id, imagens) {
    const comando = `
        delete from tb_produto_imagem 
              where ds_imagem NOT IN (?) AND id_produto = ?
    `

    const [resp] = await con.query(comando, [imagens, id])
    return resp.affectedRows;
}


export async function listarProdutosInicio() {
    const comando = `
        select tb_produto.id_produto		id,
               nm_produto					produto,
               vl_preco						preco,
               min(ds_imagem)				imagem
          from tb_produto
     left join tb_produto_imagem on tb_produto_imagem.id_produto = tb_produto.id_produto
         group 
            by tb_produto.id_produto,
               nm_produto,
               vl_preco,
             
    `

    const [registros] = await con.query(comando);
    return registros;
}