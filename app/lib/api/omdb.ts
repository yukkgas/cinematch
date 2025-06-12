import axios from "axios";

export const searchMovies = async (query: string) => {
  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}&s=${query}`
  );

  return res.data;
};

export const getMovieById = async (id: string) => {
  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}&i=${id}&plot=full`
  );
  return res.data;
};

export const getPopularMovies = async () => {
  const popularKeywords = ["avengers", "batman", "superman", "spider-man"];
  const randomKeyword =
    popularKeywords[Math.floor(Math.random() * popularKeywords.length)];

  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}&s=${randomKeyword}`
  );
  return res.data;
};
