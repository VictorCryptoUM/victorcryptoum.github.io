import type {NextPage} from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './about.module.css';
import React from 'react';
import Image from "next/image";
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
                    <h1>Faculty Advisors</h1>
                    <img src={"/assets/halderman.jpeg"} style={{height: 600, width: 400}}></img>
                    <p style={{fontSize: 22}}>Dr. J. Alex Halderman</p>
                    <p style={{fontSize: 22}}>Professor of Computer Science and Engineering, Director of Computer
                        Security and Society</p>

                    <div className={styles.buttons}>
                        <Link
                            href={"https://jhalderm.com/"}>
                            <Button className={styles.button} style={{marginBottom: 40}}>Faculty Page</Button></Link>
                    </div>

                    <img src={"/assets/paul_grubbs.jpeg"} style={{height: 400, width: 400}}></img>
                    <p style={{fontSize: 22}}>Dr. Paul Grubbs</p>
                    <p style={{fontSize: 22}}>Assistant Professor in Electrical Engineering and Computer Science</p>
                    <div className={styles.buttons}>
                        <Link
                            href={"https://web.eecs.umich.edu/~paulgrub/"}>
                            <Button className={styles.button} style={{marginBottom: 40}}>Faculty Page</Button></Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
