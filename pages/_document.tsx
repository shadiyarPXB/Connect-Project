import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const googleTrackingId = '';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    // static getInitialProps({ renderPage }) {
    //   const sheet = new ServerStyleSheet();
    //   const page = renderPage((App) => (props) =>
    //     sheet.collectStyles(<App {...props} />)
    //   );
    //   const styleTags = sheet.getStyleElement();
    //   return { ...page, styleTags };
    // }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="Connect Favicon" href="./favicon.ico" />
                    <title>
                        CONNECTx Project - An ecosystem with unstoppable
                        liquidity
                    </title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.typekit.net/zrp8rvq.css"
                    />
                    <script src="https://use.fontawesome.com/a4424c943f.js" />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=${YOUR_TRACKING_ID}"
                    ></script>
                    <script
                        async
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', ${googleTrackingId});`,
                        }}
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
