import React from "react";
import Link from 'next/link';

import {
  Main, FooterHeading
} from "./Footer.styled"



interface socialIcons {
 content: string;
 iconClass: string;
}

const whatsapp:socialIcons ={
 content:"",
 iconClass:"fa-solid fa-code"
}




const Footer: React.FC = () =>{
 return(

  <Main>
    <div className="mainSection">
      <div className="firstDiv">
         <section className="getInTouch">
          <FooterHeading>GET IN TOUCH</FooterHeading>
         <Link href="/">philltech@gmail.com</Link>
         <Link href="/">+234-812-223-066</Link>
         </section>
         <section className="info">
          <FooterHeading>INFORMATION</FooterHeading>
            <nav className="firstList">
               <Link href="/">About Us</Link>
               <Link href="/">Blog</Link>
               <Link href="/">F.A.Q</Link>
            </nav>
         </section>
      </div>
      <div className="secondDiv">
        <section className="followUs">
         <FooterHeading>FOLLOW US</FooterHeading>
        <p><i className={`fa-solid ${whatsapp.iconClass}`} id='target'></i></p>
        <p><i className={`fa-solid ${whatsapp.iconClass}`} id='target'></i></p>
        </section>
        <section className="subscribe">
         <FooterHeading>MORE ENQUIRIES</FooterHeading>
         <input type="button" placeholder="Email Address" />
         <Link href="/"> Enroll Now.</Link>

        </section>
      </div>
    </div>
              <section className="terms">
                <p>Copyright 2024 Phill
                  <span>Tech</span>
                   | All Rights Reserved</p>
              </section>
  </Main>


 );
};
export default Footer;