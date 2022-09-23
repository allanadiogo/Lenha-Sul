create database lenhaSul;
use lenhaSul;

create table tb_usuario (
	id_usuario         int primary key auto_increment,
    nm_usuario        varchar(200),
    ds_cpf        varchar(14),
    ds_email        varchar(200),
    ds_senha    varchar(200),
    ds_telefone        varchar(15)
    
    );
    
create table tb_pedido (
		id_pedido			int primary key auto_increment,
        id_usuario			int,
        tp_pagamento		varchar(200),
        dt_pedido			varchar(200),
        ds_status			varchar(200),
        foreign key (id_usuario) references tb_usuario (id_usuario)
        );
        
create table id_endereco (
		id_endereco				int primary key auto_increment,
        id_pedido				int,
        ds_rua					varchar(100),
        nr_residencia			int,
        ds_complemento     		varchar(200),
        ds_cep					varchar(20),
        ds_bairro				varchar(200),
        foreign key (id_pedido) references tb_pedido (id_pedido)
        );
        
        
create table tb_pagamento_dinheiro (
		id_pagamento_dinheiro 			int primary key auto_increment,
        id_pedido						int,
        vl_dinheiro						int,
        foreign key (id_pedido) references tb_pedido (id_pedido)
        );
        
create table tb_pagamento_cartao(
		id_pagamento_cartao 			int primary key auto_increment,
        id_pedido						int,
        nm_cartao						varchar(200),
        nr_cartao						varchar(200),
        ds_pedido						varchar(200),
        dt_vencimento					varchar(200),
        foreign key (id_pedido) references tb_pedido (id_pedido)
        );
        
create table tb_pagamento_pix (
		id_pagamento_pix 			int primary key auto_increment,
        id_pedido						int,
        nr_pix						varchar(200),
        foreign key (id_pedido) references tb_pedido (id_pedido)
        );      
        
create table tb_pedido_item (
        id_produto_item 		int primary key auto_increment,
        id_produto				int,
        id_pedido				int,
        foreign key (id_produto) references tb_produto (id_produto),
        foreign key (id_pedido) references tb_pedido (id_pedido)
        );

 create table tb_categoria (
	id_categoria		int primary key auto_increment,
        nm_categoria		varchar(200)
);
        
create table tb_produto (
        id_produto				int primary key auto_increment,
		nm_produto				varchar(100),     
        vl_preco				decimal(12.5),
        id_categoria			int,
        img_produto 			varchar(100),
        ds_ingredientes			varchar(100),
        foreign key (id_categoria) references tb_categoria (id_categoria)
        );
        

create table tb_admin (
		id_admin		int primary key auto_increment,
        ds_email		varchar(200),
        ds_senha    	varchar(200)
        );
        
        
select * from tb_admin;

Insert INTO tb_admin (ds_email,ds_senha)
VALUES('admin@admin.com.br', 'admin123' );    

        
