import './index.scss';
import  MenuAmarelo from '../../../components/menuqrpix'

import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'





import { useEffect } from 'react';

export default function Index(){

   const navigate = useNavigate();

   useEffect(() => {
      if (!storage('usuario-logado')) {
        navigate('/loginUsuario');
      }
    }, [])

   



    return(
        <main className='page-toda1'>
           <MenuAmarelo/>


        <section className='section-pagamentos'>  
        
     <h1 className='titulo-pagamento'>Escolha um meio de pagamento</h1>
           
           <div className='div-botoes' >
           
           <a className='div-botoes' href='/dadosCartao'>
           <button  className='dinheiro'> <img className='foto1' src='/assets/images/Money.png'/> Dinheiro  </button>  
           </a>

           <a className='div-botoes' href='/dadosCartao'>
            <button   className='dinheiro'> <img className='foto1' src='/assets/images/credito.png'/> Crédito  </button>  
       </a>

       <a className='div-botoes' href='/dadosCartao'>
            <button   className='dinheiro'> <img className='foto1' src='/assets/images/debito.png'/> Débito </button>  
     </a>

     <a className='div-botoes' href='/dadosCartao'>
            <button    className='dinheiro'> <img className='foto1' src='/assets/images/valerefeicao.png'/> Vale-refeição  </button>  
         </a>

         <a className='div-botoes' href='/qrPix'>
            <button   className='dinheiro'> <img className='foto1' src='/assets/images/pix.png'/> Pix </button>  
     </a>
       
            </div>
            
            
           </section>

      
         
        

</main>




    )
}