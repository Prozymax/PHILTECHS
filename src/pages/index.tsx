import { FirstSection, 
          SecondSection } from '../styles/Home.styled'
import Header from "@/components/Header/Header";
import Link from 'next/link';
import bro from "../assets/img/codingBro.png"
import Image from 'next/image';

const styles: React.CSSProperties = {
  paddingTop:8 // Example margin value
 };
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
    
    </FirstSection>

    <SecondSection>
      <div className='firstDiv'>
      <Image src={bro} alt="brain" className="img" />
      </div>
      <div className='secondDiv'>
        <span>WHY CHOOSE US</span>
        <h2>We Impact  the Passion For Digital Skills</h2>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae, nemo nulla non ducimus exercitationem facere placeat delectus, eligendi consectetur omnis sint quae minus veniam dicta asperiores vero explicabo totam?
        </article>
        <section>
          <ul>
            <li><i class="fa-brands fa-think-peaks"></i>Web Developement</li>
            <li><i class="fa-brands fa-think-peaks"></i>Graphics Design</li>
            <li><i class="fa-brands fa-think-peaks"></i>UI/UX Design</li>
            <li><i class="fa-brands fa-think-peaks"></i>Content Writing</li>
          </ul>
        </section>

      </div>

    </SecondSection>
    </div>
  );
}
