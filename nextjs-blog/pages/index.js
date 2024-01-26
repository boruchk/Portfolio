import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import homeStyles from '../styles/Home.module.css';

// This is basically the homepage

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi there, thank you for visiting my portfolio!</p>
        <p>
          Here is a little bit about me:
        </p>
        <p>
          I am currently a student at NYU Tandon, chasing my career in the computer engineering field,
          with expertise in low level languages. I enjoy solving complex problems and creating efficient, 
           and maintainable software solutions.
        </p>

        <Link href="/posts/projects"> Read </Link> about some of the projects that I've worked on.
        <br></br>
        <br></br>
      
        </section>

        <section className={utilStyles.headingMd}>
        <h1>Work experience:</h1>
        - Bookkeeper, Classique Creations LLC, New York, NY
        <ul className={utilStyles.listItem}>
          <li >Managed accounts receivable and accounts payable for over 300 accounts daily</li>
          <li>Created daily, weekly, and monthly financial reports for the COO of the company</li>
        </ul>

        - Project Manager, Andora Systems LLC, Brooklyn, NY
        <ul className={utilStyles.listItem}>
          <li>Delivered administrative services such as Accounts Receivable and Payable for over 100 accounts</li>
          <li>Oversaw purchasing of materials and supplies for ongoing and upcoming projects worth over $5,000,000</li>
          <li>Communicated client needs for 200+ jobs and scheduling technicians with the required hardware</li>
          <li>Installed, troubleshot, and setup software of equipment on site; setting up and reconfiguring LANs with varying necessities on both Windows and Linux operating systems</li>
        </ul>
      </section>
      
    </Layout>
  );

}