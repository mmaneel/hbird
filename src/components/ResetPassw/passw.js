import React from "react";
import '../ResetPassw/passw.css';
 import LOGO from "../../assets/LOGO.png";
 import akar from "../../assets/akar.png"
    
    
const ResetPassw=(props) =>{
    return(
        <div>
            <form id="login">
             <div className="loginFields" ref={props.containerRef}>
                 <button className="back"><img src={akar}  />  </button> 
            </div>

            <div className="logo">
                
               <div className="h"><h1>Oops...</h1></div> 
               <div className="h"><h1>How do i know that's you? </h1></div> 
                <div className="p"><p>i send a reset code to  ****@gmail.com </p></div>
                <p>Enter code to reset password </p>
            </div>
            
            <div className="formGroup">
                <div className="formItem">
                    <input type={"text"} className="name" placeholder="Confirmation Code"/>

                </div>
               
<a href="#" className="forgotPass">Didn't receive a code?</a>
                
            </div>
            <div className="footer">
                <button className="loginBtn" >Submit</button>
            </div>
        
            
        </form>
    
            
       </div>

    )
}
    
export default ResetPassw