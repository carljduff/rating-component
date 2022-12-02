import React, { useState } from "react";
import Button from "./Button";
import thanks from "../images/illustration-thank-you.svg";
import iconStar from "../images/icon-star.svg";
const Frame = () => {
    const [switchPage, setSwitchPage] = useState(false);
    const [number, setNumber] = useState();

    const buttons = [
        <Button num='1' setNumber={setNumber}/>, 
        <Button num='2' setNumber={setNumber}/>,
        <Button num='3' setNumber={setNumber}/>,
        <Button num='4' setNumber={setNumber}/>, 
        <Button num='5' setNumber={setNumber}/>
    ]

    if(switchPage === false) {
        return(
            <div className="app">
                
                    <div className="star-circle">
                        <img className="star" src={iconStar} alt="star"/>
                    </div>
                
                <h1 className="heading">How did we do?</h1>
                <p className="paragraph">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                {buttons}
                <button onClick={() => setSwitchPage(true)} className="submit-button">SUBMIT</button>
            </div>
        )
    } else {
        return(
            <div className="app thank-state">
                
                <img className="img" src={thanks} alt="phone"/>
                <div className="selection-message"> You selected {number} out of 5</div>
                <div className="thank-you">Thank you!</div>
                <div className="goodbye-message">We appreciate you taking the time to give a rating. If you
                ever need more support, don't hesitate to get in touch!
                </div>


            </div>
        )
    }
}

export default Frame;