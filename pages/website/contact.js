import styles from '../../styles/Home.module.css'
import Head from 'next/head';


export default function Contact() {
  return (
    <>
      <Head >
        <title>
          Hi Contact
        </title>
        <meta name='description' content='hello world in contact' />

      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          Contact page!
        </main>

      </div>
    </>
  )
}
