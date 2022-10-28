select *
from tb_admin
join tb_pedido on tb_admin.id_admin = tb_pedido.id_admin;
 
Insert INTO tb_admin (ds_email, ds_senha)
VALUES('admin@admin.com.br', 'admin123' );    

Insert INTO tb_admin (ds_email, ds_senha)
VALUES('Admin', '1234' );    

Insert INTO tb_usuario (nm_usuario, ds_cpf, ds_email, ds_senha, ds_telefone)
VALUES('Alana', '1', 'alana@gmail.com', '1234', '99999');



insert into tb_produto(id_categoria,nm_categoria,nm_produto, vl_preco, ds_ingredientes)
                    values (1,'Salgada', 'Pizza de Calabresa', 26.00, "Muçarela, molho de tomate, calabresa");

select * from tb_categoria;

insert into tb_categoria(id_categoria, nm_categoria)
                            values (1, 'salgada');
                            
insert into tb_categoria(id_categoria, nm_categoria)
                            values (2, 'doce');
                            
insert into tb_categoria(id_categoria, nm_categoria)
                            values (3, 'bebida');
                            
select *
from tb_produto;
                            

select *
from tb_categoria;

         

