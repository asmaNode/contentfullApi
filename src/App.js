import React from 'react';

import './App.css';
import './services/API.js';

import List from './components/listView/List';
import AppBar from '@material-ui/core/AppBar';

import client from './services/API.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.getReceipes = this.getReceipes.bind(this);
   
  }


  componentDidMount() {
    this.getReceipes();
   
  }
  /**
   * Get Receipes from Contentfull Api
   */
  getReceipes() {
   
    client.getEntries()
      .then((response) => {
      console.log('response',response);
        this.setState({ items: response.items })
      }
      )
  }

 
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <h1>ContentFull Api Consumer</h1>
        </AppBar>
        <List posts={this.state.items} />

      </div >

    );
  }

}

export default App;
