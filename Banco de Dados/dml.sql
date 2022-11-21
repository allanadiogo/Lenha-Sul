use lenhaasul;

-- Conta Adm
Insert INTO tb_admin (ds_email, ds_senha)
VALUES('admin@admin.com.br', 'admin123' );    

Insert INTO tb_admin (ds_email, ds_senha)
VALUES('Admin', '1234' );    

-- Conta Usuário
Insert INTO tb_usuario(nm_usuario, ds_email, ds_senha, ds_telefone, ds_cpf)
VALUES('usuario', 'usuario@gmail.com', '1234', '11965126413', '1234567890');

-- Categorias
insert into tb_categoria (nm_categoria)
                            values ('Salgada');
insert into tb_categoria (nm_categoria)
                            values ('Doce');      
insert into tb_categoria (nm_categoria)
                            values ('Bebida');
                            

-- Produtos
insert into tb_produto (nm_produto, vl_preco, ds_ingredientes)
                    values ('Pizza de Calabresa', 26.00, "Muçarela, molho de tomate, calabresa");

                    
-- Endereços
insert into tb_endereco (ds_rua, nr_residencia, ds_cep, ds_bairro, ds_complemento)
					values('Rua Frei', 12, '01214-200', 'Velheiros', 'apartamento');


-- Pagamento em Cartão   
insert into tb_pagamento_cartao(nr_cartao, nm_cartao, dt_vencimento, nr_cvv, ds_apelido, ds_cpf)
					values('11100022233', 'Usuário', 2005-07, 333, 'Teste', '123123123');
                    				

-- Selects
select *
from tb_admin
join tb_pedido on tb_admin.id_admin = tb_pedido.id_admin;

select * from tb_produto;

select *
from tb_categoria;

SELECT
        id_categoria       Categoria,
        nm_produto           NomeProduto,
        vl_preco          Preço,
        ds_ingredientes   Ingredientes
    FROM tb_produto;
    
SELECT
            dt_pedido       DataDoPedido,
            id_usuario      QualCliente,
            tp_pagamento    tipoPagamento  
        FROM tb_pedido;
        
SELECT 
			ds_rua      Endereço
            from tb_endereco;
            

select 
		nm_produto   Produto,
        vl_preco     Valor
        from tb_produto;

    
SELECT
            id_pedido       NumeroPedido,
            dt_pedido       DataDoPedido,
            id_usuario      QualCliente,
            tp_pagamento    tipoPagamento
        FROM tb_pedido;

select * from tb_pagamento_cartao;

     
                    
select * from tb_endereco;




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
                ds_ingredientes;
                
                
                select 
                id_produto                      as id,
                nm_produto                      as produto,
                vl_preco                        as preco,
                ds_ingredientes                     as ingredientes
        from tb_produto 
       where id_produto = 1;