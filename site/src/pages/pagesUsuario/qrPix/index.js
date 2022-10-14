import './index.scss';
import  MenuAmarelo from '../../../components/menuqrpix'
export default function Index(){
    return(
        <main className='page-toda'>
           <MenuAmarelo/>


        <div> 
        <h1 className='h1-div'> Pagamento Pix </h1>
        </div>
    

        <div className='div-qrpix'>  
            <h1 className='h1qr'> QR Code : </h1> 

        <img className='qrpix' src='/assets/images/qrpix.png'/> 
        
        </div>
         
        </main>
    )
}