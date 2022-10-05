import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react'
import './index.scss'

export default function Index(){

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
                
                <div className='con-text'>
                    <img className="icons" src='/assets/images/icon1.png'/>
                    <div className="texts">Menu Adm</div>
                </div>
                
                  
                <div className='con-text'>
                    <img className="icons" src='/assets/images/icon2.png'/>
                    <div className="texts">Consultar pedidos pendentes</div>
                </div>

                  
                <div className='con-text'>
                    <img className="icons" src='/assets/images/icon3.png'/>
                    <div className="texts" >Consultar histórico de pedidos</div>
                </div>

                  
                <div className='con-text'>
                    <img className="icons" src='/assets/images/icon4.png'/>
                    <div className="texts" >Adicionar produto</div>
                </div>

                  
                <div className='con-text'>
                    <img className="icons" src='/assets/images/icon5.png'/>
                    <div className="texts" >Consultar produto</div>
                </div>
      </div>
                    
               
                <div className='sair' onClick={sairClick}>
                    <img src='/assets/images/icon6.png'/>
                    <div className='text-sair'>SAIR</div>
                </div>
        


            </div>
        
    </main>
    )
};