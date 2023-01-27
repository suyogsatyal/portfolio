import React from "react";
import "./dark.css"

const DarkToggle = () => {
    return(
        // <input id="toggle" className="toggle m-2" type="checkbox"/>
        <div className="darkToggle absolute block lg:hidden -right-3 sm:-right-6 -bottom-3 sm:-bottom-6 border border-1 rounded-tl-3xl">
            <input id="toggle" className="toggle m-2" type="checkbox"/>
        </div>
    )
}

export default DarkToggle;