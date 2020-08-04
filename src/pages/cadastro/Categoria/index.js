import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import categoriasRepository from '../../../repositories/categorias';

import {
  ListaCategorias, LinhaButton, CampoCor, CampoButton,
} from './styles';

function CadastroCategoria(props) {
  const novaCategoria = props.location.state.categoria;
  const history = useHistory();
  const valoresIniciais = {
    nome: novaCategoria,
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then(async (categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        if (values.nome && values.descricao) {
          categoriasRepository.create({
            titulo: values.nome,
            cor: values.cor,
            link_extra: {
              text: values.descricao,
              url: '',
            },
          })
            .then(() => {
              history.push('/');
            });
        }
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <LinhaButton>
          <CampoCor>
            <FormField
              label="Cor"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </CampoCor>

          <CampoButton>
            <Button>
              Cadastrar
            </Button>
          </CampoButton>
          <CampoButton>
            <Button as={Link} to="/">
              Home
            </Button>
          </CampoButton>

        </LinhaButton>
      </form>

      <ListaCategorias>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ListaCategorias>

    </PageDefault>
  );
}

export default CadastroCategoria;
