import React from "react";
import { TOTAL_SCREENS } from "../utilities/commonUtils";
function Container(){
    const mapAllScreens = () => {
        return(
            TOTAL_SCREENS.map((screen) => {
                // console.log(screen.component);
                return (screen.component) ? <screen.component screenName={screen.screen_name} 
                key={screen.screen_name} id ={screen.screen_name}/> :<div key={screen.screen_name}></div>
            })
        )
    }
    return(
        <div className="portfolio-container">
            {mapAllScreens()}
        </div>
    )
}
export default Container;