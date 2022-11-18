import Storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
 

import { fotoPerfil, buscarUsuarioPorId} from '../../../api/usuarioAPI.js'
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '../../../api/config.js';

import 'react-toastify/dist/ReactToastify.min.css';
import Menuamarelousu from '../../../components/menuamarelo'
import './index.scss'

export default function Index() {
    const [imagem, setImagem] = useState('');
    const [usuario, setUsuario] = useState([])


 
    const navigate = useNavigate()



    async function carregarUsuario() {
        const id = Storage('usuario-logado').id
        const resp = await buscarUsuarioPorId(id);
        setUsuario(resp);
    }

    useEffect(() => {

        carregarUsuario();
    }, [])



    const { idParam } = useParams()
    
    async function salvarClick() {
        try {

            if (!idParam, imagem) {
               
                const j = fotoPerfil(imagem)
                toast.success('Imagem salva')
                
            }

            if(!imagem){
                throw new Error('Insira')
            }



        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message);
        }
        
    }

    


    function escolherImagem(){
        document.getElementById('foto-perfil').click();
    }

    function mostrarImagem() {
        if (typeof (imagem) == 'object') {
          return URL.createObjectURL(imagem);
        }
        else {
          return fotoPerfil(imagem)
        }
      }
    


    console.log(salvarClick);


    return (
        <main className='main-perfil'>

                <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                style={{ width: '16em' }} />

            <Menuamarelousu />

            <section className='section-perfil'>

                <div className='div-perfil'>

                    <div className='div-foto-perfil'>
                    
                    <div className='div-editar'onClick={escolherImagem}  >
                   


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
                       
                        <span className='span-perfil'>{usuario.nome}</span>

                        </div>

                        <div className='perfil'>

                            <h1 className='titulo-input-perfil-email'>Email:</h1>
                            <span className='span-perfil'>{usuario.email}</span>

                        </div>


                        <div className='perfil'>
                            <h1 className='titulo-input-perfil-tele'>Telefone:</h1>
                            <span className='span-perfil'>{usuario.telefone}</span>

                          
                        </div>

                      
                    </div>

                    
</div>
            </section>

         
       



        </main>



    )
}