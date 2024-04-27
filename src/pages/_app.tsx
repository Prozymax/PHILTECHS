import type { AppProps } from 'next/app';
import '../styles/index.css'; // Import any global font styles

export default function App({ Component, pageProps }: AppProps) {
  return (
   
           <Component {...pageProps} />
   
  );
}
