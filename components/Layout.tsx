import React from 'react';
import styles from './Layout.module.css';
import NavBar from './NavBar';

const Layout: React.FunctionComponent = ({ children }) => (
    <div className={styles.container}>
        <div className={styles.navWrapper}>
            <NavBar />
        </div>
        <div className={styles.pageWrapper}>{children}</div>
    </div>
);
export default Layout;
