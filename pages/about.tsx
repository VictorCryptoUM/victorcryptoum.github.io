import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './about.module.css';
import React from 'react';

const About: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>About - VictorCrypto</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.content}>
                    Coming Soon...
                </div>
            </div>
        </Layout>
    );
};

export default About;
