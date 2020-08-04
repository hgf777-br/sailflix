import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { func } from 'prop-types';
import {
  DivModal, Header, Content, Actions,
} from './styles';
import Button from '../Button';

function Modal({ show, categoria, onCancel }) {
  const isShow = show;
  if (isShow === 'false') {
    return null;
  }
  return (
    <DivModal>
      <Header>
        <p>Nova Categoria</p>
      </Header>
      <Content>
        <p>{categoria}</p>
      </Content>
      <Actions>
        <Button
          type="button"
          as={Link}
          to={{
            pathname: '/cadastro/categoria',
            state: { categoria },
          }}
        >
          inserir
        </Button>
        <Button type="button" onClick={onCancel}>
          cancelar
        </Button>
      </Actions>
    </DivModal>
  );
}

Modal.defaultProps = {
  show: 'false',
  categoria: '',
  onCancel: () => {},
};

Modal.propTypes = {
  show: PropTypes.string,
  categoria: PropTypes.string,
  onCancel: func,
};

export default Modal;
