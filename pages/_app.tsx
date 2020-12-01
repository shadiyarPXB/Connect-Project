import { BaseStyles, theme } from 'rimble-ui';
import { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';
import '../styles/globals.css';
import Document, { Html, Head, Main, NextScript } from "next/document"


//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const customTheme = {
    ...theme,
    fontSizes: [16, 18, 20, 22, 24, 30, 40, 64],
    breakpoints: ['36em', '48em', '62em', '75em'],
    fonts: {
        serif: 'athelas, georgia, times, serif',
        sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        heading: 'roc-grotesk, sans-serif;',
    },
    colors: {
        ...theme.colors,
        text: '#000000',
        textSecondary: '#fff',
        textTertiary: '#22453D',
        textGrey: '#ACACAC',
        hoverPrimary: '#162F2A',
        hoverSecondary: '#264E46',

        background: {
            primary: '#162f2a',
            primaryDeepLight: '#12463C',
            primarySemiLight: '#AFBEB7',
            primaryLight: '#D4DAD5',
            secondary: '#FFFEFA',
            secondarySemiDark: '#EDEDED',
            secondaryDark: '#264E46',
        },
    },
};

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={customTheme}>
            <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `[G-60P3V7HRBX]`
            }}
          />
        </Head>
            <BaseStyles>
                <Component {...pageProps} />
            </BaseStyles>
        </ThemeProvider>
    );
}

export default MyApp;
