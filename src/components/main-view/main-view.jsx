import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: "VEER ZAARA",
          Description:
            "The Indian pilot Veer Pratap Singh saves the life of the young Pakistani woman Zaara. They spend one day together, which brings them closer and allows them to experience their common roots. 22 years later, the young lawyer Saamiya Siddiqui is supposed to uncover the mystery surrounding Veer, who has been living neglected in a Pakistani prison for a good two decades.",
          ImagePath: (
            //this is the code you gave me to display an image but it didn't work for neither of the three movies
            <img
              src="https://img.goldposter.com/2020/03/veer-zaara_poster_goldposter_com_1.jpg"
              crossOrigin="anonymous"
            />
          ),
        },
        {
          _id: 2,
          Title: "Good Newwz",
          Description:
            "After several failed attempts at conceiving a baby naturally, two couples with the same surname consult Mumbai's best fertility doctors and opt for IVF. As they await the good news, the doctor shares a rather negligent sperm mix-up, leaving both the couples in a state of agony and helplessness.",
          ImagePath: (
            //this <img> tag is not showing an image either
            <img
              src="https://img.goldposter.com/2019/12/good-newwz_poster_goldposter_com_9.jpg"
              crossOrigin="anonymous"
            />
          ),
        },
        {
          _id: 3,
          Title: "MOM",
          Description:
            "Devaki is a biology teacher at the same school as her stepdaughter Arya. Although, Devaki is a caring mother, Arya remains distant. One unfortunate night, Arya is brutally attacked raped at a party and when the justice system failed them, Devaki takes matters in her own hands to find justice for her daughter.",
          ImagePath: (
            //this <img> tag is not showing an image either
            <img
              src="https://media-cache.cinematerial.com/p/500x/0kzdgql5/mom-indian-movie-poster.jpg?v=1555579912"
              crossOrigin="anonymous"
            />
          ),
        },
      ],
      selectedMovie: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0)
      return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}
