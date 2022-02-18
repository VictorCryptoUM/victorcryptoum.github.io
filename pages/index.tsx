import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './index.module.css';

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home" />
            </Head>
            <h1 className={styles.comingSoon}>Coming Soon</h1>
        </Layout>
    );
};

export default Home;
