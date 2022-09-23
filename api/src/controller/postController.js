import { Router } from "express";
import {Post, inserirImagem, listarCategorias} from "../repository/postRepository.js"
import multer from 'multer'

const server = Router();
const upload = multer({dest: 'storage/imgproduto'})


server.post('/post/criar', async (req,resp) => {
    try {
        const publi = req.body;
        
        if(!publi.nome)throw new Error("Nome é OBRIGATÓRIO!")
        if(!publi.preco) throw new Error("Preço é OBRIGATÓRIO!")
        if(!publi.ingredientes) throw new Error("Descrição é OBRIGATÓRIO!")
        if(!publi.categoria) throw new Error("Categoria é OBRIGATÓRIO!")

        const resposta = await Post(publi);
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

server.get('/api/categoria', async (req, resp) => {
    try {
        const linhas = await listarCategorias();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;