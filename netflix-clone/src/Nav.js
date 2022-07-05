import React, { useState, useEffect } from "react";
import './Nav.css';
function Nav(){
    const [show, handleShow] = useState(false);
    useEffect(()=>{

      window.addEventListener("scroll", () => {
        if(window.scrollY>100){
            handleShow(true);
        }else handleShow(false);
    });
      return () => {
        //window.removeEventListener("scroll", scrollBy);
      };
       
    }, []);
    


    return (
    <div className={`nav ${show  &&  "nav__black"}`}>
    <img
     className="nav__logo"
      
      src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
      alt="netflix Logo"
      />
      <img
     className="nav__avatar"
     
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      alt="netflix Logo"
      />
    </div>
)
}

export default Nav;