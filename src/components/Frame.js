import React, { useState } from "react";
import Button from "./Button";
import thanks from "../images/illustration-thank-you.svg";
import iconStar from "../images/icon-star.svg";
import Container from 'react-bootstrap/Container';


const Frame = () => {
  const [switchPage, setSwitchPage] = useState(false);
  const [number, setNumber] = useState();
  const [error, setError] = useState(false);
  const buttons = [
    <Button key="1" num="1" setNumber={setNumber} />,
    <Button key="2" num="2" setNumber={setNumber} />,
    <Button key="3" num="3" setNumber={setNumber} />,
    <Button key="4" num="4" setNumber={setNumber} />,
    <Button key="5" num="5" setNumber={setNumber} />,
  ];

  const submitHandler = () => {
    if (number) {
      setSwitchPage(true);
    } else {
      setError(true);
    }
  };


  if (switchPage === false) {
    return (
      <>
      
      <Container className="app">
        <div className="star-circle">
        <img className="star" src={iconStar} alt="star" />
       </div>

         <h1 className="heading">How did we do?</h1>
         <p className="paragraph">
           Please let us know how we did with your support request. All feedback
           is appreciated to help us improve our offering!
         </p>
         {buttons}

         {error ? (
           <p className="submit-error">Please rate before submitting!</p>
         ) : null }
         <button
           onClick={submitHandler}
           className={`${error ? "submit-button-error" : "submit-button"}`}
         >
           SUBMIT
         </button>
      </Container>
      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/carljduff">Carl J Duff</a>.
    </div>
    </>
    );
  } else {
    return (
     <>
      <Container className="app thank-state">
        <img className="img" src={thanks} alt="phone" />
        <div className="selection-message"> You selected {number} out of 5</div>
        <div className="thank-you">Thank you!</div>
        <div className="goodbye-message">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </div>
      </Container>
      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/carljduff">Carl J Duff</a>.
    </div>
    </>
    );
  }
};

export default Frame;
