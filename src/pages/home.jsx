import React from "react";
import { Link } from "react-router-dom";
import ImageArea from "../images/img-area.svg";
import ImageAngle from "../images/img-angle.svg";
import ImageHypotenuse from "../images/img-hypotenuse.svg";
import ImageQuiz from "../images/img-quiz.svg";

const Home = () => {
  return (
    <div className="container">
      <div className="options">
        <img src={ImageAngle} className="img-triangle" alt="img-angle"></img>
        <br />
        <Link to="/angleOfTriangle" className="homeLinks">
          Angle of Triangle
        </Link>
      </div>
      <div className="options">
        <img src={ImageArea} className="img-triangle" alt="img-area"></img>
        <br />
        <Link to="/areaCalculator" className="homeLinks">
          Area Calculator
        </Link>
      </div>
      <div className="options">
        <img
          src={ImageHypotenuse}
          className="img-triangle"
          alt="img-hypotenuse"
        ></img>
        <br />
        <Link to="/checkHypotenuse" className="homeLinks">
          Check Hypotenuse
        </Link>
      </div>
      <div className="options">
        <img src={ImageQuiz} className="img-triangle" alt="img-quiz"></img>
        <br />
        <Link to="/quiz" className="homeLinks">
          Take Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
