import './index.scss'
import { useNavigate } from 'react-router-dom';


export default function Index() {
    return (
        <main className='main-menuusu'>


            <section className="parte-1">



                <div className="logo1-home" >
                    <img src="/assets/images/logohome1.png" />
                </div>

                <div className='menu-text'>

                    <li className='li1'>
                        <a href='/' className='lin-1' >Home</a>
                    </li>
                   


                </div>

                <div className="numero">
                    <p className="conosco">Entre em contato conosco </p>
                    <p className="nume">(99) 999 999 999</p>
                </div>

                <div className="icons-menu">

                    <div className='loginUsuario'>
                        <img src="/assets/images/usuario.png" />
                    </div>

                    <div className='carrinho'>
                        <img src="/assets/images/carrinho.png" />
                    </div>

                </div>



            </section>
        </main>
    )
}