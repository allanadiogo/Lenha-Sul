import './index.scss';

import logohome1 from '../../assets/images/logohome1.png';
import usuario from '../../assets/images/usuario.png';
import carrinho from '../../assets/images/carrinho.png';
import pizza from '../../assets/images/PizzaGigante.png';
import iolo from '../../assets/images/homiver.png'

export default function Index(){
    return(
        <main>
            <section className="parte-1">
             
             <header className="menu-home">
                
                <div className="logo1-home">
                <img  src={logohome1}/>
                 </div>
                <div className='menu-text'>
                    
                    <li className='li1'>
                        <a className='lin-1' >Home</a>
                    </li>
                    <li className='li1'>
                        <a  className='lin-1'>Menu</a>
                    </li>
                    <li className='li1'>
                        <a className='lin-1'>Localização</a>
                    </li>

                
                </div> 

                <div className="numero">
                    <p className="conosco">Entre em contato conosco </p>
                    <p className="nume">(99) 999 999 999</p>
                </div>

                <div className="icons">
                    <img src={usuario} className="usuario"></img>
                    <img src={carrinho} className="carrinho"></img>

                </div>
           </header>

           <div className="pizza" > 
             <img src={pizza}/>
          </div>

          <div className="texto-1" > 
                   
                   <h1 className='fimde' > FIM DE</h1>
                
                    <h1 className='sema'> SEMANA </h1>

                    <h1 className='combina'> COMBINA </h1>
                    
                    <h1 className='compi'> COM PIZZA</h1>
             </div>

             <div className="texto-2">
                <p>Terça a Quinta das 17:30h até 23:40h </p>
                <p>Sexta a Domingo das 17:30h até 1:10h  </p>
             </div>          
           </section>

           <section className="parte-2">
               
               <div className="textos">
              
              <h1 className="text-3">  DÊ FOLGA AO <font color="#ff6900">FOGÃO.</font> </h1>
             <h1 className="text-3">  PEÇA UMA <font color="#ff6900">PIZZA!</font> </h1>
              
            
                  <p className="text-4"> Entrega rápida para toda  região</p>
            
                  <p className="text-5"> peça uma pizza!!</p>
             
             </div>
              
              <div className="iolo">
                <img  src={iolo}/>
              </div>
           
           </section>

           <section className="parte-3">
   


           </section>
        
        </main>
    )
}