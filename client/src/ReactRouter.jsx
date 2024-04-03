import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './page/Home';
import Category from "./page/Category"
import Podcast from './page/Podcast';
import Search from './page/Search';
import SignUp from './page/SignUp';
import SignIn from "./page/SignIn";
import Header from './components/Header';

const ReactRouter = () => {
    return (
        <>
        {/* react router setup */}
            <BrowserRouter>
            <Header />
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
    )
}

export default ReactRouter


