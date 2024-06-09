import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 flex justify-center items-center overflow-hidden">
      <div className="max-w-md w-full rounded-2xl border-2 border-white shadow p-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-center my-2 text-slate-700 font-serif font-bold text-2xl">
          Project Portfolio
        </h1>
        <ul>
          <li>
            <Link to="/react-portfolio/currency-converter">
              Currency Converter
            </Link>
          </li>
          <li>
            <Link to="/react-portfolio/random-pwd-generator">
              Random Password Generator
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
