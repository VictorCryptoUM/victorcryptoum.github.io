import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './index.module.css';
import React from 'react';
import Button from '../components/Utility/Button';

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Home - Go Blue Crypto</title>
                <meta name="description" content="Home" />
            </Head>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Go Blue Crypto</h1>
                    <p className={styles.info}>
                        Go Blue Crypto is the cryptography club at the
                        University of Michigan. We host meetings, round table
                        discussions, and more on both primitive and applied
                        cryptography as well as privacy topics. The club is
                        composed of students, alumni, and staff who are focused
                        on learning and using cryptography. Morals and ethics
                        are fundamental part of cryptography and what we do.
                    </p>
                    <div className={styles.buttons}>
                        <Button className={styles.button}>About</Button>
                        <Button className={styles.button}>Members</Button>
                        <Button className={styles.button}>Contact</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
