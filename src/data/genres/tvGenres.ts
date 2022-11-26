import actionAdventure from "./tv/action-adventure.jpg";
import animation from "./tv/animation.jpg";
import comedy from "./tv/comedy.jpeg";
import crime from "./tv/crime.jpg";
import documentary from "./tv/documentary.jpg";
import drama from "./tv/drama.jpg";
import family from "./tv/family.jpg";
import kids from "./tv/kids.jpg";
import mystery from "./tv/mystery.jpg";
import news from "./tv/news.jpg";
import reality from "./tv/reality.jpg";
import sciFi from "./tv/sci-fi-fantasy.jpg";
import soap from "./tv/soap.jpg";
import talk from "./tv/talk.jpg";
import warPolitics from "./tv/war-politics.jpg";
import western from "./tv/western.jpg";

import GenreModel from "../../models/genresModel";

const tvGenres: GenreModel[] = [
   {
      id: 10759,
      name: "Action & Adventure",
      image: actionAdventure,
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
      id: 10762,
      name: "Kids",
      image: kids,
   },
   {
      id: 9648,
      name: "Mystery",
      image: mystery,
   },
   {
      id: 10763,
      name: "News",
      image: news,
   },
   {
      id: 10764,
      name: "Reality",
      image: reality,
   },
   {
      id: 10765,
      name: "Sci-Fi & Fantasy",
      image: sciFi,
   },
   {
      id: 10766,
      name: "Soap",
      image: soap,
   },
   {
      id: 10767,
      name: "Talk",
      image: talk,
   },
   {
      id: 10768,
      name: "War & Politics",
      image: warPolitics,
   },
   {
      id: 37,
      name: "Western",
      image: western,
   },
];

export default tvGenres;
