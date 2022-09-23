import './index.scss';

import Logo from '../../assets/images/logo.png';
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png'
import icon5 from '../../assets/images/icon5.png';
import icon6 from '../../assets/images/icon6.png';



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