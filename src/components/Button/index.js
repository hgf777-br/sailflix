import styled, { css } from 'styled-components';

const Button = styled.button`
    color: var(--corButton);
    border: 1px solid var(--corButton);
    background: var(--corFundoMenu);
    box-sizing: border-box;
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
    
    ${({ inicio }) => inicio && css`
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
    `}
`;

export default Button;
