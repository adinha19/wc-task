import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;