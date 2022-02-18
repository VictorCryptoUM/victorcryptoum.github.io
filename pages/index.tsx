import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './index.module.css';

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Home - Crypto At UMich</title>
                <meta name="description" content="Home" />
            </Head>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome</h1>
                <p className={styles.info}>
                    Cryptography At UMich is cryptography club at the University
                    of Michigan. We host meetings, round table discussions, and
                    more on both primitive and applied cryptography as well as
                    privacy topics. The club is composed of students, alumni,
                    and staff who are focused on learning and using
                    cryptography. Morals and ethics are fundamental part of
                    cryptography and what we do.
                </p>
            </div>
        </Layout>
    );
};

export default Home;
