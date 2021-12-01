import * as React from 'react';
import styles from '../styles/Header.module.css'
import Menu from '../components/Menu'
import Link from 'next/link'


export default function Header() {
  return (
    <>
    <div className={styles.headerMain}>
        <Menu />
        <h1 className={styles.title}>
          <Link href="/">Windows of Wonder</Link>
        </h1>
    </div>
    </>
  );
}