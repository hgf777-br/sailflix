import styled from 'styled-components';
import Button from '../Button';

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

export const ButtonLink = styled(Button)`
    --corButton: #0055ff;
    color: var(--corButton);
    border: 1px solid var(--corButton);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5;
    } 
    
    @media (max-width: 800px) {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--corFundoMenu);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
`;