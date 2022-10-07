select *
from tb_admin
join tb_pedido on tb_admin.id_admin = tb_pedido.id_admin;
 
Insert INTO tb_admin (ds_email, ds_senha)
VALUES('admin@admin.com.br', 'admin123' );    

Insert INTO tb_admin (ds_email, ds_senha)
VALUES('Admin', '1234' );    

insert into tb_produto (nm_produto, vl_preco, id_categoria, ds_ingredientes)
                    values ('Pizza de Calabresa', 26.00, 1, "Muçarela, molho de tomate, calabresa");

insert into tb_categoria(id_categoria, nm_categoria)
                            values (1, 'salgada');
                            
insert into tb_categoria(id_categoria, nm_categoria)
                            values (2, 'doce');
                            
insert into tb_categoria(id_categoria, nm_categoria)
                            values (3, 'bebida');
                            

