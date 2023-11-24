import action from "./movie/action.jpg";
import adventure from "./movie/adventure.jpg";
import animation from "./movie/animation.jpg";
import comedy from "./movie/comedy.jpg";
import crime from "./movie/crime.jpg";
import documentary from "./movie/documentary.jpg";
import drama from "./movie/drama.jpg";
import family from "./movie/family.jpg";
import fantasy from "./movie/fantasy.jpg";
import history from "./movie/history.jpg";
import horror from "./movie/horror.jpg";
import music from "./movie/music.jpg";
import mystery from "./movie/mystery.jpg";
import romance from "./movie/romance.jpg";
import scienceFiction from "./movie/science-fiction.jpg";
import tvMovie from "./movie/tv-movie.png";
import thriller from "./movie/thriller.jpeg";
import war from "./movie/war.jpg";
import western from "./movie/western.jpg";
import GenreModel from "@/features/pages/genres/models/GenreModel";

const movieGenres: GenreModel[] = [
   {
      id: 28,
      name: "Action",
      image: action,
   },
   {
      id: 12,
      name: "Adventure",
      image: adventure,
   },
   {
      id: 16,
      name: "Animation",
      image: animation,
   },
   {
      id: 35,
      name: "Comedy",
      image: comedy,
   },
   {
      id: 80,
      name: "Crime",
      image: crime,
   },
   {
      id: 99,
      name: "Documentary",
      image: documentary,
   },
   {
      id: 18,
      name: "Drama",
      image: drama,
   },
   {
      id: 10751,
      name: "Family",
      image: family,
   },
   {
      id: 14,
      name: "Fantasy",
      image: fantasy,
   },
   {
      id: 36,
      name: "History",
      image: history,
   },
   {
      id: 27,
      name: "Horror",
      image: horror,
   },
   {
      id: 10402,
      name: "Music",
      image: music,
   },
   {
      id: 9648,
      name: "Mystery",
      image: mystery,
   },
   {
      id: 10749,
      name: "Romance",
      image: romance,
   },
   {
      id: 878,
      name: "Science Fiction",
      image: scienceFiction,
   },
   {
      id: 10770,
      name: "Movie for Television",
      image: tvMovie,
   },
   {
      id: 53,
      name: "Thriller",
      image: thriller,
   },
   {
      id: 10752,
      name: "War",
      image: war,
   },
   {
      id: 37,
      name: "Western",
      image: western,
   },
];

export default movieGenres;
