import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// HOC
// import DefaultHOC from "./HOC/Default.HOC";
import DefaultLayout from "./layouts/Default.layout";

// Components
// import Temp from "./components/Navbar/Temp";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PlaysPage from "./pages/PlaysPage";

// Axios Default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = import.meta.env.VITE_API_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/plays", element: <PlaysPage /> },
    ],
  },
  {
    path: "/movie/:id",
    element: <MoviePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
