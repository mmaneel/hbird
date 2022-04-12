import React from "react";
import '../ConfirmationCode/code.css';
 import LOGO from "../../assets/LOGO.png";
 import akar from "../../assets/akar.png"
    
    
const ConfirmationCode=(props) =>{
    return(
        <div>
            <form id="login">
             <div className="loginFields">
                <div className="button-box " ref={props.containerRef}>
                    <div id="bttn"></div>  
                    <button className="btn">Login</button>
                    <button className="btn" >Register</button>
                </div>
                <button className="back"><img src={akar}  />  </button> 
            </div>

            <div className="logo">
                
               <div className="h"><h1>Thank you for choosing us</h1></div> 
                <div className="p"><p>We send a confirmation code to  ****@gmail.com </p></div>
                <p>Enter code to confirm email </p>
            </div>
            
            <div className="formGroup">
                <div className="formItem">
                    <input type={"text"} className="name" placeholder="Confirmation Code"/>

                </div>
               
                
                <a href="#" className="forgotPass">Didn't receive a code?</a>
                <a href="#" className="forgotPass">confirm later</a>
            </div>
            <div className="footer">
                <button className="loginBtn" >Confirm</button>
            </div>
        
            
        </form>
    
            
       </div>

    )
}
    
export default ConfirmationCode