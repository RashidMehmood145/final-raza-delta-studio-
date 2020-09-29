import Document,{Head,Main,NextScript} from "next/document";
import { ServerStyleSheet } from "styled-components";
import FavIcon from '../assets/zirconnext.png'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();    
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
    render() {
        return (
            <html lang="en">
                <Head>
                    <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="apple-touch-icon" href="/images/zirconnext.png"/>
                    <meta name="theme-color" content="#2560d4"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}