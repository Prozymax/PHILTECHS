import { MobileNav, Span, FirstSection, 
          SecondSection, ThirdSection, FourthSection, FifthSection } from '../styles/Home.styled'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from 'next/link';
import bro from "../assets/img/codingBro.png";
import brain from "../assets/img/brain.png";
import portrait from "../assets/img/manPortrait.jpg";
import Image from 'next/image';
import { useEffect } from 'react';
import React, { useRef } from 'react';
import faq from '../assets/img/faq.png'
import { testFunc } from '../styles/Functions';
import '../../public/favicon.ico'
import '@fortawesome/fontawesome-free/css/all.css';
import 'typeface-nunito';






interface ListItem {
  content: string;
  iconClass: string;
}

const styles: React.CSSProperties = {
  padding: "8px 0% 0% 0%" , // Example margin value
  userSelect: "none",
  margin:"0px 0px 0px -20px"
};

 
 const listItem: ListItem = {
  content: "",
  iconClass: "fa-brands fa-think-peaks"
};
const IconList: ListItem ={
  content:"",
  iconClass:"fa-solid fa-code"
}
const IconList2: ListItem ={
  content:"",
  iconClass:"fa-solid fa-pen-nib",
}
const IconList3:ListItem ={
  content:"",
  iconClass:"fa-brands fa-uikit",
}
const IconList4:ListItem ={
  content:"",
  iconClass:"fa-solid fa-signature",
}
const IconList5:ListItem ={
  content:"",
  iconClass:"fa-solid fa-quote-left",
}
const IconList6:ListItem ={
  content:"",
  iconClass:"fa-solid fa-arrow-right",
}
const IconList7:ListItem ={
  content:"",
  iconClass:"fa-solid fa-arrow-left",
}


const Home = () => {
  useEffect(() => {
    // Select all elements with the class 'grid' and the id 'target'
    const grids = document.querySelectorAll('.grid');
    const targets = document.querySelectorAll('#target');
   
    // Loop through each grid element
    grids.forEach((grid, index) => {
      // Check if there is a corresponding target element for the current grid element
      const target = targets[index] as HTMLElement | undefined;
      
      if (target) {
        // Define event handlers for mouse enter and mouse leave events
        const handleMouseEnter = () => {
          target.style.color = 'white';
        };
  
        const handleMouseLeave = () => {
          target.style.color = 'purple';
        };
  
        // Add event listeners to the current grid element
        grid.addEventListener('mouseenter', handleMouseEnter);
        grid.addEventListener('mouseleave', handleMouseLeave);
  
        // Clean up event listeners when component unmounts
        return () => {
          grid.removeEventListener('mouseenter', handleMouseEnter);
          grid.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);
  

    const importedDivRef = useRef(null);
   

  return (
    <div style={styles}>
    <Header />

    {/* <MobileNav ref={importedDivRef}>

      <div className='main' >
        <section>
          <Link href='/'>Home</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </section>
        <Link href='/' className='enroll'> Enroll Now</Link>
      </div>

    </MobileNav> */}

    <FirstSection>
      <div className='firstDiv'>
      <h1>
        Acquire
         <span>
         Digital
          </span> <br/> 
          <span>
          Skills
            </span> With Philtechs.
      </h1>
      </div>

      <div className="secondDiv">
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, explicabo beatae molestias ullam mollitia asperiores reprehenderit vitae temporibus at vero eius eaque eum doloribus, dolorem omnis dolore. Quia, sit iusto.
        </article>
        <section>
        <Link href="/">Get Started</Link>
        <Link href="/contact">Contact Us</Link>
        </section>
      </div>
      <div className="imgContainer">
      <Image src={brain} alt="brain" className="img" />
      </div>
    </FirstSection>

    <SecondSection>
      <div className='firstDiv'>
      <Image src={bro} alt="brain" className="img" />
      </div>
      <div className='secondDiv'>
        <Span>WHY CHOOSE US</Span>
        <h2>We Impact  the Passion For Digital Skills</h2>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae, nemo nulla non ducimus exercitationem facere placeat delectus, eligendi consectetur omnis sint quae minus veniam dicta asperiores vero explicabo totam?
        </article>
        <section>
          <ul>
            <li><i className={`fa-brands ${listItem.iconClass}`}></i>Web Developement</li>
            <li><i className={`fa-brands ${listItem.iconClass}`}></i>Graphics Design</li>
            <li><i className={`fa-brands ${listItem.iconClass}`}></i>UI/UX Design</li>
            <li><i className={`fa-brands ${listItem.iconClass}`}></i>Content Writing</li>
          </ul>
        </section>

      </div>

    </SecondSection>


    <ThirdSection>
        <div className='firstDiv'>
        <Span>COURSES</Span>
        <h1>Feel The Desire For a Digital Skill.</h1>
        </div>
        <div className="secondDiv">

          <div className='grid'>
            <div className='counterGrid'>
            <i className={`fa-solid ${IconList.iconClass}`} id='target'></i>
            <h2>Web Developement</h2>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, in cum impedit distinctio
              </article>
            <Link href="/">Read More</Link>

            </div>
          </div>


          <div className='grid'>
            <div className='counterGrid'>
            <i className={`fa-solid ${IconList2.iconClass}`} id='target'></i>
            <h2>Graphics Design</h2>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, in cum impedit distinctio 
            </article>
            <Link href="/">Read More</Link>

            </div>
          </div>




          <div className='grid'>
            <div className='counterGrid'>
            <i className={`fa-brands ${IconList3.iconClass}`} id='target'></i>
            <h2>UI/UX Design</h2>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, in cum impedit distinctio
              
            </article>
            <Link href="/">Read More </Link>

            </div>
          </div>





          <div className='grid'>
            <div className='counterGrid'>
            <i className={`fa-solid ${IconList4.iconClass}`} id='target'></i>
            <h2>Content Writing</h2>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, in cum impedit distinctio
            </article>
            <Link href="/">Read More </Link>

            </div>
          </div>

        </div>

    </ThirdSection>
    <FourthSection>
      <div className="firstDiv">
        <div className="list">
          <div className="listItem">
          <h2 className='listHead' onClick={testFunc}>Why Do I need a  Digital Skill?</h2>
            <article className='listTarget'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente odit vitae itaque soluta ea id aliquid tempore impedit magni, commodi iure voluptatibus. Rem, magnam. Eius aliquam aspernatur similique nisi.
            </article>

            <div className="listItem">
            <h2 className='listHead' onClick={testFunc}>What are some examples of digital skills ? </h2>
            <article className='listTarget'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente odit vitae itaque soluta ea id aliquid tempore impedit magni, commodi iure voluptatibus. Rem, magnam. Eius aliquam aspernatur similique nisi.
            </article>
          </div>
    
          <div className="listItem">
            <h2 className='listHead' onClick={testFunc}>Do I need prior experience to learn digital skills ?</h2>
            <article className='listTarget'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente odit vitae itaque soluta ea id aliquid tempore impedit magni, commodi iure voluptatibus. Rem, magnam. Eius aliquam aspernatur similique nisi.
            </article>
          </div>

          <div className="listItem">
            <h2 className='listHead' onClick={testFunc}>How long does it take to learn digital skills ?</h2>
            <article className='listTarget'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente odit vitae itaque soluta ea id aliquid tempore impedit magni, commodi iure voluptatibus. Rem, magnam. Eius aliquam aspernatur similique nisi.
            </article>
          </div>

            <div className="listItem">
            <h2 className='listHead' onClick={testFunc}>Are there any specific digital skills in high demand ?</h2>
            <article className='listTarget'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente odit vitae itaque soluta ea id aliquid tempore impedit magni, commodi iure voluptatibus. Rem, magnam. Eius aliquam aspernatur similique nisi.
            </article>
          </div>

          <div className="listItem">
            <h2 className='listHead' onClick={testFunc}>Are digital skills only relevant for certain industries ?</h2>
            <article className='listTarget'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente odit vitae itaque soluta ea id aliquid tempore impedit magni, commodi iure voluptatibus. Rem, magnam. Eius aliquam aspernatur similique nisi.
            </article>
          </div>
          </div>
        </div>

      </div>

      <div className="secondDiv">
        <div className="caption">
          <Span onClick={testFunc}>F.A.Q.</Span>
          <h2>Most Trending and Popular Question</h2>
        </div>
        <div className="imgContainer">
        <Image src={faq} alt="faq" className="img" />
        </div>
      </div>
    </FourthSection>


    <FifthSection>
       <div className="firstDiv">
        <Span>TESTIMONIALS.</Span>
        <h1>Some Words From our Happy Students.</h1>
       </div>
       
       <div className="secondDiv">
  
          <div className="rollerItem">
            <section>
            <i className={`fa-solid ${IconList5.iconClass}`} id='target'></i>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid quasi quas deleniti, libero, non repellendus est ab dolore assumenda totam at saepe. Enim, dicta ipsa tempora distinctio quasi eius.
              </article>
            </section>
            <section>
              <figure>
              <Image src={portrait} alt="" />
              </figure>
              <article>
                <h3>Favour Amaechi</h3>
                <h4>Content Writer.</h4>
              </article>
            </section>
          </div>


          <div className="rollerItem">
            <section>
            <i className={`fa-solid ${IconList5.iconClass}`} id='target'></i>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid quasi quas deleniti, libero, non repellendus est ab dolore assumenda totam at saepe. Enim, dicta ipsa tempora distinctio quasi eius.
              </article>
            </section>
            <section>
              <figure>
              <Image src={portrait} alt="" />
              </figure>
              <article>
                <h3>Daniel anozie</h3>
                <h4>web Developer.</h4>
              </article>
            </section>
          </div>


          <div className="rollerItem">
            <section>
            <i className={`fa-solid ${IconList5.iconClass}`} id='target'></i>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid quasi quas deleniti, libero, non repellendus est ab dolore assumenda totam at saepe. Enim, dicta ipsa tempora distinctio quasi eius.
              </article>
            </section>
            <section>
              <figure>
              <Image src={portrait} alt=""  />
              </figure>
              <article>
                <h3>Onyebuhi Charlse</h3>
                <h4>UI/UX Designer.</h4>
              </article>
            </section>
          </div>

       </div>
       <div className="thirdDiv">
        <p><i className={`fa-solid ${IconList7.iconClass}`} id='target'></i></p>
        <p><i className={`fa-solid ${IconList6.iconClass}`} id='target'></i></p>
       </div>

    </FifthSection>
    <Footer />
    </div>
  );
};
export default Home;