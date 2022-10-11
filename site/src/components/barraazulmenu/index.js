import './index.scss';

import Logo from '../../assets/images/logo.png';
import icon6 from '../../assets/images/icon6.png';


export function Barraazulmenu() {
  return (
    <main className="menu">


      <div className='logo'>
        <img src='/assets/images/logodomenu.png' />
      </div>

      <div className="text-6">
        <img className="icon-6" src={icon6} />
        <a href='/loginAdm' className="text-sair">Sair</a>
      </div>



    </main >
  )

}