import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#620063" />
          <meta property="og:title" content="PhilTech Academy" />
          <meta property="og:description" content="Acquire Digital Skills with PhilTech" />
          {/* Update the content attribute to point to the correct URL of the image */}
          <meta property="og:image" content="https://example.com/path/to/image.jpg" />
          <meta property="og:url" content="https://example.com" />
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
