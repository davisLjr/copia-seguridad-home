// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Agradecimiento a Neitrys Barrera, con su ayuda puedo desarrollar paginas web." />
          <meta name="keywords" content="Neitrys Barrera, información, enseñanza, profesora, neitrys, neitrys barrera" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
            rel="stylesheet"
          />
        </Head>
        <body>
          <h1 style={{ opacity: 0, height: '1px' }} >Neitrys Barrera</h1>
          <Main />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            // @ts-ignore
            strategy="beforeInteractive"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            // @ts-ignore
            strategy="beforeInteractive"
          />
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            // @ts-ignore
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
