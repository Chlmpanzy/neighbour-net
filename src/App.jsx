import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import Blog from "./Pages/blog.jsx";
import Signin from "./Pages/sign-in.jsx";
import Signup from "./Pages/sign-up.jsx";
import Contact from "./Pages/contact.jsx";
import Explore from "./Pages/explore.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/explore" element={<Explore />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
