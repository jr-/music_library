import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import MusicLibrary from './containers/MusicLibrary/MusicLibrary';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MusicLibrary />
        </Layout>
      </div>
    )
  }
}

export default App;
