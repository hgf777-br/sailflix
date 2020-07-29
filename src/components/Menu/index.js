import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import {LogoImage, MenuWrapper} from './styles.js';
import Button from '../Button';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="Sailflix slogo"/>
            </Link>

            <Button as={Link} to="/cadastro/Video">
                novo vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu; 