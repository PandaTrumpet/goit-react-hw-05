import axios from "axios";

const options = {
  url: "https://api.themoviedb.org/3/trending/movie/day",
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGUzYzU2ZWRiYzY1YTk1NWJlZGUwZmJmODg4YmM5ZSIsInN1YiI6IjY2Mjk0MDYzYTM5ZDBiMDE3MDQ3ZWQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nqblQGb4MEipKJrvLB6Eyg2lApC02W2KuKjmw0-JknQ",
  },
};

export const findMovie = async () => {
  const response = await axios.request(options);
  console.log(response.data.results);
  return response.data.results;
};
