import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Authentication from './../components/Authentication'; //       <Authentication isAuth={isAuth} />
import Main from "../components/main";
import { useRouter } from "next/router";
import { Web3AuthProvider } from "../context/web3auth";
import { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";

export default function Home(props) {
  const router = useRouter();
  const { isAuth, role } = props;


  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Crack the NFT Password" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid columns={1}>
        <main className={styles.main}>
        <Image width={400} height={16} src={'/logo.png'} />

          <div className={styles.description}>
            Support Meaningful Campaings to grow the inifinite gardens <br />
          </div>


          <h1 className={styles.title}>The Gardening Macaques</h1>
          <div className={styles.description}>
          Gamifying donations through NFTs</div>
          <Image width={400} height={16} src={'/bookLogoII.png'} />
          <br></br>
          <br></br>

          <h1 className={styles.title}>Benefits</h1>
          <div className={styles.description}>
          <br></br>

            <div className={'max-w-4xl'}>
            
            </div>
            For each donation drive each donor receives a random NFT specific to that drive.</div>
            <br></br>
            <br></br>
        </main>
      </SimpleGrid>
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



/*
          <h1 className={styles.title}>The Gardens Macaquesx</h1>

*/