import axios from "axios";

export const findMovie = async () => {
  const options = {
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGUzYzU2ZWRiYzY1YTk1NWJlZGUwZmJmODg4YmM5ZSIsInN1YiI6IjY2Mjk0MDYzYTM5ZDBiMDE3MDQ3ZWQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqblQGb4MEipKJrvLB6Eyg2lApC02W2KuKjmw0-JknQ",
    },
  };

  const response = await axios.request(options);
  // console.log(response.data.results);
  return response.data.results;
};

export const searchMovies = async (moviesName) => {
  const options = {
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: moviesName,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGUzYzU2ZWRiYzY1YTk1NWJlZGUwZmJmODg4YmM5ZSIsInN1YiI6IjY2Mjk0MDYzYTM5ZDBiMDE3MDQ3ZWQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqblQGb4MEipKJrvLB6Eyg2lApC02W2KuKjmw0-JknQ",
    },
  };
  const response = await axios.request(options);
  // console.log(response.data);
  return response.data.results;
};

export const getMoviesId = async (moviesId) => {
  const options = {
    url: `https://api.themoviedb.org/3/movie/${moviesId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGUzYzU2ZWRiYzY1YTk1NWJlZGUwZmJmODg4YmM5ZSIsInN1YiI6IjY2Mjk0MDYzYTM5ZDBiMDE3MDQ3ZWQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqblQGb4MEipKJrvLB6Eyg2lApC02W2KuKjmw0-JknQ",
    },
  };

  const response = await axios.request(options);
  // console.log(response.data);
  return response.data;
};

export const getActors = async (moviesId) => {
  const options = {
    url: `https://api.themoviedb.org/3/movie/${moviesId}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGUzYzU2ZWRiYzY1YTk1NWJlZGUwZmJmODg4YmM5ZSIsInN1YiI6IjY2Mjk0MDYzYTM5ZDBiMDE3MDQ3ZWQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqblQGb4MEipKJrvLB6Eyg2lApC02W2KuKjmw0-JknQ",
    },
  };

  const response = await axios.request(options);
  // console.log(response.data.cast);
  return response.data.cast;
};

export const getReviews = async (moviesId) => {
  const options = {
    url: `https://api.themoviedb.org/3/movie/${moviesId}/reviews`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGUzYzU2ZWRiYzY1YTk1NWJlZGUwZmJmODg4YmM5ZSIsInN1YiI6IjY2Mjk0MDYzYTM5ZDBiMDE3MDQ3ZWQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqblQGb4MEipKJrvLB6Eyg2lApC02W2KuKjmw0-JknQ",
    },
  };

  const response = await axios.request(options);
  // console.log(response.data.results);
  return response.data.results;
};
