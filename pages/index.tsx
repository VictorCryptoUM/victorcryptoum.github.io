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
                    <img src={"assets/logo.svg"} style={{height: 300}}></img>
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
                            Mason Hall from 6:00PM - 7:00PM. Fill out our
                            interest form to be notified of future meetings and events.</p>
                        <div className={styles.buttons}>
                            <Link
                                href={"https://docs.google.com/forms/u/1/d/e/1FAIpQLScWOMJq70lezh4zVajD9T_jKBVn4xHe4_8VhCE-6IPHwpgtnw/viewform?usp=send_form"}>
                                <Button className={styles.button}>Interest Form</Button></Link>
                            <Link href={"https://discord.gg/8veVfTF8EQ"}>
                                <Button className={styles.button}>Discord</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
