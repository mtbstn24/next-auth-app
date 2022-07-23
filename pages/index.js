import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Component from '../components/login-btn';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next Auth App
        </h1>

        <p className={styles.description}>
          This is a demostration of using NextAuth.js for User Authentication.
        </p>

        <h3> Sign in using your email </h3>

        <div className={styles.grid}>
          <a href="/api/auth/signin" className={styles.card}>
            <h2> Sign In &rarr; </h2>
          </a>
          {/* <a href="#" className={styles.card}>
            <h2>Sign In &rarr;</h2>
          </a>
          <a href="#" className={styles.card}>
            <h2>GitHub &rarr;</h2>
          </a>
          <a href="#" className={styles.card}>
            <h2>Twitter &rarr;</h2>
          </a>
          <a href="#" className={styles.card}>
            <h2>OAuth &rarr;</h2>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}