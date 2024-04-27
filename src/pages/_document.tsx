import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#620063" />
          <meta property="og:title" content="PhilTech Academy" />
          <meta property="og:description" content="Aquire Digital Skills with PhilTech" />
          <meta property="og:image" content="../../public/favicon.ico" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
