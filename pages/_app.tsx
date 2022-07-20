import './globals.css';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
    return <><Component {...pageProps} /><NextNprogress
        color={'#f2ca45'}
        options={{ showSpinner: false }}
        stopDelayMs={200}
        height={3}
    /></>;
}

export default MyApp;
