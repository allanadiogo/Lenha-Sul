import './index.scss';
import  MenuAmarelo from '../../../componentes/menuqrpix'
export default function Index(){
    return(
        <main className='page-toda1'>
           <MenuAmarelo/>


        <section className='section-pagamentos'>  
        
     <h1 className='titulo-pagamento'>Escolha um meio de pagamento</h1>
           
           <div className='div-botoes' >
           
           <a className='div-botoes' href='/dadoscartao'>
           <button  className='dinheiro'> <img className='foto1' src='/assets/images/Money.png'/> Dinheiro  </button>  
           </a>

           <a className='div-botoes' href='/dadoscartao'>
            <button   className='dinheiro'> <img className='foto1' src='/assets/images/credito.png'/> Crédito  </button>  
       </a>

       <a className='div-botoes' href='/dadoscartao'>
            <button   className='dinheiro'> <img className='foto1' src='/assets/images/debito.png'/> Débito </button>  
     </a>

     <a className='div-botoes' href='/dadoscartao'>
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