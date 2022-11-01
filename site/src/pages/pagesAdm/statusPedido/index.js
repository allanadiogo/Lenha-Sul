import './index.scss';
import {MenuAzul2} from '../../../components/menuazul';

export default function Index(){
    return(

        <main className="main-acom-adm">
            <MenuAzul2/>
            <h1 className="h1-acom-adm">Acompanhar Pedido do Cliente: </h1>


<section className='section-acom-adm'>
       
    
        <section className="section-acompanhar-adm">
        
        <div className='mds'>
       
       <div className="acom-um">
        <img src="/assets/images/acompanhar2.png" className="check"/>
        <div className="acom-linha"></div>
    </div>
     
        <div className="images-acom-adm">
        
        <div>
        <img src="/assets/images/acompanhar.png" className="check"/>
        </div>
        
        <p class="Pedido Realizado"> Pedido realizado</p>
        <button class="confirmar">Confirmar</button>
        </div>
      </div>

      
        

  
        <div className='mds'>
       <div className="acom-um">
        <img src="/assets/images/acompanhar2.png" className="check"/>
        <div className="acom-linha"></div>
    </div>
        <div className="images-acom-adm">
        
        <div>
        <img src="/assets/images/fogueira.png" className="check"/>
        </div>
        
        <p class="Pedido-Realizado"> Pedido sendo preparado</p>
        <button class="confirmar">Confirmar</button>
        </div>
      </div>


     
    
        <div className='mds'>
       <div className="acom-um">
        <img src="/assets/images/acompanhar2.png" className="check"/>
        <div className="acom-linha"></div>
    </div>
        <div className="images-acom-adm">

            <div>
        <img src="/assets/images/motopeppa.png" className="check"/>
        </div>
        
        <p class="Pedido Realizado"> Pedido a caminho</p>
        <button class="confirmar">Confirmar</button>
        </div>
      </div>
      
        
        
        
        
        <div className='mds'>
       <div className="acom-um">
        <img src="/assets/images/acompanhar2.png" className="check"/>
    </div>
        <div className="images-acom-adm">


          <div>  
        <img src="/assets/images/casacon.png" className="check"/>
        </div>
        
        <p class="Pedido Realizado">Entregue</p>
        <button class="confirmar">Confirmar</button>
        </div>
      </div>
    
        </section>
        </section>

        </main>
    )
}