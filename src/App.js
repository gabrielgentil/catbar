import React, { Component } from 'react';
import MenuSuperior from './components/MenuSuperior';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BodyCat from './components/BodyCat/BodyCat';
import BigCat from './components/BigCat';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MenuSuperior />
          <Route exact path="/bodycat" component={BodyCat}/>
          <Route path="/bigcat" component={BigCat}/>
        </div>
      </Router>
    );
  }
}

export default App;
