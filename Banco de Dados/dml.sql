select *
from tb_admin
join tb_pedido on tb_admin.id_admin = tb_pedido.id_admin;

Insert INTO tb_usuario(nm_usuario, ds_email, ds_senha, ds_telefone, ds_cpf)
VALUES('Michael', 'michaelchaves@gmail.com', '123', '11965126413', '1234567890');

use lenhaasul;
select * from tb_produto;

select *
from tb_categoria;
 
Insert INTO tb_admin (ds_email, ds_senha)
VALUES('admin@admin.com.br', 'admin123' );    

Insert INTO tb_admin (ds_email, ds_senha)
VALUES('Admin', '1234' );    

insert into tb_produto (id_categoria, nm_produto, vl_preco, ds_ingredientes)
                    values ('Salgada', 'Pizza de Calabresa', 26.00, "Muçarela, molho de tomate, calabresa");
                    
insert into tb_endereco (ds_rua, nr_residencia, ds_cep, ds_bairro, ds_complemento)
					values('Rua Vedeta', 12, '01214-291', 'Velheiros', 'apartamento');
                    
insert into tb_pagamento_cartao(nr_cartao, nm_cartao, dt_vencimento, nr_cvv, ds_apelido, ds_cpf)
					values('11100022233', 'MICHAEL CHAVES', 2005-07, 333, 'Cartaqo do michael', '123123123');
                    
                    select * 
                    from tb_pagamento_cartao;
                    
                    select *
                    from tb_endereco;

insert into tb_produto_categoria (id_categoria, id_produto)
                            values (1, 1);
                            
insert into tb_produto_categoria (id_categoria, id_produto)
                            values (2, 1);      
                            
insert into tb_produto_categoria (id_categoria, id_produto)
                            values (3, 1);
                            
Insert INTO tb_endereco(ds_rua)
VALUES('Rua');						
                            

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

