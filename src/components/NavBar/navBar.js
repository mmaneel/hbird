import React from "react";
import LOGO from "../../assets/LOGO.png";
import profil from "../../assets/profil.png"
import notification from "../../assets/notification.png"
import Pol from "../../assets/Pol.png"
import rech from "../../assets/rech.png"
import '../NavBar/navBar.css';
import splash from "../../assets/splash.png"
import pic1 from "../../assets/pic1.png"


export const NavBar = () => {

    
    
    return ( 
        <>
        <div className="NavBar">
            <a href='#' className="Logo">
                <img src={LOGO} alt="" />
            </a>
            <div className="formItem">
                     <img  className="rech" src={rech} />
                     <input type={"text"} className="name" placeholder="Research"/>

                </div>
            
               
            <div className="navigations">
                <button className='btn btn-nav btn-nav-active'>Home</button>
                <button className='btn btn-nav'>About</button>
                <button className='btn btn-nav  '>Roadmaps</button>
                <button className='btn btn-nav  '>Forum</button>
            </div>
            <div className="profil">
            <button className="btn "><img src={notification}/></button>
                <a  href="#" className="profil-pic"><img src={profil}/></a>
                <button className="btn "><img src={Pol}/></button>
            </div>
        </div>
        <div className="line"></div>
        <div className="categories">
                <a href="#" className='btn btn-nav btn-nav-active'>All categories</a>
                <a href="#"  className='btn btn-nav'>Network</a>
                <a href="#"  className='btn btn-nav  '>Web Development</a>
                <a  href="#" className='btn btn-nav  '>Design</a>
        </div>
            
        <div className='IntroPage'>
            <div className="text">
                <img src={splash} alt="" className="splash" />
                <div className="H"><h1>Never get lost again when studying </h1></div>

            </div>
            <img className="pic" src={pic1}/>
    
        </div>
        <div className="Roadmap">
            <h1>Roadmaps</h1>
            <div className="crs1">

            </div>

        </div>
        </>
     );
}
 
