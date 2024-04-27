import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../styles/index.css'; // Import any global font styles

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
