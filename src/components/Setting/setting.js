import React from "react";
import '../Setting/setting.css';
import profil from "../../assets/profil.png"
import camera from "../../assets/camera.png"
import pen from "../../assets/pen.png"
import Poly from "../../assets/Poly.png"
import Arrow from "../../assets/Arrow.png"

export const Setting = () => {
     return ( 
     <>
     <button  className="arw"><img className="arrow" src={Arrow}/></button>
        <div className="seting">
        
            <div className="formGroup1">
            
            <div className="profil">
            <img  className="profil-pic"src={profil}/>
                <button className="btn "><img src={camera}/></button>
                <h1>Kathryn Murphy</h1>
            </div>
            
            <div className="edit">
            <div id="bttn"></div> 
             
                <a href="#"  className=' btn-nav'>Edit Profil</a>
                <a href="#"  className=' btn-nav  '>Account Setting</a>
                <a  href="#" className=' btn-nav  '>Help</a>
                <a  href="#" className=' btn-nav  '>Log out</a>

                </div>

            </div>
            
            <div className="formGroup2">
                <div className="formItem">
                    <label>User Name :</label>
                    <div className="inpt">
                    <input type={"text"} className="name" placeholder="Kathryn Murphy"/>
                    <button className="icon1"><img  src={pen} /></button>
                    </div>
                     
                </div>
                
                <div className="formItem">
                    <label>Email :</label>
                    <div className="inpt">
                    <input type={"email"} className="name" placeholder="Kmurphy@gmail.com"/>
                    <button className="icon1"><img  src={pen} /></button> 

                    </div>
                    
                </div>
                <div className="formItem">
                    <label>Password</label>
                    <div className="inpt" >
                    <input type={"password"} className="name" placeholder="**********"/>
                    <button className="icon1"><img  src={pen} /></button>

                    </div>
                     
                </div>
                <div className="password">
                <img src={Poly}/>
                    <div className="formItem-passw">
                        <label>Password :</label>
                        <div className="inpt-passw" >
                            <input type={"password"} className="name" placeholder=""/>
                            
                        </div>
                    </div>
                    <div className="formItem-passw">
                        <label>New Password :</label>
                        <div className="inpt-passw" >
                            <input type={"password"} className="name" placeholder=""/>
                            
                        </div>
                    </div>
                    <div className="formItem-passw">
                        <label>Confirm Password :</label>
                        <div className="inpt-passw" >
                            <input type={"password"} className="name" placeholder=""/>
                        
                        </div>
                    </div>
                    
                    <div className="record">
                    <button>Record</button>
                    </div>

                </div>
            </div>
        </div>
     </>
     );
}
 

