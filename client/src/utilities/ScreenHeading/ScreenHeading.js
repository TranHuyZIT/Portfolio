import React from "react";
import './ScreenHeading.css'
function ScreenHeading(props){
    return (
        <div className="heading-container">
            <div className="screen-heading">
                <span>{props.title}</span>
            </div>
            {
                (props.subheading) ? (
                    <div className="screen-sub-heading">
                        <span>{props.subheading}</span>
                    </div>
                ) : (<div></div>)
            }
            <div className="heading-seperator">
                <div className="seperator-line">
                    <div className="seperator-blob">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ScreenHeading;