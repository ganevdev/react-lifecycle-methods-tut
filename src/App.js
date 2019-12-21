import React, { Component } from 'react';
import './App.css';
import Lifecycles from './components/lifecycles';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showChild: true,
      text: '',
    };
  }

  render() {
    return (
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() =>
            this.setState(state => ({
              showChild: !state.showChild,
            }))
          }
        >
          Toggle Lifecycles
        </button>
        <button
          onClick={() =>
            this.setState(state => ({
              text: state.text + '_hello',
            }))
          }
        >
          Update Text
        </button>
        {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
      </div>
    );
  }
}

export default App;
