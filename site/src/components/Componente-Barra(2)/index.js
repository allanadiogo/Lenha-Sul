import './index.scss';

import Logo from '../../assets/images/logo.png';
import icon6 from '../../assets/images/icon6.png';


export function MenuAzul2() {
  return (
    <main className="menu">


      <div className="logo">
        <img src={Logo} />
      </div>

      <div className="text-6">
        <img className="icon-6" src={icon6} />
        <a className="text-sair">Sair</a>
      </div>

    

    </main >
  )

}