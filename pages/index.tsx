import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './index.module.css';
import React from 'react';
import Button from '../components/Utility/Button';
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Home - VictorCrypto</title>
                <meta name="description" content="Home" />
            </Head>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>VictorCrypto Crypto</h1>
                    <p className={styles.info}>
                        VictorCrypto is the cryptography club at the
                        University of Michigan. We host meetings, round table
                        discussions, and more on both primitive and applied
                        cryptography as well as privacy topics. The club is
                        composed of students and staff who are focused
                        on learning and using cryptography.
                    </p>
                    <div className={styles.buttons}>
                        <Link href={"/about"} passHref><Button className={styles.button}>About</Button></Link>
                        <Link href={"/members"} passHref><Button className={styles.button}>Members</Button></Link>
                        <Link href={"/contact"} passHref><Button className={styles.button}>Contact</Button></Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
