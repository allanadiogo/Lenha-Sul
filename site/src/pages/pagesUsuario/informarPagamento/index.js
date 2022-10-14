import './index.scss';
import  MenuAmarelo from '../../../components/menuqrpix'
export default function Index(){
    return(
        <main className='page-toda1'>
           <MenuAmarelo/>

           <h1> Escolha um meio de Pagamento </h1> 
         

        
           <div>   
            <div> <img className='foto1' src='/assets/images/Money.png'/> Dinheiro  </div>  
            <div>   Crédito  </div>  
            <div>   Débito   </div>  
            <div>  Vale-reifeição </div>  
            <div>  Pix  </div>
           
           </div>
                   





</main>




    )
}