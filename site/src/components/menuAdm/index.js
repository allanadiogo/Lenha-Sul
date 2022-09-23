import './index.scss';

import Logo from './image/logo.png';
import icon1 from './image/icon1.png';
import icon2 from './image/icon2.png';
import icon3 from './image/icon3.png';
import icon4 from './image/icon4.png'
import icon5 from './image/icon5.png';
import icon6 from './image/icon6.png';



export default function Index(){
    return(
  <main className="menu">
 

 <div className="logo">
    <img src={Logo}/>
 </div>

 <div className="text-menu">
    
    <div className="text-1">
    <img className="icon-1" src={icon1}/>
    <a className="text-menu">Menu Adm</a>
     </div>

     <div className="text-2">
    <img className="icon-2" src={icon2}/>
    <a className="text-pendentes">Consultar pedidos pendentes</a>
     </div>

     <div className="text-3">
    <img className="icon-3" src={icon3}/>
    <a className="text-pedidos">Consultar histórico de pedidos</a>
     </div>

     <div className="text-4">
    <img className="icon-4" src={icon4}/>
    <a className="text-produto">Adicionar produto</a>
     </div>

     <div className="text-5">
    <img className="icon-5" src={icon5}/>
    <a className="text-consultar">Consultar produtos</a>
     </div>

     <div className="text-6">
    <img className="icon-6" src={icon6}/>
    <a className="text-sair">Sair</a>
     </div>

</div>



      


  </main>
    )
    
}