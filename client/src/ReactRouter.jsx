import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Podcast from "./pages/Podcast";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ShowNavbar from "./components/ShowNavbar";

const ReactRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ShowNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ReactRouter;
