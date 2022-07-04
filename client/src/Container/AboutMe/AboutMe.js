import React,{useEffect} from "react";
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animation'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import './AboutMe.css'
function AboutMe(props){
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        return Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTANT = {
        description: "Full stack web developers, fojsojdosdsod. Fssdojsodkso iis isi i s psds. Web Development With ReactJS, NodeJS, Python.",
        highlights: {
            bullets:[
                "Full Stack Web and Mobile Development",
                "Interactive Front End as per the design",
                "React and react Native",
                'Building REST API',
                'Managing database'
            ],
            heading: "Here are a few highlights:"
        }
    }
    const renderHighlight = () => {
        return (
            SCREEN_CONSTANT.highlights.bullets.map((value, index) => (
                <div className="highlight" key={index}>
                    <div className="highlight-blob">
                        
                    </div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return(
        <div className='about-me-container screen-container fade-in' id={props.id}>
            <div className="about-me-parent">
                <ScreenHeading title='About Me' subheading='Why Choose Me?'/>
                <div className="about-me-card">
                    <div className="about-me-profile">
                        
                    </div>
                    <div className="about-me-details">
                            <span className="about-me-description">
                                {SCREEN_CONSTANT.description}
                            </span>
                            <div className="about-me-highlights">
                                <div className="highlights-heading">
                                    <span>{SCREEN_CONSTANT.highlights.heading}</span>
                                </div>
                                {renderHighlight()}
                            </div>
                            <div className="about-me-options">
                                <button className='btn primary-btn' onClick={()=>{ScrollService.scrollHandler.scrollToHireMe()}}>Hire Me</button>
                                <a href='ehizcv.pdf' download='ehizcv.pdf'>
                                    <button className='btn highlighted-btn'>Get Resume</button>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;