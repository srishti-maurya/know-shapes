import React, {useState} from "react";

var side1,
  side2 = 0;

function CheckHypotenuse() {
  const [outputMessage, setOutputMessage] = useState(["",0]);
  function buttonHandler(event){
    event.preventDefault();
    const sqSide1= Math.pow(Number(side1),2);
    const sqSide2= Math.pow(Number(side2),2);
    const hypotenuse = Math.sqrt((sqSide1+sqSide2));
    setOutputMessage(["Hypotenuse = ",hypotenuse]);
  }
  return (
    <div className="container">
      <div className="triangle-angle">
        <h4 className="triangle-angle-heading">
        Enter the lengths of sides of right angle triangle
        </h4>
        <form onSubmit={buttonHandler}>
          <div class="row">
            <div class="col">
              <input type="number" class="form-control" placeholder="Side 1" onChange={(e)=>{side1 = e.target.value}}/>
            </div>
            <div class="col">
              <input type="number" class="form-control" placeholder="Side 2" onChange={(e)=>{side2 = e.target.value}}/>
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
export default CheckHypotenuse;
