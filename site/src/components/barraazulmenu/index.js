import './index.scss';

import icon6 from '../../assets/images/icon6.png';


export function Barraazulmenu() {
  return (
    <main className="menu">


      <div className='logo-menu-adm'>
        <img src='/assets/images/image96.png' />
      </div>

      <div className="text-6">
        <img className="icon-6" src={icon6} />
        <a href='/loginAdm' className="text-sair">Sair</a>
      </div>



    </main >
  )

}