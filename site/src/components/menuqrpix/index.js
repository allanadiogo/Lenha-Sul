import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react'
import './index.scss'

export default function Index(){

const navigate = useNavigate();

    function sairClick(){
       storage.remove('usuario-logado');
       navigate('/loginusuario');

       
    }


    //useEffect(() => {
    //    if(storage('usuario-logado')){
    //       navigate('/loginusuario')
    //    }
    //    
    //    else{
    //        const logado = storage('usuario-logado');
    //       
    //    }
    //    }, [])


    return(
    <main className='corpo-menu-amarelo-qr'>
        <div>
            <div className='logo-menu-usuario'>
                <img src='/assets/images/logodomenu.png'/>
            </div>

            <div className='menu-itens-usuario-qr'>
                
                <a href='/' className='con-text-usuario-qr'>
                    <img className="icons-usuario-qr" src='/assets/images/casa-menu.png'/>
                    <span className= 'texts-usuario-qr'>Home </span> 
                </a>

                
                    <hr className='linha-qr'/>
                
                
                  
                <a href='/perfilUsuario' className='con-text-usuario-qr'>
                    <img className="icons-usuario-qr" src='/assets/images/bonecoperfil-menu.png'/>
                    <span className='texts-usuario-qr'> Meu Perfil </span>
                </a>

                <hr className='linha-qr'/>
              
                

                  
                <a href='/carrinho' className='con-text-usuario-qr'>
                    <img className="icons-usuario-qr" src='/assets/images/carrinho.png'/>
                    <a  className='texts-usuario-qr'> Carrinho </a>
                </a>

                  
      </div>
                    
               
                <div className='sair' onClick={sairClick}>
                    <img src='/assets/images/icon6.png'/>
                    <div className='text-sair'>SAIR</div>
                </div>
        


            </div>
        
    </main>
    )
};