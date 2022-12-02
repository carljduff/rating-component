import React, { useState } from "react";

const Button = ({num, setNumber}) => {

    const [isClicked, setIsClicked] = useState(false);

    const buttonHandler = () => {
        setIsClicked(!isClicked);
        setNumber(num);
    }

    return(
        <>
            <button onClick={buttonHandler} className={`${isClicked ? 'rating-button-click' : 'rating-button'}`}>{num}</button>
        </>
    )
}

export default Button;