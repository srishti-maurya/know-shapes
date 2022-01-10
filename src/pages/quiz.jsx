import { useState } from "react";
import React from "react";

const Quiz = () => {
  let counter = 0;
  const [score, setScore] = useState(0);
  function btnHandler(e) {
    e.preventDefault();
    if (document.getElementById("ques1-1").checked) {
      counter++;
      document.getElementById("block1").style.backgroundColor = "#b8e6be";
    }
    if (document.getElementById("ques2-2").checked) {
      counter++;
      document.getElementById("block2").style.backgroundColor = "#b8e6be";
    }
    if (document.getElementById("ques3-1").checked) {
      counter++;
      document.getElementById("block3").style.backgroundColor = "#b8e6be";
    }
    if (document.getElementById("ques4-1").checked) {
      counter++;
      document.getElementById("block4").style.backgroundColor = "#b8e6be";
    }
    if (document.getElementById("ques5-1").checked) {
      counter++;
      document.getElementById("block5").style.backgroundColor = "#b8e6be";
    }
    setScore(counter);
    document.getElementById("scoreDisplay").style.display = "block";
  }

  return (
    <div>
      <h1>Quiz</h1>
      <form onSubmit={btnHandler}>
        <div className="quesBlock" id="block1">
          <p>
            1. If a triangle has angles 135°, 15°, 30°. Is it an obtuse
            triangle?
          </p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ques1"
              id="ques1-1"
            />
            <label className="form-check-label" for="ques1-1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ques1"
              id="ques1-2"
            />
            <label className="form-check-label" for="ques1-2">
              No
            </label>
          </div>
        </div>
        <div className="quesBlock" id="block2">
          <p>
            2. If a triangle has angles 115°, 25°, 40°. Is it an acute triangle?
          </p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ques2"
              id="ques2-1"
            />
            <label className="form-check-label" for="ques1-1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ques2"
              id="ques2-2"
            />
            <label className="form-check-label" for="ques1-2">
              No
            </label>
          </div>
        </div>
        <div className="quesBlock" id="block3">
          <p>
            3. If a triangle has angles 90°, 60°, 30°. Is it a right angle
            triangle?
          </p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ques3"
              id="ques3-1"
            />
            <label className="form-check-label" for="ques1-1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ques3"
              id="ques3-2"
            />
            <label className="form-check-label" for="ques1-2">
              No
            </label>
          </div>
        </div>
        <div className="quesBlock" id="block4">
          <p>
            4. A triangle has angles 60°, 60°, 60°. Is it an equilateral
            triangle?
          </p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ques4"
              id="ques4-1"
            />
            <label className="form-check-label" for="ques1-1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ques4"
              id="ques4-2"
            />
            <label className="form-check-label" for="ques1-2">
              No
            </label>
          </div>
        </div>
        <div className="quesBlock" id="block5">
          <p>
            5. If a triangle has angles 25°, 75°, 80°. Is it an acute triangle?
          </p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ques5"
              id="ques5-1"
            />
            <label className="form-check-label" for="ques1-1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ques5"
              id="ques5-2"
            />
            <label className="form-check-label" for="ques1-2">
              No
            </label>
          </div>
        </div>
        <button className="btn btn-primary" style={{ margin: "2rem" }}>
          Submit
        </button>
      </form>

      <div id="scoreDisplay" style={{ display: "none" }}>
        Your total score is : {score}
      </div>
    </div>
  );
};

export default Quiz;
