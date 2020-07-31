import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


const Pagina404 = () => (<div>Página sem conteudo</div>);

ReactDOM.render(
  <Router basename='/sailflix/'>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/cadastro/Video' component={CadastroVideo}/>
      <Route path='/cadastro/Categoria' component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
