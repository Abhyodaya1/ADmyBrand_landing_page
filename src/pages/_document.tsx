// /src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Boost conversions by 300% with our AI-powered marketing intelligence platform. Advanced analytics, automated campaigns, and smart targeting for modern businesses."
        />
        <meta name="author" content="ADmyBRAND AI" />
        <meta
          name="keywords"
          content="AI marketing, marketing automation, digital marketing, AI analytics, campaign optimization"
        />
        <meta
          property="og:title"
          content="ADmyBRAND AI Suite - Transform Your Marketing with AI"
        />
        <meta
          property="og:description"
          content="Boost conversions by 300% with our AI-powered marketing intelligence platform. Advanced analytics, automated campaigns, and smart targeting for modern businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/opengraph-image-p98pqg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lovable_dev" />
        <meta name="twitter:image" content="/images/opengraph-image-p98pqg.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}