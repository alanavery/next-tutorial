import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, incidunt veniam unde odio delectus corrupti, optio quas tempora est deserunt consequuntur voluptatibus eius blanditiis quaerat facilis dolorum dolor ea animi.</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, incidunt veniam unde odio delectus corrupti, optio quas tempora est deserunt consequuntur voluptatibus eius blanditiis quaerat facilis dolorum dolor ea animi.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
