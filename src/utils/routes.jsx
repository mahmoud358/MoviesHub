import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import TrendingTV from "../pages/TrendingTV/TrendingTV";
import TopRatedMovies from "../pages/TopRatedMovies/TopRatedMovies";
import TV from "../pages/TV/TV";
import TopRatedTV from "../pages/TopRatedTV/TopRatedTV";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Search from "../pages/Search/Search";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "trending-tv", element: <TrendingTV /> },
      { path: "top-rated-movies", element: <TopRatedMovies /> },
      { path: "tv", element: <TV /> },
      { path: "top-rated-tv", element: <TopRatedTV /> },
      { path: ":type/:id", element: <MovieDetail /> },
      { path: "search", element: <Search /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);