import React from 'react'; 
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import ChooseArray from './components/choose-array/choose-array.component';
import ChooseCustomArray from './components/choose-array/custom/choose-custom-array.component';
import ChooseRandomArray from './components/choose-array/random/choose-random-array.component';
import ChooseAlgorithm from './components/choose-algorithm/choose-algorithm.component';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <section className="content-box">
          <Switch>
            <Route exact path="/" component={ChooseArray} />
            <Route exact path="/choose/custom" component={ChooseCustomArray} />
            <Route exact path="/choose/random" component={ChooseRandomArray} />
            <Route exact path="/choose/algorithms" component={ChooseAlgorithm} />
          </Switch>
        </section>
        <footer className="footer-box">
          <span>created<a href="https://cristi.tech" target="_new">@cristi.tech</a></span>
        </footer>
      </div>
    );
  }
}

export default App;
