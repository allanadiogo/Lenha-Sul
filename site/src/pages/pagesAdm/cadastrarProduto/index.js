import './index.scss';

import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

import { toast } from 'react-toastify';


import LoadingBar from 'react-top-loading-bar'

import { CadastrarProduto } from '../../../api/produtoAPI'
import { ListarCategorias } from '../../../api/categoriaAPI';
import { EnviarImagem } from '../../../api/enviarImagemAPI'
import { useState, useEffect } from 'react';

export default function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!storage('usuario-logado')) {
      navigate('/loginAdm');
    }
  }, [])

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [img, SetImg] = useState();

  const [idCategoria, setIdCategoria] = useState();
  const [categorias, setCategorias] = useState([]);

  const UserLogado = storage('usuario-logado').Nome;
  const [id, SetId] = useState(0);

  async function CarregarPost() {
    const resposta = await buscarPorId(idParam);
    SetId(resposta.id)
    setNome(resposta.nome)
    setPreco(resposta.preco)
    setIngredientes(resposta.ingredientes)
    setCategorias(resposta.categorias)
    setImg(resposta.img)




  }

  function AdicionarCategoria() {
    if (!catSelecionadas.find(item => item == idCategoria)) {
      const categorias = [...catSelecionadas, idCategoria];
      setCatSelecionadas(categorias);
    }
  }

  async function ListarCategorias() {
    const r = await ListarCategorias();
    setCategorias(r);
}

  async function onClick() {
    try {
      if (!img) throw new Error("Escolha a imagem para cadastrar")

      const usuario = storage('usuario-logado').id;
      console.log(usuario)

      if (id === 0) {

        const NovoPost = await CadastrarProduto(nome, preco, tipo, ingredientes, usuario)
        const r = await EnviarImagem(NovoPost.id, img)
        toast.dark("A pizza foi cadastrada ")

        SetId(NovoPost.id);
      }


    }
    catch (err) {
      if (err.response)
        toast.dark(err.response.data.Erro)
      else {
        toast.dark(err.message)
      }
    }
  }

  function EnviarImagem() {
    document.getElementById('imgpizza').click();
  }

  function mostrarImagem() {
    if (typeof (img) == 'object') {
      return URL.createObjectURL(img);
    }
    else {
      return EnviarImagem(img)
    }
  }





  return (
    <main>

      <div className="Div-Agrupadora-todos">

        <div className="Lado-Esquerdo-Informações">

          <div className="Div-H1">
            <h1>informações do Post</h1>
          </div>


          <div className="div-Importar-Foto" onClick={escolherimg}>
            <h2> Importar Arquivo </h2>
            <input type='file' id='imgpizza' onChange={e => SetImg(e.target.files[0])} />
          </div>

          ''
          <div className="Div-Span-Input">
            <span className="Span">
              Novo item:
            </span>

            <input data-ls-module="charCounter" maxlength="20" type='text' placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
          </div>

          <div className="Div-Span-Input-2">
            <span className="Span-2">
              Preço:
            </span>

            <input data-ls-module="charCounter" maxlength="20" type='text' placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} />
          </div>

          <div className="Div-Span-Input-3">
            <span className="Span-3">
              Descrição:
            </span>

            <input data-ls-module="charCounter" maxlength="20" type='text' placeholder="Descrição" value={ingredientes} onChange={e => setIngredientes(e.target.value)} />
          </div>

          <span className="Span-4">
            <select value={idCategoria} onChange={e => setIdCategoria(e.target.value)} >
              <option selected disabled hidden>Selecione</option>

              {categorias.map(item =>
                <option value={item.id}> {item.categoria} </option>
              )}
            </select>
            <button onClick={adicionarCategoria} className='btn-categoria'>+</button>
          </span>

          <div className="Div-Botoes-Categoria">

            <input type="checkbox" value={categorias} onChange={e => setCategorias(e.target.value)}></input>
            <p className="P-Categoria">salgada</p>

            <input type="checkbox" value={categorias} onChange={e => setCategorias(e.target.value)}></input>
            <p className="P-Categoria-2">doce</p>

            <input type="checkbox" value={categorias} onChange={e => setCategorias(e.target.value)}></input>
            <p className="P-Categoria-3">bebida</p>
          </div>


          <div className="Lado-Direito-Informações">

            <h1 className="H1-lado-Direito">
              Pré-Visualização
            </h1>
            <div className="Div-Pré-Visualização">


              <div className="info1">
                <h1> {UserLogado} </h1>
              </div>
              <div className="imgn">
                {!img &&
                  <img className='img-post' src='./images/a.png' alt='' />
                }
                {img &&
                  <img className='img-post' src={mostrarImagem()} alt='' />
                }
              </div>

              <div className="Div-nome-vizualiçao">
                {!nome &&

                  <h1>Nome </h1>
                }
                {nome &&
                  <h1> {nome} </h1>
                }
              </div>
              <div className="div-ingredientes-vizu">
                <div className="esq-1">
                  {!ingredientes &&
                    <p> ingredientes </p>
                  }
                  {nome &&
                    <p> {ingredientes} </p>
                  }
                  {!preco &&
                    <p> Preço </p>
                  }
                  {preco &&
                    <p> {preco} </p>
                  }

                </div>

              </div>
              <button className="Button-Publicar" onClick={onClick}>Publicar</button>




            </div>

          </div>
        </div>

      </div>

    </main>

  )
}