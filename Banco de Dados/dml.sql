select *
from tb_admin
join tb_pedido on tb_admin.id_admin = tb_pedido.id_admin;
 
Insert INTO tb_admin (ds_email, ds_senha)
VALUES('admin@admin.com.br', 'admin123' );    

Insert INTO tb_admin (ds_email, ds_senha)
VALUES('Admin', '1234' );    

insert into tb_produto (id_produto, nm_produto, vl_preco, id_categoria, ds_ingredientes)
                    values (1, 'Pizza de Calabresa', 26.00, 2, "Muçarela, molho de tomate, calabresa");

insert into tb_produto_categoria (id_categoria, id_produto)
                            values (1, 1);
                            
insert into tb_produto_categoria (id_categoria, id_produto)
                            values (2, 1);      
                            
insert into tb_produto_categoria (id_categoria, id_produto)
                            values (3, 1);


