import type {NextPage} from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './about.module.css';
import React from 'react';
import Link from "next/link";
import Button from "../components/Utility/Button";

const About: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>About - VictorCrypto</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/*<h1>Faculty Advisors</h1>
                    <img src={"/assets/halderman.jpeg"} className={styles.image}></img>
                    <h2>Dr. J. Alex Halderman</h2>
                    <p>Professor of Computer Science and Engineering, Director of Computer
                        Security and Society</p>

                    <div>
                        <a
                            href={"https://jhalderm.com/"} target={"_blank"} rel="noreferrer">
                            <Button>Faculty Page</Button></a>
                    </div>
                    <img src={"/assets/grubbs.jpeg"} className={styles.image}></img>
                    <h2>Dr. Paul Grubbs</h2>
                    <p>Assistant Professor in Electrical Engineering and Computer Science</p>
                    <div>
                        <a
                            href={"https://web.eecs.umich.edu/~paulgrub/"}  target={"_blank"} rel="noreferrer">
                            <Button>Faculty Page</Button></a>
                    </div>*/}
                    Coming Soon...
                </div>
            </div>
        </Layout>
    );
};

export default About;
