import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import IDE from "./components/IDE";

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
        <Route path="/auth" element={<Auth />} />
        <Route path="/ide" element={<IDE />} />
      </Routes>
    </Router>
  );
}
