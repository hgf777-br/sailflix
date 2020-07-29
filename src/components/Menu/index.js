import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/img/Logo.png'
import {LogoImage, MenuWrapper, ButtonLink} from './styles.js'

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="Sailflix slogo"/>
            </Link>

            <ButtonLink as={Link} to="/cadastro/Video">
                novo vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}

export default Menu; 