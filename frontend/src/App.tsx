import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import IDE from "./components/IDE";
import Profile from "./components/Profile";
import Features from "./components/Features";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Body />
              <Footer />
            </>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/ide" element={<IDE />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
