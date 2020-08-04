import styled from 'styled-components';

export const DivModal = styled.div`
  /*display: none;*/
  position: fixed;
  margin-left: 25%;
  margin-top:50px;
  z-index: 1;
  width: 300px;
  background: var(--corFundoMenu);
  border: 2px solid var(--primary);
  border-radius: 8px;
  color: var(--primary);
  text-align: center;
  @media (max-width: 800px) {
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid var(--primary);
  font-size: 24px;
  font-weight: bold;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Actions = styled.div`
border-top: 1px solid var(--primary);
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;

`;
