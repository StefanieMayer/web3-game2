import PixiCanvas from '../components/PixiCanvas.js'
import styles from "../styles/Home.module.css";
import Authentication from "../components/Authentication";
import Head from "next/head";

export default function game(props){
    const { isAuth, role } = props;
    return(
        <div className={styles.container}>
            <Authentication isAuth={isAuth} />
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcjjjhome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <div><PixiCanvas/></div>
            </main>
        </div>
                )
}