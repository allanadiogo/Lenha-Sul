import {con}  from './connection.js'

export async function Post(produto) {
    const comando = `
    insert into tb_produto(id_categoria,nm_produto, vl_preco, ds_ingredientes)
    VALUES (?,?,?,?);
    `
    const[resposta] = await con.query (comando, [produto.categoria, produto.nome, produto.preco, produto.ingredientes])
    

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
    nm_categoria        NomeCategoria,
    nm_produto             NomeProduto,
    vl_preco          Preço,
    ds_ingredientes   Ingredientes
FROM tb_produto`
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function listarHisto (id) {
        const comando =
        `SELECT
            id_pedido       PedidoNum,
            dt_pedido       DataDoPedido,
            id_usuario      QualCliente,
            tp_pagamento    tipoPagamento  
        FROM tb_pedido `
    const [linhas] = await con.query(comando);
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

export async function ListarCategoria(){
    const comando =` select nm_categoria    nome,
                            id_categoria    id
                     from tb_categoria `
    const[resposta] = await con.query(comando);
    return resposta
}

export async function CadastrarEndereco(endereco){
    const comando = `
    insert into tb_endereco (ds_rua, nr_residencia, ds_cep, ds_bairro, ds_complemento)
			values(?,?,?,?,?);
    `
   
    const [resposta] = await con.query(comando , [endereco.rua, endereco.residencia, endereco.cep, endereco.bairro, endereco.complemento])
    
    return resposta[0];
}

export async function CadastrarCartao(cartao){
    const comando = `
    insert into tb_pagamento_cartao(nr_cartao, nm_cartao, dt_vencimento, nr_cvv, ds_apelido, ds_cpf)
					values(?, ?, ?, ?, ?, ?);     
    `

    const [resposta] = await con.query(comando, [cartao.numero, cartao.nome, cartao.vencimento, cartao.cvv, cartao.apelido, cartao.cpf])

    return resposta[0];
}

export async function Pizzas (){
    const comando = `
    select 
        nm_produto   nome, 
        vl_preco     preço,
        ds_ingredientes     ingredientes
        from tb_produto
   
    `
const [linhas] = await con.query(comando);
return linhas;
}

export async function ListarNomesCategorias (id){
    const comando = `
    select nm_categoria nome
    from tb_categoria
    where id_categoria = ?    
`
const [resposta] = await con.query(comando,id)
return resposta[0]
}

export async function atualizarStatus(idPedido,status){
    console.log(id.Pedido,status)
    const comando = `
    update tb_pedido
    set ds_status = ?
    where id_pedido ?                
    `

    const [ resposta ] = await con.query (comando,[status,idPedido])
    return resposta.affectedRows;
}