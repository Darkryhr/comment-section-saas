import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
          <meta content='#ffffff' name='theme-color' />
          <meta content='#ffffff' name='msapplication-TileColor' />

          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com/'
            crossOrigin=''
          />
          <link
            rel='preconnect'
            href='https://cdn.usefathom.com'
            crossOrigin=''
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
