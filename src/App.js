import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Landing from './components/Landing';
import Article from './components/Article';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/article' component={Article} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;