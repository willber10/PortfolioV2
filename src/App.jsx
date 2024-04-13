import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <Navbar /> {/* Add this line to render the Navbar component */}
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
