import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { staggerContainer } from "../../animations/StaggerCards";
import DropDown from "@/components/Pages/Discover/DropDown";
import {
   ratings,
   sortByMovie,
   sortByTv,
   movieGenresOptions,
   tvGenresOptions,
   releaseYears,
   searchTypes,
} from "../../data/discover/options";
import useDropDownValues from "../../hooks/useDropDownValues";
import useLanguages from "../../hooks/useLanguages";

import { motion } from "framer-motion";
import useRemoveBackgroundImage from "@/hooks/useRemoveBackgroundImage";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import Title from "@/components/Title";

export default function Discover() {
   const router = useRouter();
   const {
      language,
      setLanguage,
      genre,
      setGenre,
      year,
      setYear,
      rating,
      setRating,
      sortBy,
      setSortBy,
      searchType,
      setSearchType,
   } = useDropDownValues();

   const isMovie = searchType.value === "movie";
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      const mediaType = isMovie ? "movie" : "tv";

      const languageQuery = `&with_original_language=${language.value}`;
      const genreQuery = `&with_genres=${genre.value}`;
      const yearQuery = `&${isMovie ? "year" : "first_air_date_year"}=${
         year.value
      }`;
      const ratingQuery = `&vote_average.gte=${rating.value}`;
      const sortByQuery = `&sort_by=${sortBy.value}`;

      const searchTerm =
         languageQuery + genreQuery + yearQuery + ratingQuery + sortByQuery;

      router.push(`/discover/${mediaType}?${searchTerm}`);
   };

   const { languagesOptions } = useLanguages();

   useRemoveBackgroundImage();

   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <div className="px-10 pb-10">
         <Head>
            <title>Discover</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Title title="Discover" />
         <form onSubmit={handleSubmit}>
            <motion.div
               variants={staggerContainer}
               initial="initial"
               animate="animate"
               exit="exit"
               className="grid gap-x-5 gap-y-10 mt-10 sm:grid-cols-2 xl:grid-cols-3 2xl:px-20"
            >
               <DropDown
                  title="Type of Search"
                  options={searchTypes}
                  value={searchType}
                  setValue={setSearchType}
                  icon={isMovie ? "movie" : "smart_display"}
               />
               <DropDown
                  title="Languages"
                  options={languagesOptions}
                  value={language}
                  setValue={setLanguage}
                  icon="translate"
               />
               <DropDown
                  title="Genres"
                  options={isMovie ? movieGenresOptions : tvGenresOptions}
                  value={genre}
                  setValue={setGenre}
                  icon="theater_comedy"
               />
               <DropDown
                  title="Year of Release"
                  options={releaseYears}
                  value={year}
                  setValue={setYear}
                  icon="event"
               />
               <DropDown
                  title="Rating"
                  options={ratings}
                  value={rating}
                  setValue={setRating}
                  icon="star_rate"
               />
               <DropDown
                  title="Sort By"
                  options={isMovie ? sortByMovie : sortByTv}
                  value={sortBy}
                  setValue={setSortBy}
                  icon="sort"
               />
            </motion.div>
            <button
               type="submit"
               style={{ backgroundColor: themeColor }}
               className="px-5 py-3 rounded-xl mx-auto block shadow-lg mt-5 text-white uppercase"
            >
               Search
            </button>
         </form>
      </div>
   );
}
