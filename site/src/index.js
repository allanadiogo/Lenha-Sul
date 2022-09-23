import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import{BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';

import Home from './pages/home';

import cadastrarProduto from './pages/pagesAdm/cadastrarProduto';
import ConsultarPedidos from './pages/pagesAdm/consultarPedidos';
import ConsultarProdutos from './pages/pagesAdm/consultarProdutos';
import HistoricoPedidos from './pages/pagesAdm/historicoPedidos';
import LoginAdm from './pages/pagesAdm/loginAdm';
import MenuAdm from './pages/pagesAdm/menuAdm';
import StatusPedido from './pages/pagesAdm/statusPedido';

import AcompanharPedido from './pages/pagesUsuario/acompanharPedido';
import Bebibas from './pages/pagesUsuario/bebidas';
import Cadastro from './pages/pagesUsuario/cadastro';
import Carrinho from './pages/pagesUsuario/carrinho';
import DadosCartao from './pages/pagesUsuario/dadosCartao';
import DetalhesPizzas from './pages/pagesUsuario/detalhesPizzas';
import Endereco from './pages/pagesUsuario/endereco';
import InformarPagamento from './pages/pagesUsuario/informarPagamento';
import LoginUsuario from './pages/pagesUsuario/loginUsuario';
import MenuUsuario from './pages/pagesUsuario/menuUsuario';
import PerfilUsuario from './pages/pagesUsuario/perfilUsuario';
import PizzasDoces from './pages/pagesUsuario/pizzasDoces';
import PizzasSalgadas from './pages/pagesUsuario/pizzasSalgadas';
import RecupercaoSenha from './pages/pagesUsuario/recuperacaoSenha';
import QrPix from './pages/pagesUsuario/qrPix';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <Routes>
     <Route path='/home' element={<Home/>} />
     <Route path='/cadastrarProduto' element={<cadastrarProduto/>}/>
     <Route path='/consultarPedidos' element={<ConsultarPedidos/>}/>
     <Route path='/consultarProdutos' element={<ConsultarProdutos/>}/>
     <Route path='/historicoPedidos' element={<HistoricoPedidos/>} />
     <Route path='/loginAdm' element={<LoginAdm/>}/>
     <Route path='/menuAdm' element={<MenuAdm/>}/>
     <Route path='/statusPedido' element={<StatusPedido/>}/>

    
     <Route path='/acompanharPedido' element={<AcompanharPedido/>} />
     <Route path='/bebidas' element={<Bebibas/>}/>
     <Route path='/cadastro' element={<Cadastro/>}/>
     <Route path='/carrinho' element={<Carrinho/>}/>
     <Route path='/dadosCartao' element={<DadosCartao/>} />
     <Route path='/detalhesPizzas' element={<DetalhesPizzas/>}/>
     <Route path='/endereco' element={<Endereco/>}/>
     <Route path='/informarPagamento' element={<InformarPagamento/>}/>
     <Route path='/loginUsuario' element={<LoginUsuario/>} />
     <Route path='/menuUsuario' element={<MenuUsuario/>}/>
     <Route path='/perfilUsuario' element={<PerfilUsuario/>}/>
     <Route path='/pizzasDoces' element={<PizzasDoces/>}/>
     <Route path='/pizzasSalgadas' element={<PizzasSalgadas/>}/>
     <Route path='/qrPix' element={<QrPix/>}/>
     <Route path='/recuperacaoSenha' element={<RecupercaoSenha/>}/>

   </Routes>
     </BrowserRouter>
  </React.StrictMode>


);

