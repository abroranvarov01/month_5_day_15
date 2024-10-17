import React from "react";
import Hero from "./components/hero/hero";
import Features from "./components/features/features";
import Latests from "./components/latests/latests";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Latests />
      </section>
    </div>
  );
};

export default Home;
