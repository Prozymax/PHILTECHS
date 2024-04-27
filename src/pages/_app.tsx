import type { AppProps } from 'next/app';
import '../styles/index.css'; // Import any global font styles
import '../styles/Home.styled';
import Home from '../pages/index';
export default function App({ pageProps }: AppProps) {
  return (
   
           <Home {...pageProps} />
   
  );
}
