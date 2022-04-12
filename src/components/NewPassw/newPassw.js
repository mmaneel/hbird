import React from "react";
import '../NewPassw/newPassw.css';
 import LOGO from "../../assets/LOGO.png";
 import akar from "../../assets/akar.png"
    
    
const NewPassw=(props) =>{
    return(
        <div>
            <form id="login">
             <div className="loginFields" ref={props.containerRef}>
                 <button className="back"><img src={akar}  />  </button> 
            </div>

            <div className="logo">
                
               <h1>Oh! now i remember seeing you around let me 
                   help you </h1>
            </div>
            
            <div className="formGroup">
                <div className="formItem">
                    <input type={"text"} className="name" placeholder="New Password"/>

                </div>
                <div className="formItem">
                    <input type={"text"} className="name" placeholder="Confirmation Password"/>

                </div>
               

                
            </div>
            <div className="footer">
                <button className="loginBtn" >Reset Password</button>
            </div>
        
            
        </form>
    
            
       </div>

    )
}
    
export default NewPassw