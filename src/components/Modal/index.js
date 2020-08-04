import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { func } from 'prop-types';
import {
  DivModal, Header, Content, Actions,
} from './styles';
import Button from '../Button';

function Modal({ show, conteudo, onCancel, txt1, titulo }) {
  if (show === 'false') {
    return null;
  }
  return (
    <DivModal>
      <Header>
          <p>{titulo}</p>
      </Header>
      <Content>
        <p>{conteudo}</p>
      </Content>
      <Actions>
        <Button
          type="button"
          as={Link}
          to={{
            pathname: '/cadastro/categoria',
            state: { conteudo },
          }}>
          {txt1}
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
