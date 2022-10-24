import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import MenuAmarelo from '../../../components/menuamarelo'

export default function Index(){
    const [usuario, setUsuario] = useState('--');

    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('usuario-logado')){
            navigate('/');
        }else{
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome);
            setUsuario(usuarioLogado.email);
        }
    }, [])

    return (
        <main className='main-perfil'>
            <MenuAmarelo/>
           
            <h1 className='titulo-perfil'>Perfil</h1>
            
            <section className='foto-perfil'>
                <h1 className='titulo-foto'>Foto de perfil</h1>
                <img className='usuario-perfil' src='/assets/images/logousuario.png'/>
                <button className='botao-salvar-perfil'>Salvar</button>
           
            </section>

    

            <section className='inputs-perfil'>
                
                <div className='nome-perfil'>
                    <h1 className='titulo-input-perfil'>Nome:</h1>
                    <span className='input-perfil'>{usuario[0].toUpperCase()}</span>
                </div>
               
                <div className='email-perfil'>
                    <h1 className='titulo-input-perfil'>E-mail:</h1>
                    <input className='input-perfil'></input>
                </div>

                <div className='telefone-perfil'>
                    <h1 className='titulo-input-perfil'>Telefone:</h1>
                    <input className='input-perfil'></input>
                </div>

            </section>

            <div className='linha-perfil-2'>
            <hr className='linha-perfil'/>
    </div>
    </main>
    
    
    
    )
}