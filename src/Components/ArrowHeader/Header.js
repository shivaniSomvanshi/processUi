import React from "react";
import "./Header.css";
// import AddIcon from "@material-ui/icons/Add";

function Header(props) {
  return (
    <div className="arrowHeaders">
      <div className='arrow_headerOneLeft'><h2>1. Case Initiation</h2></div>
      <div className='arrow_headerOneRight'></div>
      {/* <div className="arrow_headerOne">
        <h2>1. Case Initiation</h2>
      </div> */}
      {/* <div className='arrow_headerTwo'>
        <AddIcon/>
      </div> */}
      <div className="arrow_headerTwoTop">
      </div>
      <div className="arrow_headerTwoBottom">
      </div>
    </div>
  );
}

export default Header;
