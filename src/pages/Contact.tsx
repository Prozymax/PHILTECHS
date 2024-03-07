import React from 'react';
import Header from '@/components/Header/Header';
const styles: React.CSSProperties = {
 paddingTop: 100,
 margin:"0px 0px 0px -10px"
};
const ContactPage: React.FC = () => {
  return (
    <div style={styles}>
     <Header />
     <h1>God Abeg</h1>
    </div>
  );
};

export default ContactPage;
