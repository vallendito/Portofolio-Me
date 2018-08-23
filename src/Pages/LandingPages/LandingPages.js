import React from 'react';
import ScrollToNext from '../../components/ScrollToNext';

const LandingPage = () => {
    return(
        <div className="landing">
            <div className="landingWrapper">
                <div className="landingL">
                    <h1>Barly Vallendito</h1>
                    <p>Hello, my name is Barly Vallendito. I am Frontend <br />
                        Engineer &amp; <span className="blue">Web Designer</span>.
                    </p>
                    <ul>
                        <li><p>Frontend Engineer</p></li>
                        <li><p>UI/UX</p></li>
                        <li><p>Web Designer</p></li>
                </ul>
                </div>
                <div className="landingR">
                    <img src="assets/images/vallen.svg" alt="Programmer" width="400px"/>
                </div>
            </div>
            <ScrollToNext pageSelector=".about" />
        </div>
    )
}

export default LandingPage;
