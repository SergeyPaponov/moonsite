import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ShowDetail from './ShowDetail';

class ShowList extends Component {
    state = { shows: [] };

    componentWillMount(){
    //axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    axios.get('http://api.tvmaze.com/shows')
        .then(response => this.setState({ shows: response.data}));
    }

    renderShows(){
        return this.state.shows.map(item =>
            <ShowDetail key={item.id} show={item} />
        );
    }

    render() {
        return(
            <ScrollView>
                {this.renderShows()}
            </ScrollView> 
        );
    }
}

export default ShowList;
