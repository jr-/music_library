import React, { Component } from 'react';

class MusicLibrary extends Component {
    state = {
        genres: 1,
        authors: 2,
        musics: 3,
        albums: 4,
        contentType: 'musics'
    }

    render () {
        return (
          <div>Conteudo</div>
        );
    }
}

export default MusicLibrary;