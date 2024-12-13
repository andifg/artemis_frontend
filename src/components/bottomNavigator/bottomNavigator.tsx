import React from "react";
import "./BottomNavigator.scss";
import TestSvg from "../../assets/meat.svg";

function BottomNavigator() {


    return(
        <div className="bottom-navigator">
            Hello

            <div className="bottom-navigator-circle">
                {/* <TestSvg/> */}
                <img src={TestSvg} alt="test" style={{width: "50px"}}/>
            </div>

        </div>

    )

}

export { BottomNavigator };
