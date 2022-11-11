import { Router } from "express";

import {Post, inserirImagem, listarPosts, listarHisto, listarHisto2, listarHisto3, ListarCategoria, CadastrarEndereco, CadastrarCartao, ListarNomesCategorias, atualizarStatus, ListarPerfil, PizzasSalgadas, PizzasDoces, Bebidas} from "../repository/postRepository.js"

import {Post, inserirImagem, listarPosts, listarHisto, listarHisto2, listarHisto3, ListarCategoria, CadastrarEndereco, CadastrarCartao, Pizzas, ListarNomesCategorias, atualizarStatusPedidoPreparado, atualizarStatusPedidoRealizado, atualizarStatusPedidoAcaminho} from "../repository/postRepository.js"

import multer from 'multer'

const server = Router();
const upload = multer({dest: 'storage/imgproduto'})


server.post('/post/criar', async (req,resp) => {
    try {

        const produto = req.body;
        
        if(!produto.nome)throw new Error("Nome é OBRIGATÓRIO!")
        if(!produto.preco) throw new Error("Preço é OBRIGATÓRIO!")
        if(!produto.ingredientes) throw new Error("Descrição é OBRIGATÓRIO!")
        if(!produto.categoria) throw new Error("Categoria é OBRIGATÓRIO!")

        const resposta = await Post(produto);
        resp.status(200).send(
            resposta
        )
    } catch (err) {
        resp.status(400).send({
            Erro:err.message
        })
    }
})

server.put('/post/:id/imagem', upload.single('imgproduto'), async (req, resp) => {
    try {
        if(!req.file) throw new Error('Não foi possível alterar/inserir a imagem') 
        const {id} = req.params;
        const imagem = req.file.path

        const resposta = await inserirImagem(imagem, id);

        resp.status(204).send();

        if (resposta != 1) throw new Error('Não foi possível alterar/inserir a imagem') 

        
        
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.get('/api/listarProduto' , async (req,resp) =>{
    try {
        const resposta = await listarPosts();
        resp.send(resposta)    
    } 
    catch (err) {
        resp.status(400).send({
            Erro: err.message
        })        
    }
})




server.get('/api/historicoPedido' , async (req,resp) =>{
        try {
            const resposta = await listarHisto();
            resp.send(resposta)
            
        }
        catch (err) {
            resp.status(400).send({
                Erro: err.message
            })
            
}
})

server.get('/api/HistoricoEndereco', async (req,resp) =>{
    try {
            const resposta = await listarHisto2();
            resp.send(resposta)    
    } 
    catch (err) {
        resp.status(400).send({
            Erro: err.message
        })
        
    }
})

server.get('/api/HistoricoProduto', async (req, resp) => {
        try {
                const resposta = await listarHisto3();
                resp.send(resposta)    
        }
         catch (err) {
            resp.status(400).send({
                Erro : err.message
            })
        }
})

server.get('/api/ListarCategoria' , async (req,resp) =>{
    try {
        const resposta = await ListarCategoria();
        resp.send(resposta)    
    }
     catch (err) {
        resp.status(400).send({
            Erro:err.message
        })        
    }
})

server.post('/api/CadastrarEndereco' , async (req, resp) => {
        try {
            const endereco = req.body;

            if(!endereco.rua)throw new Error("A Rua é OBRIGATÓRIA!")
            if(!endereco.residencia) throw new Error("A Residencia é OBRIGATÓRIA!")
            if(!endereco.cep) throw new Error("O cep é OBRIGATÓRIO!")
            if(!endereco.bairro) throw new Error("O Bairro é OBRIGATÓRIO!")
            if(!endereco.complemento) throw new Error("O Complemento é OBRIGATÓRIO!")
    
            const resposta = await CadastrarEndereco(endereco);
            resp.status(200).send(
                resposta
            )
            
        } catch (err) {
            resp.status(400).send({
                Erro:err.message
            })
        }




})

server.post('/api/CadastrarCartao' , async (req, resp) => {
    try {
        const cartao = req.body;

        if(!cartao.numero)throw new Error("O Numero do cartão é OBRIGATÓRIO!")
        if(!cartao.nome) throw new Error("O Nome Impresso do cartão é OBRIGATÓRIO!")
        if(!cartao.vencimento) throw new Error("O Vencimento do cartão é OBRIGATÓRIO!")
        if(!cartao.cvv) throw new Error("O CVV do cartão é OBRIGATÓRIO!")
        if(!cartao.apelido) throw new Error("O Apelido do cartão é OBRIGATÓRIO!")
        if(!cartao.cpf) throw new Error("O CPF/CNPJ do dono do cartão é OBRIGATÓRIO!")

        const resposta = await CadastrarCartao(cartao);
        resp.status(200).send(
            resposta
        )
        
    } catch (err) {
        resp.status(400).send({
            Erro:err.message
        })
    }




})

server.get ('/api/PizzasSalgadas', async (req,resp) =>{
    try{ 
    const resposta = await PizzasSalgadas();

    resp.status(200).send(resposta)
}
catch(err){
    resp.status(400).send({
        Erro:err.message
    })
}
})

server.get ('/api/PizzasDoces', async (req,resp) =>{
    try{ 
    const resposta = await PizzasDoces();

    resp.status(200).send(resposta)
}
catch(err){
    resp.status(400).send({
        Erro:err.message
    })
}
})

server.get ('/api/Bebidas', async (req,resp) =>{
    try{ 
    const resposta = await Bebidas();

    resp.status(200).send(resposta)
}
catch(err){
    resp.status(400).send({
        Erro:err.message
    })
}
})

server.get('/api/nomeCategoria/:id', async (req,resp) =>{
    try {
    const {id} = req.params;
    const resposta = await ListarNomesCategorias(id);

    resp.send(resposta)
        

    }
    
    catch (err) {
        resp.status(400).send({
            Erro:err.message
        })       
    }
})


    
    server.put('/api/produto/statusRealizado/:id' , async (req,resp) => {
        try {
            const {id} = req.params;
        
            const resposta = await atualizarStatusPedidoRealizado(id);
            
            resp.status(204).send()
        
        }
        
        catch (err) {
            resp.status(400).send({
                Erro:err.message
            })
        }
        
        })



        server.put('/api/produto/status/:id' , async (req,resp) => {
            try {
                const {id} = req.params;
            
                const resposta = await atualizarStatusPedidoAcaminho(id);
                
                resp.status(204).send()
            
            }
            
            catch (err) {
                resp.status(400).send({
                    Erro:err.message
                })
            }
            
            })
        
            server.put('/api/produto/status/:id' , async (req,resp) => {
                try {
                    const {id} = req.params;
                
                    const resposta = await atualizarStatusPedidoEntregue(id);
                    
                    resp.status(204).send()
                
                }
                
                catch (err) {
                    resp.status(400).send({
                        Erro:err.message
                    })
                }
                
                })
        

 
export default server;
