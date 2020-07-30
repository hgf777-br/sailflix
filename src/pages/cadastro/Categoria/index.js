import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import {ListaCategorias, FormularioCategoria} from './styles.js';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <FormularioCategoria onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          if (values.nome && values.descricao) {
            setCategorias([
              ...categorias,
              values
            ]);
          }
          setValues(valoresIniciais)
      }}
      >

        <FormField
          label="Nome da Categoria : "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição : "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor : "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
       
        <button>
          Cadastrar
        </button>
      </FormularioCategoria>
      

      <ListaCategorias>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome} | {categoria.descricao}
            </li>
          )
        })}
      </ListaCategorias>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;