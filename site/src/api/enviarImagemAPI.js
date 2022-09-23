export async function enviarimagem (id, imagem){
    const formData = new FormData();
    formData.append('imgpet', imagem);
    
    const resposta = await api.put(`/post/${id}/imagem` , formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}