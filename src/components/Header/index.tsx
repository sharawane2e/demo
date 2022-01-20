import React from "react";

interface Props {
  onClick:()=>void
}

const Header = (props: Props) => {
  
  return (
    <header>
        <div className="toggleIcon" onClick={props.onClick}></div>
        <div className = "icons">
        <a href = "#" className="emailIcon">
            <div className = "notBtn">
                <div className = "number">.</div>
            </div>
        </a>
        <a href = "#" className="notification">
            <div className = "notBtn">
                <div className = "number">.</div>
            </div>
        </a>
        <a href = "#" className="userlogin">
            <span className="userIcon"></span>
            <span className="userName">User</span>
        </a>
        </div>
        
    </header>
  );
};

export default Header;
