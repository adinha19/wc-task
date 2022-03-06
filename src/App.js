import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import News from './components/news/News';
import Article from './components/news/Article';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={News} />
          <Route exact path='/article' component={Article} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;