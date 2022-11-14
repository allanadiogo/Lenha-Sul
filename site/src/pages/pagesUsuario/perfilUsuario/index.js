import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fotoPerfil} from '../../../api/usuarioAPI.js'

import { toast} from 'react-toastify'
import Menuamarelousu from '../../../components/menuamarelo'
import './index.scss'

export default function Index() {
    const [imagem, setImagem] = useState();
const [usuario, setUsuario] = useState([]);
    

async function salvarClick(){
    try {
        if(!imagem)
        throw new Error('A imagem n foi inserida');

        const r = await fotoPerfil(imagem);

        toast.dark('foto salva');
    }catch(err){
        if(err.response)
        toast.error(err.response.data.erro);
        else
        toast.error(err.massage);

    }

}

    function escolherImagem(){
        document.getElementById('foto-perfil').click();
    }

    function mostrarImagem(){
        return URL.createObjectURL(imagem);
    }

    console.log(salvarClick);


    return (
        <main className='main-perfil'>

            <Menuamarelousu />

            <section className='section-perfil'>

                <div className='div-perfil'>

                    <div className='div-foto-perfil'>
                    
                    <div className='div-editar'onClick={escolherImagem} >

                        {!imagem &&
                    <img className='editar-foto' src='/assets/images/editarimg.png'alt=''/>
                        }
                    
                    {imagem &&
                    <img className='tamanho-foto' src={mostrarImagem()} alt=''/>
}
                    <input type='file' id="foto-perfil" onChange={e => setImagem(e.target.files[0])}></input>
                        </div>
                        
                        <div className='div-botao'>
                        <button  onClick={salvarClick} className='botao-salvar-perfil'>Salvar imagem</button>
</div>
                       
                    </div>
                   

<div className='spans'>
                        <div className='perfil'>
                         

                            <h1 className='titulo-input-perfil-nome'>Nome:</h1>
                       
                        <span className='span-perfil'>aa</span>

                        </div>

                        <div className='perfil'>

                            <h1 className='titulo-input-perfil-email'>Email:</h1>
                            <span className='span-perfil'>aa</span>

                        </div>


                        <div className='perfil'>
                            <h1 className='titulo-input-perfil-tele'>Telefone:</h1>
                            <span className='span-perfil'>aa</span>

                          
                        </div>

                      
                    </div>

                    
</div>
            </section>

         
       



        </main>



    )
}