// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import  { Main, Section, Nav, MobileHeader} from './Header.styled';
import logo from '../../assets/img/logo.png';

interface ListItem {
  content: string;
  iconClass: string;
}

const bars: ListItem ={
  content:"",
  iconClass:"fa-solid fa-bars"
}

const Header: React.FC = () => {


  return (
    <>
    
    
    <Main>
      <Section>
        <Image src={logo} alt="Logo" className="img" />
        <h1 className='logoText'><span>Phil</span>techs.</h1>
      </Section>
      <Nav>
      <Link href="/">Home</Link>
      <Link href="/">About</Link>
      <Link href="/Contact">Contact</Link>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/blog">Blog</a>
      <a href="/enrollment">Enrollment</a> */}
      </Nav>
      <Link href="/" className='lastLink'>Enroll Now</Link>
    </Main>

    <MobileHeader> 
     <section>
        <Image src={logo} alt="Logo" className="img" />
        <h1 className='logoText'><span>Phil</span>techs.</h1>
      </section>

    <section>
    <i className={`fa-solid ${bars.iconClass}`} />
    </section>
    </MobileHeader>

   
      </>
  );
};

export default Header;
