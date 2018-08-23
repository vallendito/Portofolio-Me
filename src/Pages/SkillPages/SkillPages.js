import React, { Component } from 'react';
import SkillBars from '../../components/SkillBars';
import ScrollToNext from '../../components/ScrollToNext';

const SKILLS = [
    {type: "HTML", level: 99},
    {type: "CSS", level: 98},
    {type: "JavaScript", level: 87},
    {type: "BootStrap", level: 90},
    {type: "Photoshop", level: 100},
    {type: "React.js", level: 80}
  ];

class SkillPages extends Component {
    render() {
        return(
            <div className="skills">
                <h2>Skills</h2>
                <p>Over 2 Years of Experience Using <br />
                these Programs.
                </p>
                <div className="programs">
                    <SkillBars color="#607d8b" skills={SKILLS}/>
                </div>
                
                <ScrollToNext pageSelector=".portofolio" />

            </div> 
        );
    }
}

export default SkillPages;