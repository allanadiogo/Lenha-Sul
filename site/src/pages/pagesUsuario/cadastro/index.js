import './index.scss';

import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

import LoadingBar from 'react-top-loading-bar'

import { EfetuarCadastro } from '../../../api/usuarioAPI'
import usuario2 from '../../../assets/images/image 80.png';

import { toast, ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function Index() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCPF] = useState('');
    const [nascimento, setNascimento] = useState('');

    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    async function onClick(){
            
        setCarregando(true);

        try {
            const r = await EfetuarCadastro(nome, email, senha, nascimento, telefone, cpf);
            console.log(r);
            storage('usuario-logado', r)    
            toast.dark('Cadastrado com sucesso ✔️')

            setTimeout(() => {
                navigate('/loginUsuario')
            }, 3000)
        } 
        catch (err) {
        if (err.message.status === 400) { 
            toast.dark(err.response.data.Erro)
        }
        }
      }
      

    function home(){
        navigate('/home')
    }

    function LoginUsuario(){
        navigate('/loginUsuario')
    }



    return (
       
        <main className="main1">
            <ToastContainer />
             <LoadingBar color='#0000' ref={ref} />

            <header className="Header-Home">
            
                <a className="botao-home" onClick={() => home ()}>Home</a>
            </header>



            <section>
                <div className="Div-Meio-Login">

                    <div className="LOGO-TESTE">
                        <img className="Img-Logo" src={usuario2} />
                    </div>


                    <h2 className="login-administrativo">Registrar-se</h2>

                    <div className='div-p'>
                    <p className='p'>Nome de usuário</p>
                    </div>

                    <div className="Div-Mae-Input">
                    
                        <div>
                            <img className="Width-Img" src="../assets/image/usuario2.png" alt="" />
                        </div>
                    

                          
                        <input className="Input-Email" type="text" placeholder="Nome de Usuário" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>

                    

                 

                    <div className='div-p2'>
                    <p className='p'>E-mail</p>
                    </div>

                    <input class="Input-Senha" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />


                    

                    <div className='div-p3'>
                    <p className='p'>Telefone</p>
                    </div>

                    <input class="Input-Senha" type="tel" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />

                    <div className='div-p4'>
                    <p className='p'>CPF/CNPJ</p>
                    </div>

                    <input class="Input-Senha" type="text" placeholder="CPF/CNPJ" value={cpf} onChange={e => setCPF(e.target.value)} />

                    <div className='div-p2'>
                    <p className='p'>Senha</p>
                    </div>

                    <input class="Input-Senha" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />

                    <div className='div-p5'>
                    <p className='p'>Nascimento</p>
                    </div>

                    <input class="Input-Senha" type="date" value={nascimento} onChange={e => setNascimento(e.target.value)} />
                    
                    <div>
                            {erro}
                    </div>


                    <div className="Div-Button">
                        
                        <button className="botao-entrar" onClick={onClick} disabled= {carregando} >Registrar-se</button>
                        <p class="entrar">Já tem uma conta? <a onClick={() => LoginUsuario ()} >Entrar</a></p>
                    </div>
                   



                </div>
                

            </section>


        </main>

    )
}