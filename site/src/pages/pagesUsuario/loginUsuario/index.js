
import {useNavigate} from 'react-router-dom'

import './index.scss';



export default function Index(){

    const navigate = useNavigate();

    
    function CriarConta(){
        navigate('/registrarUsuario');
    }

    function PerfilClick(){
        navigate('/perfilUsuario');
    }


    return(
      <main className="main-login-usuario">
          
           

    <div className='logo-home-usuario'>
          <img className="login-usuario-logo"  src="/assets/images/logoroda.png" />
        <a href='/home' className="botao-home-usuario" >Home</a>
        </div>

            <section className='page-login-usuario'>
                <div className="Div-Meio-Login-usuario">

                    <div className="logo-usuario">
                        <img className="logo-usuario"  src="/assets/images/logousuario.png" />
                    </div>

                    <h2 className="text-login-usuario">LOGIN</h2>

                   
                    <div className="Div-Mae-Input-usuario">
                      <img className='icons-login-usuario' src='/assets/images/usuario3.png'/>
                        <input  className="Input-Email-usuario" placeholder="e-mail do usuário"  />
                    </div>


                <div className="Div-Mae-Input-Senha-usuario">
                <img className='icons-login-usuario' src='/assets/images/cadeado.png'/>
                    <input data-ls-module="charCounter" maxlength="25" type="password" className="Input-Senha-usuario"  placeholder="senha"  />
                </div>


                    <div className="Div-Button-usuario" onClick={PerfilClick}>
                        <div className='botao1-usuario'>
                        <button className="botao-entrar-usuario" > Entrar</button>
                        </div>
                        
                        <div className='botao2-usuario' onClick={CriarConta}>
                        <button className="botao-criar-usuario" >Criar nova conta</button>
                        </div>
                    </div>
                    
                    <div className='esqueceu-usuario'>
                    <a>Esqueceu a senha?</a>
                    <a href='/recuperacaoSenha'>Clique aqui</a>

                </div>

                </div>

              
               
                
            
            </section>
      </main>
    )
};