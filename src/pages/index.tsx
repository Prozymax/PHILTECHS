import { FirstSection } from '../styles/Home.styled'
import Header from "@/components/Header/Header";
import Link from 'next/link';

const styles: React.CSSProperties = {
  paddingTop:50 // Example margin value
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
    </div>
  );
}
