import styled from 'styled-components';

export const ListaCategorias = styled.ul`
  margin: 0;
  padding: 10px 20px;
  margin-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  border-style: solid;
  border-color: var(--primary);
  
  li {
    margin-right: 16px;
  }
`;

export const LinhaButton = styled.div`
  display: flex;
  height: 57px;
  width: 100%;
  margin-bottom: 30px;
`;

export const CampoCor = styled.div`
  width: 30%;
  margin-right: 30px;
`;

export const CampoButton = styled.div`
  margin-right: 30px;
`;
