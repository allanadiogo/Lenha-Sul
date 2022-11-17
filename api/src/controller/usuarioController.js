import { Router } from "express";
import {Cadastro, Login, LoginUsuario, fotoPerfil,buscarUsuarioPorId } from "../repository/usuarioRepository.js";

import multer from "multer";

const server = Router();

const upload = multer({dest:  'storage/usuario'})

server.post('/admin/login', async (req,resp) => {
    try {
        const {email, senha} = req.body

        const resposta = await Login(email,senha)
        if(!resposta) throw new Error ("Credenciais inválidas!")
        resp.status(200).send(resposta)
        
    } catch (err) {
        resp.status(401).send({
            Erro:err.message
        })
    }
})

server.post('/usuario/login', async (req,resp) => {
    try {
        const {email, senha} = req.body
        const resposta = await LoginUsuario(email,senha)
    
        if(!resposta) throw new Error ("Credenciais inválidas!")
        resp.status(200).send(resposta)
        
    } catch (err) {
        resp.status(401).send({
            Erro:err.message
        })
    }
})

server.post('/usuario/cadastro', async (req,resp) => {
    try{ 
    const {nome,email, senha, telefone, cpf} = req.body;
    if(!nome) throw new Error('O nome é Obrigatório!')
    if(!email) throw new Error('O email é Obrigatório!')
    if(!senha) throw new Error('A senha é Obrigatório!') 
    if(!telefone) throw new Error('O telefone é Obrigatório!')
    if(!cpf) throw new Error('O CPF/CNPJ é Obrigatório!')

    const resposta = await Cadastro(nome,email,senha,telefone,cpf);
    
    resp.send(resposta)
}
catch(err){
    resp.status(400).send({
        Erro:err.message
    })
}
})  




server.put('/usuario/:id/foto', upload.single('foto') ,async (req, resp) => {
    try{
        if(!req.file)
        throw new Error('Escolhar a imagem do usuario.');
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await fotoPerfil(imagem, id);
        if(resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })   
    }
})

server.get('/usuario/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarUsuarioPorId(id);

        if (!resposta)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})





export default server;

