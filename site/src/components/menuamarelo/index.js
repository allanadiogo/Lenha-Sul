import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import './index.scss'

export default function Index() {

    const navigate = useNavigate();



    function sairClick() {
        storage.remove('usuario-logado');
        navigate('/loginUsuario');
    }
    return (
        <main className='corpo-menu-amarelo'>
            <div>
                <div className='logo-menu-usuario'>
                    <img src='/assets/images/logodomenu.png' />
                </div>

                <div className='menu-itens-usuario'>


                    <a href='/' className='con-text-usuario'>
                        <img className="icons-usuario" src='/assets/images/casa-menu.png' />
                        <span className='texts-usuario'>Home </span>
                    </a>



                    <hr className='linha1' />



                    <a href='/perfilUsuario' className='con-text-usuario'>
                        <img className="icons-usuario" src='/assets/images/bonecoperfil-menu.png' />
                        <span className='texts-usuario'> Meu Perfil </span>
                    </a>

                    <hr className='linha2' />


                    <a href='/carrinho' className='con-text-usuario-1'>
                        <img className="icons-usuario" src='/assets/images/carrinho.png' />
                        <span className='texts-usuario'> Carrinho </span>
                    </a>

                    <hr className='linha4' />


                </div>


                <div className='sair' onClick={sairClick} >
                    <img src='/assets/images/icon6.png' />
                    <div className='text-sair'>SAIR</div>
                </div>



            </div>

        </main>
    )
};