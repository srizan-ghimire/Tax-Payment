import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact-Us";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Faq from "./components/Faq";
import PrivacyPolicy from "./components/PrivacyPolicy";
import About from "./components/About";
import TaxCalculator from "./components/TaxCalculator";
import Payment from "./components/Payment";
import UpdatingSoon from "./components/UpdatingSoon";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/*"
          element={
            <>
              <Navbar token={token} setToken={setToken} />
              <Routes>
                <Route path="/" element={<Home token={token} />} />
                <Route exact path="/contact-us" element={<Contact />} />
                <Route exact path="/faq" element={<Faq />} />
                <Route exact path="/about" element={<About />} />

                <Route
                  exact
                  path="/privacy-policy"
                  element={<PrivacyPolicy />}
                />
                <Route path="/tax-calculator" element={<TaxCalculator />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/available-soon" element={<UpdatingSoon />} />

                <Route exact path="*" element={<ErrorPage />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
