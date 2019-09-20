import React, { Component } from 'react';
import Movies from '../components/movieTickets/Movies';

import { movies } from '../shared/dummy/MovieTickets';

export default class TestMovieBooking extends Component {
    static navigationOptions = {
        headerTitle: 'Movie Booking',
    };

    state = {
        movies: []
    };
    
    componentDidMount() {
        this.setState({ movies });
    }

    render() {
        return (
            <Movies movies={this.state.movies} navigation={this.props.navigation} />
        );
    }
}