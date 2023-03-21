import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Info: NextPage = () => {
  return (
    <div className={styles.container}>
            <Head>
      <title>Zentaurios NFTs - Whitelist</title>
        <meta name="description"
          content="Zentaurios Legacy NFTs are access tokens to the Web3 Content Creator Community. #Web3Community #NFTCommunity #Zentauria #ZentauriosNFTS #PolygonNFTs"
        />
        <meta property='og:title' content={"Zentaurios NFTs - Whitelist"} />
        <meta property='og:image' content={"/zentauria-sample.png"} />
        <meta property='og:description' content="Zentaurios Legacy NFTs are access tokens to the Web3 Content Creator Community. #Web3Community #NFTCommunity #Zentauria #Zentaurios" />
        <meta property='og:url' content="https://legacy.zentaurios.app/whitelist" />
        <meta property="fb:app_id" content="784086316061416" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/zentauria-sample.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}> 
          Whitelist
        </h1>
        <h2 style={{textAlign: "center"}}>
            This page is to apply to the Zentaurios Legacy NFT WhiteList
        </h2>
        <p style={{textAlign: "center"}}>
            Fill out the form to join the Whitelist. WhiteList will run in a few phases before open minting. NFTS will be available on the marketplaces throughout.
        </p>
        <p>Current whitelist minting date: March 30, 2023</p>
        <p>If you wish to take part in the referral system:</p>
            <ul>
                <li>Include your Twitter handle</li>
                <li>The @ is not neccessary but is not problematic</li>
                <li>Twitter handles and wallet addresses will never be public together</li>
                <li>10% of sale to any DOCUMENTED referral</li>
                <li>Referred buyer MUST INCLUDE the Twitter handle of the referrer</li>
                <li>Your Twitter handle must have an associated wallet address</li>
                <li>You cannot refer yourself</li>
                <li>Airdrops are not automatic nor immediate - aiming for within 24 hours</li>
                <li>User caused mistakes will not be fixed. Referrals are an added benefit and cannot become a part time job.</li>
            </ul>
        <p>Read the <Link href="/">Legacy Homepage</Link> and associated links prior to purchasing.</p>
        <Link href="https://forms.gle/GsExHcganbZNUAbt7"><button style={{marginTop: "20px", marginBottom: "50px"}}>Whitelist Form</button></Link>
      </main>
    </div>
  );
};

export default Info;