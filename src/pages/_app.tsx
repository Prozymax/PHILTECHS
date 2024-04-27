import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Image from 'next/image';
import '../styles/index.css'; // Import any global font styles

import bro from "../assets/img/codingBro.png";
import brain from "../assets/img/brain.png";
import portrait from "../assets/img/manPortrait.jpg";
import faq from '../assets/img/faq.png'
// Define your theme object
const theme = {
  // Add your theme properties here
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
