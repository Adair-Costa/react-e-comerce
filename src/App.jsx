import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import of lib react router dom
import "./style/App.css";

// import components
import Home from './components/Home';
import Navbar from "./components/Navbar";
import About from "./components/About";
import History from "./components/History";
import Contacts from "./components/Contacts";
import Products from "./components/Products";
import Services from "./components/Services";
import ShoppingTroly from "./components/ShoppingTroly";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/troly" element={<ShoppingTroly />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;