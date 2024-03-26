import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <script src="https://kit.fontawesome.com/de5a5af81b.js" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="../styles/index.css" />
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      <meta name="theme-color" content="#620063" />
      <title>PhilTech Academy</title>
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
