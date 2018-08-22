import React from 'react';


const Nav = () => {
    return(
        <div className="nav">
            <div className="contactMe">
                <a href=""><img src="assets/images/Chat_Blue.png" alt="Chat Icon"></img>Contact Me</a>
            </div>
            <div className="navIcons">
                <a href=""><img src="assets/images/Youtube_Gray.png" alt="Youtube Icon"></img></a>
                <a href=""><img src="assets/images/Be_Gray.png" alt="Behance Icon"></img></a>
                <a href=""><img src="assets/images/Dribbble_Gray.png" alt="Dribbble Icon"></img></a>
            </div>
        </div>
    )
}
export default Nav;
