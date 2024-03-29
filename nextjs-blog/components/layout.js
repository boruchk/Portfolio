import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SideNav from './SideNav';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import 'bootstrap/dist/css/bootstrap.css'

const name = 'Boruch Khazanovich';
const sideNavName = 'Boruch Khazanovich Computer engineering student';
export const siteTitle = "Boruch's Portfolio with Next.js";

export default function Layout({ children, home }) {
  let items = [
    'Home',
    'Experience',
    'Projects',
    'Skills',
    'Education',
    'Contact',
    'Resume'
  ]

  return (
    <>
      <div>
        <SideNav items={items}> </SideNav>
      </div>
        <Head>
          <link rel="icon" href="/images/compchip.jpeg" />
        </Head>
        <div>
        <header className={styles.header}>
          {home ? (
            <>
              
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </>
  );
}