import styled from 'styled-components';

export const ListaCategorias = styled.ul`
  margin: 0;
  padding-left: 0;
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
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const CampoCor = styled.div`
  width: 50%;
  margin-right: 30px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CampoButton = styled.div`
  padding-top: 2px;
  @media (max-width: 800px) {
    padding-top: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`;
