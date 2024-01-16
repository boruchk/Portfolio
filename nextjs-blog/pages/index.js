import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

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
          I am currently a student at NYU Tandon, chasing my career in the computer engineering field.
          I'm a passionate software engineer with expertise in low level languages. I enjoy solving complex problems and creating efficient, scalable, and maintainable software solutions.
        </p>
        
        <dl>
            <dt>-- BOOKKEEPER, CLASSIQUE CREATIONS LLC, New York, NY </dt>
            <dd>Managed accounts receivable and accounts payable for over 300 accounts daily</dd>
            <dd>Created daily, weekly, and monthly financial reports for the COO of the company</dd>
            <dt>-- PROJECT MANAGER, ANDORA SYSTEMS LLC, Brooklyn, NY</dt>
            <dd>Delivered administrative services such as Accounts Receivable and Payable for over 100 accounts</dd>
            <dd>Oversaw purchasing of materials and supplies for ongoing and upcoming projects worth over $500,000</dd>
            <dd>Communicated client needs for 200+ jobs and scheduling technicians with the required hardware</dd>
            <dd>Installed, troubleshot, and setup software of equipment on site; setting up and reconfiguring LANs with varying necessities on both Windows and Linux operating systems</dd>
        </dl>
      </section>
      Read more about some of the projects that I've worked on<Link href="/posts/projects"> here </Link>
    </Layout>
  );

}