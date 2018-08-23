import React, {Component} from 'react';
import ScrollToNext from '../../components/ScrollToNext';

class AboutPages extends Component {
    render() {
        return(
            <div className="about">
                <div className="aboutWrapper">
                    <div className="aboutL">
                        <img src="assets/images/about-vallen.svg" alt="Programmer" width="380px"/>
                    </div>
                    <div className="aboutR">
                        <h1>About Me</h1>
                        <p>Et aliqua esse et ullamco sint minim nulla fugiat fugiat ipsum dolore nulla. Occaecat ea magna ut consequat laboris deserunt et. Reprehenderit non Lorem laborum esse. Quis non magna ex id ipsum nisi cillum incididunt nostrud et ullamco ea. Magna pariatur exercitation consequat ut ad veniam ipsum culpa nulla. Laborum dolor tempor cupidatat sit veniam adipisicing consectetur occaecat culpa proident officia ullamco laboris dolor.</p>
                    </div>
                </div>
                <ScrollToNext pageSelector=".skills" />
            </div>
        )
    }
}
export default AboutPages;
