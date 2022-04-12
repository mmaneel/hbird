import React from "react";
import '../TextMesg/textmsg.css';
import profil from "../../assets/profil.png"
import akar from "../../assets/akar.png"
import send from "../../assets/send.png"


export const TextMesg = () => {
     return ( 
     <>
    
        <div className="Msg">
        <div className="user">
           <div className="profil">
           <img className="user-prfl" src={profil} />
            <h1>Kathryn Murphy</h1>
            </div> 
            <button className="back"><img src={akar}  />  </button>

        </div>
        <div className="content">
        <div className="formItem-1">
            <img className="content-prfl" src={profil} />
            <div><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed </p></div>
             </div>

             <div className="formItem-2">
            <div><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed </p></div>
             </div>
             <div className="formItem-2">
            <div><p>Lorem ipsum dolor sit amet,  </p></div>
             </div>
                     
         </div>
         <div className="send-msg">
        <div className="formItem-send">
                     
                     <input type={"text"} className="name" placeholder="Aa"/>
                     <button><img  className="send" src={send} /></button>

                </div>

        </div>

        </div>
        
            
      
     </>
     );
}
 