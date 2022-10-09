import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react'
import './index.scss'

export function MenuAzul2(){

const navigate = useNavigate();

    function sairClick(){
       storage.remove('adm-logado');
       navigate('/loginadm');

       
    }


    useEffect(() => {
        if(storage('adm-logado')){
           navigate('/loginadm')
        }
        
        else{
            const logado = storage('adm-logado');
           
        }
        }, [])


    return(
    <main className='corpo-menu'>
        <div>
            <div className='logo'>
                <img src='/assets/images/logodomenu.png'/>
            </div>

            <div className='menu-itens'>
                
                <a href='/menuAdm' className='con-text'>
                    <img className="icons" src='/assets/images/icon1.png'/>
                    <span className= 'texts'> Menu Adm </span> 
                </a>
                
                  
                <a href='/consultarPedidos' className='con-text'>
                    <img className="icons" src='/assets/images/icon2.png'/>
                    <span className='texts'> Pedidos Pendentes </span>
                </a>

                  
                <a href='/historicoPedidos' className='con-text3'>
                    <img className="icons" src='/assets/images/icon3.png'/>
                    <a className='texts2'> Histórico de Pedidos </a>
                    
                </a>

                  
                <a href='/cadastrarProduto' className='con-text2'>
                    <img className="icons" src='/assets/images/icon4.png'/>
                    <a  className='texts'> Cadastrar Produto </a>
                </a>

                  
                <a href='/consultarProdutos' className='con-text'>
                    <img className="icons" src='/assets/images/icon5.png'/>
                    <a  className='texts'> Consultar produto </a>
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