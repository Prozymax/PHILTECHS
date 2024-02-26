import { Span, FirstSection, 
          SecondSection, ThirdSection } from '../styles/Home.styled'
import Header from "@/components/Header/Header";
import Link from 'next/link';
import bro from "../assets/img/codingBro.png";
import brain from "../assets/img/brain.png";
import Image from 'next/image';


interface ListItem {
  content: string;
  iconClass: string;
}

const styles: React.CSSProperties = {
  paddingTop:8 // Example margin value
 };
 
 const listItem: ListItem = {
  content: "",
  iconClass: "fa-brands fa-think-peaks"
};
const IconList: ListItem ={
  content:"",
  iconClass:"fa-solid fa-code"
}

export default function Home() {
  return (
    <div style={styles}>
    <Header />
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
            <i className={`fa-solid ${IconList.iconClass}`}></i>
            <h2>Web Developement</h2>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, in cum impedit distinctio
              </article>
            <Link href="/">Read More</Link>

            </div>
          </div>


          <div className='grid'>
            <div className='counterGrid'>
            <i className={`fa-solid ${IconList.iconClass}`}></i>
            <h2>Graphics Design</h2>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, in cum impedit distinctio 
            </article>
            <Link href="/">Read More</Link>

            </div>
          </div>




          <div className='grid'>
            <div className='counterGrid'>
            <i className={`fa-solid ${IconList.iconClass}`}></i>
            <h2>UI/UX Design</h2>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, in cum impedit distinctio
              
            </article>
            <Link href="/">Read More </Link>

            </div>
          </div>





          <div className='grid'>
            <div className='counterGrid'>
            <i className={`fa-solid ${IconList.iconClass}`}></i>
            <h2>Content Writing</h2>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, in cum impedit distinctio
            </article>
            <Link href="/">Read More </Link>

            </div>
          </div>

        </div>

    </ThirdSection>
    </div>
  );
}
