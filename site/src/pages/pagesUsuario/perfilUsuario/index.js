import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import Menuamarelousu from '../../../components/menuamarelo'
import './index.scss'

export default function Index(){
    const [usuario, setUsuario] = useState('');
    const [usuariote, setUsuarioTe] = useState('');
    const [usuarioemail, setUsuarioEmail] = useState('');


    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('usuario-logado')){
           navigate('/loginUsuario')
        }
        }, [])
        

  
    return (
        <main className='main-perfil'>
    <Menuamarelousu/>
           
            <h1 className='titulo-perfil'>Perfil</h1>
            
            <section className='foto-perfil'>
                <h1 className='titulo-foto'>Foto de perfil</h1>
                <img className='usuario-perfil' src='/assets/images/logousuario.png'/>
                <button className='botao-salvar-perfil'>Salvar</button>
           
            </section>

    

            <section className='inputs-perfil'>
                
                <div className='nome-perfil'>
                    <h1 className='titulo-input-perfil'>Nome:</h1>
                    
                    <span className='input-perfil'>{usuario}</span>
                </div>
               
                <div className='email-perfil'>
                    <h1 className='titulo-input-perfil'>E-mail:</h1>
                    <span className='input-perfil'>{usuarioemail}</span>
                </div>

                <div className='telefone-perfil'>
                    <h1 className='titulo-input-perfil'>Telefone:</h1>
                    <span className='input-perfil'>{usuariote}</span>
                </div>

            </section>

            <div className='linha-perfil-2'>
            <hr className='linha-perfil'/>
    </div>
    </main>
    
    
    
    )
}