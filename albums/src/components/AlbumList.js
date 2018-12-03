import React, { Component } from 'react'; 
import { ScrollView } from 'react-native'; 
import axios from 'axios';
import AlbumDetail from './AlbumDetails';

class AlbumList extends Component { 
    // only class-based components can hold state 
    state = { albums: [] };

    componentWillMount() {
        // axios is an library 
        // requests return promises, so we can chain from there
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        // always modify state by calling setState after initializing 
        .then(response => this.setState({ albums: response.data })); 
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
            // each item is going to need a unique key 
            // for performance reasons 
        ); 
    }

    render () {
        console.log(this.state);
        return  (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
    // why don't classes have semicolons? I dunno, fucking JS man
}

export default AlbumList; 