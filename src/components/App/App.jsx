// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const Layout = lazy(() => import("../../pages/Layout/Layout"));

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));

const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);
import "./App.css";
import { findMovie } from "../../movies-api/";
function App() {
  findMovie();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
