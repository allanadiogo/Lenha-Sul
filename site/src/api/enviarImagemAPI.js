import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function inserirImagem (id, imagem){
    const formData = new FormData();
    formData.append('imgproduto', imagem);
    
    const resposta = await api.put(`/post/${id}/imagem` , formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}

