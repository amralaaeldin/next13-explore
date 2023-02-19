import Header from './header';
import Footer from './footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head >
        <title>
          Hi website
        </title>
        <meta name='description' content='hello world' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}