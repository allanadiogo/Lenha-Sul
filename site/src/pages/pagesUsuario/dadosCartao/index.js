import './index.scss'
import MenuAmareloQr from '../../../componentes/menuqrpix'
export default function Index(){
    return(
        <main className='main-dadosCartao'>
            <MenuAmareloQr/>
        
        <section className='section'>
  
  <div  className='voltar-titulo'> 
   <a href='/informarPagamento' className='voltar'>
   <img className='seta' src='/assets/images/seta.png'/>
   voltar
   </a>
   </div>

   <h1 className='titulo-dados'> Insira dados do cartão </h1>
   
   <div className='inputs-dados'>
       
       <div className='numero-cartao'>
       <p className='nomes-inputs'>Número do cartão:</p>
       <input className='inputs-grandes'></input>
       </div>

       <div className='nome-cartao'>
       <p className='nomes-inputs'>Nome impresso no cartão:</p>
       <input className='inputs-grandes'></input>
       </div>


<div className='pequenos'>
       <div className='validade-cartao'>
       <p className='nomes-inputs'>Validade:</p>
       <input className='inputs-pequenos'></input>
       </div>

       <div className='cvv-cartao'>
       <p className='nomes-inputs'>CVV:</p>
       <input className='inputs-pequenos'></input>
       </div>
      
       </div>
      
       <div className='apelido-cartao'>
       <p className='nomes-inputs'>Apelido do cartão:</p>
       <input className='inputs-grandes'></input>
       </div>

       <div className='cpf-cartao'>
       <p className='nomes-inputs'>CPF/CNPJ:</p>
       <input className='inputs-grandes'></input>
       </div>
   </div>

<div className='div-botao'>
   <button className='finalizar'>Finalizar Compra</button>
</div>
   </section>
  
  <section className='cartao-section'>
  <div className='cartao'>
<img className='logo-cartao' src='/assets/images/logocartao.png'/>

<div  className='zeros'>
<p >0000 0000 0000 0000</p>
</div>
<div className='nomes-abaixo'>
<p className='nome-impresso'>Nome impresso no cartão</p>
<p>MM/AA</p>
</div>

  </div>

  </section>
 
        </main>
    )
}