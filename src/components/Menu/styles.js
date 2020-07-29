import styled from 'styled-components';

export const LogoImage = styled.img`
    max-width: 160px;
    @media (max-width: 800px) {
      max-width: 95px;
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 85px;
    z-index: 100;
   
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0% 5%;
  
    background: var(--corFundoMenu);
    border-bottom: 2px solid var(--primary);

    @media (max-width: 800px) {
      height: 40px;
      justify-content: center;
    }    
`;