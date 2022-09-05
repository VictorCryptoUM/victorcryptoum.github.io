import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

interface NavItemProps {
    page: string;
}

const NavItem: React.FunctionComponent<NavItemProps> = ({ children, page }) => {
    const router = useRouter();
    return (
        <span className={styles.item}>
            <Link href={page}>
                <a
                    className={cn({
                        [styles.navItemActive]: page === router.pathname,
                    })}
                >
                    {children}
                </a>
            </Link>
        </span>
    );
};

const NavBar: React.FunctionComponent = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <a
                    href={"/"}>
                <img className={styles.logo} src={'/assets/logo.svg'}/></a>
                    <span>VictorCrypto</span>
            </div>
            <div onClick={() => setOpen(!open)} className={styles.hamburger}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <nav className={cn(styles.nav, { [styles.navActive]: open })}>
                <NavItem page={'/'}>Home</NavItem>
                <NavItem page={'/members'}>Members</NavItem>
                <NavItem page={'/about'}>About</NavItem>
            </nav>
        </div>
    );
};
export default NavBar;
