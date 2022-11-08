import './index.scss';

import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

import LoadingBar from 'react-top-loading-bar'

import { toast, ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


import { CadastrarEndereco } from '../../../api/postAPI'
import { useState, useEffect, useRef } from 'react';

export default function Index(){

    const[rua, setRua] = useState('');
    const[residencia, setResidencia] = useState('');
    const[cep, setCep] = useState('');
    const[bairro, setBairro] = useState('');
    const[complemento, setComplemento] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
      if (!storage('usuario-logado')) {
        navigate('/loginUsuario');
      }
    }, [])

    async function onClick(){
            
        setCarregando(true);

        try {
            const r = await CadastrarEndereco(rua, residencia, cep, bairro, complemento );
            
            storage('usuario-logado', r)    
            toast.dark('Endereço cadastrado com sucesso ✔️')

            setTimeout(() => {
                navigate('/Pagamento')
            }, 3000)
        } 
        catch (err) {
        if (err.message.status === 400) { 
            toast.dark(err.response.data.Erro)
        }
        }
      }


    return(
        <main className='main-endereco'>

             <ToastContainer />
            <LoadingBar color='#0000' ref={ref} />

            <header className='header-carrinho'>
               
                <div className='logo-home-endereco'>
                <img className="endereco-usuario-logo" src="/assets/images/logoroda.png" />
                <a href='/' className="botao-home-endereco" >Home</a>
                <img src='/assets/images/carrinho.png'/>
            </div>

        
            </header>

            <div className='div-h1-carrinho'>
                <h1 className='h1-adicionar'>
                    Adicionar endereço de envio
                </h1>
            </div>

            <section className='section-inputs'>
                <div className='div-inputs'>
                    <label className='labels-inputs'>Rua:</label>
                    <input className='input-maior-endereco' type="text" value={rua} onChange={e => setRua(e.target.value)}></input>
                </div>
                
                
                
                <div className='div-pequenos-inputs'>
                   <div className='pequeno-input-1'>
                    <label className='labels-inputs'>Número de Residencia:</label>
                    <input className='input-menor-endereco' type="number" value={residencia} onChange={e => setResidencia(e.target.value)}></input>
                    </div>
                   
                    <div className='pequeno-input-1'>
                    <label className='labels-inputs'>CEP:</label>
                    <input className='input-menor-endereco' type="number" value={cep} onChange={e => setCep(e.target.value)}></input>
</div>
            
                </div>
               
               
               
                <div className='div-inputs'>
                    <label className='labels-inputs'>Bairro:</label>
                    <input className='input-maior-endereco' type="text" value={bairro} onChange={e => setBairro(e.target.value)}></input>
                </div>
                <div className='div-inputs'>
                    <label className='labels-inputs'>Complemento (opcional):</label>
                    <input className='input-maior-endereco' type="text" value={complemento} onChange={e => setComplemento(e.target.value)}></input>
                </div>

                <button className='botao-enviar-endereco' onClick={onClick} disabled= {carregando}>Enviar</button>
            </section>
        </main>
    )
}