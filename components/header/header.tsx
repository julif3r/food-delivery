import Image from 'next/image';
import React, { EventHandler, useState } from 'react';
import styles from '../../styles/Header.module.scss';


interface HeaderProps {
    input: string;
    setInput: (input: string) => void;
}

export default function Header(props: HeaderProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        props.setInput(value);
    }

    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.headerContainer}>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logo}>
                            <Image layout="fill" src="/logo.svg" />
                        </div>
                        <div className={styles.searchWrapper}>
                            <input type="text" value={props.input} onChange={handleChange} placeholder="Search" name="search" />
                            <div className={styles.inputSearchIcon}>
                                <Image layout="fill" src="/search.svg" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.menuWrapper}>
                        <div className={styles.menu}>
                            <ul>
                                <li>
                                    Restaurants
                                </li>
                                <li>
                                    Deals
                                </li>
                            </ul>
                        </div>
                        <div className={styles.orders}>
                            <span>My Orders</span>
                        </div>
                        <div className={styles.shopping}>
                            <div className={styles.shoppingIcon}>
                                <Image layout="fill" src="/shopping-bag.svg" />
                            </div>
                            <div className={styles.shoppingNumber}>
                                4
                            </div>
                        </div>
                        <div className={styles.profile}>
                            <div className={styles.profileImage}>
                                <Image layout="fill" src="/profile.png" />
                            </div>
                        </div>
                        <div className={styles.mobileMenuWrapper}>
                            <div className={styles.mobileMenu}>
                                <div className={styles.mobileMenuIcon}>
                                    <Image layout="fill" src="/menu.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


