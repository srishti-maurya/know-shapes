import React,{useState} from "react";
import ImageAngle from "../images/img-angle.svg";


var angle1,
  angle2,
  angle3 = 0;


function AngleOfTriangle() {
  const [outputMessage, setOutputMessage] = useState([" "]);
  function buttonHandler(event){
    event.preventDefault();
    const sumOfAngle = Number(angle1)+Number(angle2)+Number(angle3);
    if(sumOfAngle<=180){
        
        setOutputMessage("Output : Hurray! A triangle can be formed from the given angles");
    }else{
      setOutputMessage("Output : Oops! A triangle cannot be formed from the given angles");
    }
  }
  return (
    <div className="container">
      <div className="triangle-angle">
      <img src={ImageAngle} className="img-triangle"></img>
        <h4 className="triangle-angle-heading">
          Enter the angles in below input boxes and we will tell you if those
          angles make a Triangle
        </h4>
        <form onSubmit={buttonHandler}>
          <div class="row">
            <div class="col">
              <input type="number" class="form-control" placeholder="Angle 1" onChange={(e)=>{angle1 = e.target.value}}/>
            </div>
            <div class="col">
              <input type="number" class="form-control" placeholder="Angle 2" onChange={(e)=>{angle2 = e.target.value}}/>
            </div>
            <div class="col">
              <input type="number" class="form-control" placeholder="Angle 3" onChange={(e)=>{angle3 = e.target.value}}/>
            </div>
          </div>
          <button type="submit" class="btn btn-primary triangle-angle-btn">
          Submit
        </button>
        </form>
       
        <div>
        {outputMessage} 
        </div>
      </div>
    </div>
  );
}

export default AngleOfTriangle;
