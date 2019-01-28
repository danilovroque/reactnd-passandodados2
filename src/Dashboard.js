import React, { Component } from 'react';
import MovieCard from './MovieCard.js';

class MovieCardList extends Component {
  render() {
    const { profiles, users, movies, usersByMovie } = this.props;
    
    const MovieCards = Object.keys(movies).map(id => (
      <MovieCard
         key={id}
         users={users}
         usersWhoLikedMovie={usersByMovie[id]}
         movieInfo={movies[id]}
        />
    ));

	return <ul>{MovieCards}</ul>;
  }

}

export default MovieCardList;