import React from "react";
import Aisha_1 from '../Aisha_1.jpg'
import mercy_flier from "../mercy_flier.jpg"
import text_editing from "../text_editing.jpg"
import text from "../text.jpg"

const About = () => {
    return (
        <>
                <h1 className="about-heading">SaMa's Designs is Web and Graphic Designing Websitess.</h1> <br />
                <hr />
                <h3 className="about-subHeading">Find below work samples</h3>. <br />
                <div id="aboutImg">
                <img className="about-image" src={Aisha_1} alt=""/>
                <img className="about-image" src={mercy_flier} alt=""/>
                <img className="about-image" src={text_editing} alt=""/>
                <img className="about-image" src={text} alt=""/>
                
                
                {/* <img className="about-image" src={du_bois} alt=""/> */}
                </div>


     
        </>
    )
}
export default About;