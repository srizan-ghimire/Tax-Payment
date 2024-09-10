import React from "react";

import { useEffect } from "react";
import Hero from "./Hero";
import Services from "./Services";
import Teams from "./Teams";

const Home = ({ token }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero token={token} />
      <Services token={token} />
      <Teams />
    </>
  );
};

export default Home;
