import Link from "next/link";
import styles from '../../styles/Home.module.css'
import Head from 'next/head';
import Layout from "../components/layout";
import Image from 'next/image';

export default function Website() {
  return (
    <div className={styles.container}>
      <Head >
        <title>
          Hi website
        </title>
      </Head>
      <main className={styles.main}>
        Hello World!
        <Link href="website/contact">Click</Link>
        <Link
          href={{
            pathname: 'website/contact',
            query: { name: 'admin' },
          }}
        >
          OR Click
        </Link>
        <img className={styles.imgT} src="/1.jpg" />
      </main>
    </div>
  )
}

Website.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
