import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>

      <div className="main-header">
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
          <a class="navbar-brand" href="/">
            Srishti Maurya
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to="/" className="link-color">
                  Home
                </Link>
                &nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link to="/angleOfTriangle" className="link-color">
                  Angle of Triangle
                </Link>
                &nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link to="/areaCalculator" className="link-color">
                  Area Calculator
                </Link>
                &nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link to="/checkHypotenuse" className="link-color">
                  Check Hypotenuse
                </Link>
                &nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link to="/quiz" className="link-color">
                  Take Quiz
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
    </header>
  );
}

export default Header;
