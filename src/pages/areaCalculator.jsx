import React, { useState } from "react";
import ImageArea from "../images/img-area.svg";
let base,
  height, side1, side2, side3, length1, length2, angle;
function AreaCalculator() {
  const [option1OutputMessage, setOption1OutputMessage] = useState(["", 0]);
  const [option2OutputMessage, setOption2OutputMessage] = useState(["", 0]);
  const [option3OutputMessage, setOption3OutputMessage] = useState(["", 0]);
  function choseOptionHandler() {
    if (document.getElementById("option1").checked) {
      document.getElementById("option1Body").style.display = "block";
      document.getElementById("option2Body").style.display = "none";
      document.getElementById("option3Body").style.display = "none";
    } else if (document.getElementById("option2").checked) {
      document.getElementById("option1Body").style.display = "none";
      document.getElementById("option2Body").style.display = "block";
      document.getElementById("option3Body").style.display = "none";
    } else if (document.getElementById("option3").checked) {
      document.getElementById("option1Body").style.display = "none";
      document.getElementById("option2Body").style.display = "none";
      document.getElementById("option3Body").style.display = "block";
    }
  }

  function option1Handler(event) {
    event.preventDefault();
    const area1 = (Number(base) * Number(height)) / 2;
    setOption1OutputMessage(["Area = ", area1]);
  }

  function option2Handler(event) {
    event.preventDefault();
    const a = Number(side1);
    const b = Number(side2);
    const c = Number(side3);
    const semiPeri = (a + b + c) / 2;
    const ar = (semiPeri - a) * (semiPeri - b) * (semiPeri - c) * semiPeri;
    const area2 = Math.sqrt(ar);
    setOption2OutputMessage(["Area = ", area2]);
  }

  function option3Handler(event) {
    event.preventDefault();
    const b = Number(length1);
    const c = Number(length2);
    let a =Number(angle)
    a = a * Math.PI / 180;
    const area3 = ((b*c*Math.sin(a))*(1/2));
    setOption3OutputMessage(["Area = ", area3]);
  }
  return (
    <div className="container">
      <div className="triangle-angle">
      <img src={ImageArea} className="img-triangle"></img><br/>
        <h1>Calculate Area</h1>
        <h4 className="triangle-angle-heading">
          Select an option below as per the data you have for a triangle
        </h4>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="option"
            id="option1"
            onClick={choseOptionHandler}
          />
          <label class="form-check-label" for="option1">
            If you have base and height length
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="option"
            id="option2"
            onClick={choseOptionHandler}
          />
          <label class="form-check-label" for="option2">
            If you have length of 3 sides
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="option"
            id="option3"
            onClick={choseOptionHandler}
          />
          <label class="form-check-label" for="option3">
            If you have length of 2 sides and included angle
          </label>
        </div>
        <div id="option1Body" style={{ display: "none" }}>
          <div className="container">
            <div className="triangle-angle">
              <h4 className="triangle-angle-heading">
                Enter the base and height of the triangle
              </h4>
              <form onSubmit={option1Handler}>
                <div class="row">
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="base"
                      onChange={(e) => {
                        base = e.target.value;
                      }}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="height"
                      onChange={(e) => {
                        height = e.target.value;
                      }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary triangle-angle-btn"
                >
                  Submit
                </button>
              </form>

              <div>Area of the triangle : {option1OutputMessage}</div>
            </div>
          </div>
        </div>
        <div id="option2Body" style={{ display: "none" }}>
          <div className="container">
            <div className="triangle-angle">
              <h4 className="triangle-angle-heading">
                Enter the sides in below input boxes to calculate the area of
                the triangle
              </h4>
              <form onSubmit={option2Handler}>
                <div class="row">
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Side 1"
                      onChange={(e) => {
                        side1 = e.target.value;
                      }}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Side 2"
                      onChange={(e) => {
                        side2 = e.target.value;
                      }}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Side 3"
                      onChange={(e) => {
                        side3 = e.target.value;
                      }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary triangle-angle-btn"
                >
                  Submit
                </button>
              </form>

              <div>Area of the triangle : {option2OutputMessage}</div>
            </div>
          </div>
        </div>
        <div id="option3Body" style={{ display: "none" }}>
        <div className="container">
            <div className="triangle-angle">
              <h4 className="triangle-angle-heading">
                Enter the 2 sides and angle in below input boxes to calculate the area of
                the triangle
              </h4>
              <form onSubmit={option3Handler}>
                <div class="row">
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Side 1"
                      onChange={(e) => {
                        length1 = e.target.value;
                      }}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Side 2"
                      onChange={(e) => {
                        length2 = e.target.value;
                      }}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Angle"
                      onChange={(e) => {
                        angle = e.target.value;
                      }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary triangle-angle-btn"
                >
                  Submit
                </button>
              </form>

              <div>Area of the triangle : {option3OutputMessage}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaCalculator;
