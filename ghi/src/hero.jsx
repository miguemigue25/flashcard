import React from "react";
import "./hero.css";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import Footer from "./footer";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <p>
            Flashcard Ai is an easy to use flashcard generator that can help you
            create flashcards fast!
          </p>
          <h1>Generate flashcards and start studying now! </h1>
          <p>
            Generate, save and log all your flashcard sessions with Flashcard Ai
          </p>
          <div className="input-container">
            <Link to="timer">
              <button className="btn">Get Started</button>
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="img-container">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-padding">
        <Footer />
      </div>
    </div>
  );
};
