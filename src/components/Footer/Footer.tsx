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
 iconClass:"fa-brands fa-whatsapp"
}
const tiktok:socialIcons ={
  content:"",
  iconClass:"fa-brands fa-tiktok"
}
const instagram:socilaIcons ={
  content:"",
  iconClass:"fa-brands fa-instagram"
}




const Footer: React.FC = () =>{
 return(

  <Main>
    <div className="mainSection">
      <div className="firstDiv">
         <section className="getInTouch">
          <FooterHeading>GET IN TOUCH</FooterHeading>
          <p>Omuwei, Igrwuta Port Harcourt Rivers State </p>
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
         <nav>

         <Link href="/"><i className={`fa-solid ${whatsapp.iconClass}`}  /></Link>
        <Link href="/"><i className={`fa-solid ${tiktok.iconClass}`}  /></Link>
        <Link href="/"><i className={`fa-solid ${instagram.iconClass}`}  /></Link>
         </nav>
      
        </section>
        <section className="subscribe">
         <FooterHeading>MORE ENQUIRIES</FooterHeading>
         <nav>

         <input type="email" placeholder="Email Address" />
         <Link href="/"> Enroll Now.</Link>

         </nav>

        </section>
      </div>
    </div>
              <section className="terms">
                <p>Copyright 2024 Phil
                  <span>Tech</span>
                      |   All Rights Reserved</p>
              </section>
  </Main>


 );
};
export default Footer;