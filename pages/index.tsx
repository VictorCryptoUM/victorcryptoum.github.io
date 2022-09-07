import type {NextPage} from 'next';
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
                <meta name="description" content="Home"/>
            </Head>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>VictorCrypto</h1>
                    <p className={styles.info}>
                        VictorCrypto is the cryptography club at the
                        University of Michigan. We host meetings, round table
                        discussions, and more on both primitive and applied
                        cryptography as well as privacy topics. The club is
                        composed of students and staff who are focused
                        on learning and using cryptography.
                    </p>
                    <div className={styles.buttons}>
                        <Link href={"/members"} passHref><Button className={styles.button}>Members</Button></Link>
                        <Link href={"/about"} passHref><Button className={styles.button}>About</Button></Link>
                    </div>
                    <div style={{marginBottom: 50}}>
                        <h3 className={styles.title} style={{marginTop: 60}}>Get Involved</h3>
                        <p className={styles.contact}>Our first meeting will be held on Thursday, 9/22 in Room 2306,
                            Mason Hall from 6:00PM - 7:00PM. Join our
                            Discord to be notified of future meetings and events.</p>
                        <div className={styles.buttons}>
                            <a target={"_blank"} href={" https://discord.gg/Htb4GeqCyp"} rel="noreferrer">
                                <Button className={styles.button}>Discord</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
