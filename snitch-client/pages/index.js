import Head from 'next/head'
import App from './home'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>React</title>
      </Head>
      <App />
      <main className={styles.main}>
      
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
