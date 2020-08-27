import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginContainer from '../login/Loadable';
import InicioContainer from '../Inicio/Loadable';
import GlobalStyle from '../global-styles';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/inicio" component={InicioContainer} />
        <Route exact path='/' component={LoginContainer} />       
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default connect(null)(App);