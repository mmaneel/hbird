import './index.css';
import React from "react";
import './index.css';
import LOGO from "../../assets/LOGO.png";
        import usern from "../../assets/usern.png";
        import passw from "../../assets/passw.png";
        import akar from "../../assets/akar.png";
        import fcb from "../../assets/fcb.png"
        import git from "../../assets/git.png"
        import google from "../../assets/google.png"

const LoginForm =(props)=>{
       return (
     <div>
                <form id="login">
                     <div className="loginFields">
                        <div className="button-box " ref={props.containerRef}>
                            <div id="bttn"></div>  
                            <button className="btn" >Login</button>
                            <button className="btn"  >Register</button>
                        </div>
                        <button className="back"><img src={akar}  />  </button> 
                    </div>
        
                    <div className="logo">
                        <img  src={LOGO} />
                        <h1>Welcome</h1>
                        <p>Log in to your account to continue </p>
                    </div>
                    
                    <div className="formGroup">
                        <div className="formItem">
                            <img className="icon1" src={usern} />
                            <input type={"text"} className="name" placeholder="User Name"/>
        
                        </div>
                        <div className="formItem">
                             <img  className="icon2" src={passw} />
                             <input type={"password"} className="name" placeholder="Password"/>
        
                        </div>
                        
                        <a href="#" className="forgotPass">Forgot your password?</a>
                    </div>
                    <div className="footer">
                        <button className="loginBtn" >Log in</button>
                    </div>
                    <div className="connect">
                        <p>
                            Or connect with
                        </p>
                        <div className="sclm">
                            <a href="https://fr-fr.facebook.com/" className="bac"><img src={fcb}  />  </a>
                            <a  href="https://github.com/" className="bac"><img src={git}  />  </a>
                            <a  href ="#" className="bac"><img src={google}  />  </a>
                        </div>
        
                    </div>
                    
                </form>
        
                
           </div>

    )
}
export default LoginForm