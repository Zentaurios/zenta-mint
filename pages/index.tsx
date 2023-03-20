import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
      <title>Zentaurios NFTs - Web3 Community</title>
        <meta name="description"
          content="Zentaurios Legacy NFTs are access tokens to the Web3 Content Creator Community. #Web3Community #NFTCommunity #Zentauria #ZentauriosNFTS #PolygonNFTs"
        />
        <meta property='og:title' content={"Zentaurios NFTs - Web3 Community"} />
        <meta property='og:image' content={"/zentauria-sample.png"} />
        <meta property='og:description' content="Zentaurios Legacy NFTs are access tokens to the Web3 Content Creator Community. #Web3Community #NFTCommunity #Zentauria #Zentaurios" />
        <meta property='og:url' content="https://legacy.zentaurios.app/" />
        <meta property="fb:app_id" content="784086316061416" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={styles.main} style={{ textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", textAlign: "center", flexWrap: 'wrap', justifyContent: 'space-around', marginLeft: 'auto', marginRight: 'auto', maxWidth: "96vw", marginBottom: "40px" }}>
          <h1 className={styles.title} style={{ marginBottom: "10px" }}>
            Zentaurios Legacy NFTs
          </h1>
          <div style={{ maxHeight: "200px", overflow: "hidden" }}>
            <Image
              alt="Zentaurios Legacy NFT Banner on OpenSea #Zentaurios"
              src="/zentaurios-opensea-banner.png"
              width={800}
              height={200}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>Zentaurios Legacy NFTs are access tokens to the Web3 Content Creator Community</h2>
            <p>The goal of the Web3 Content Creator Community is to educate and onboard people into Web3 and NFTs through quality content creation and distribution. By not focusing on hype but highlighting community, utility, and financial benefits of Web3 and content creation, Zentaurios seeks to bring people into Web3 not because it is new technology but because it useful technology.</p>
            <h2>Utilities</h2>

            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-around', marginLeft: 'auto', marginRight: 'auto' }}>
              <div style={{ display: "flex", flexDirection: "column", minWidth: "200px" }}>
                <h3>Zentaurios</h3>
                <p>Full access to Zentaurios.app</p>
                <p>All posts to Zentaurios are shared to social media. Articles, Media, Events, and WhitePapers.</p>
                <p>These utilities are not currently token gated but lifetime access is guaranteed by owning two Legacy NFTs.</p>
                <p>The amount of NFTs was set to cover years of maintanence but also to have a 100% verified user base.</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", minWidth: "200px" }}>
                <h3>Token Gated Communities</h3>
                <p>Holders of two Legacy NFTs get their own token gated community.</p>
                <p>This is an ideal setting for sharing private newsletters, educational resources, or consulting meetings.</p>
                <p>Your community is token gated with your NFTS!</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", minWidth: "200px" }}>
                <h3>Future Utilities</h3>
                <p>First access and Beta testing for any future Zentaurios Utilities. Mini roadmap below:</p>
                <p>Short form video content ...think TikTok</p>
                <p>Long form, creator monetized video content</p>
                <p>Web3 Educational Platform, educator monetization</p>
              </div>
            </div>

            <h2>Support</h2>
            <p>Zentaurios is not and has never been an NFT project. Zentaurios is a Web3 business. While the value of the NFTs could rise with the value of the utilities it offers, the focus of Zentaurios is to allow Web3 brands, people, and communities to grow with Zentaurios.</p>
            <p>Financial contributions to Zentaurios through the form of NFTs are a way to return support through utilities and ways not mentioned yet.</p>
            <p>However, NFT and Web3 Communities are the highlight of NFT and Web3 Projects. While Zentaurios is a Web3 Business, there is no doubt Zentaurios wants to build and reward Web3 Community.</p>
            <p>When you choose to support Zentaurios, you are supporting a small business, a Web3 community, but also you support yourself, your content, and the brand that you choose to grow through Zentaurios.</p>

            <h2>DYOR</h2>
            <p>Part of the purpose of Zentaurios is to streamline the ability of interested parties to research projects on Zentaurios. So you can bet Zentaurios has a wealth of information for anyone interested in purchasing an NFT.</p>
            <p>Before going to a marketplace or minting an NFT, please:</p>
            <p>Visit the <Link href="https://zentaurios.app/profile/zentaurios" target="_blank">Zentaurios Profile</Link></p>
            <p>Read the blogs</p>
            <p>Check out the <Link href="https://zentaurios.app/links/zentaurios" target="_blank">Zentaurios socials</Link></p>
            <p>Read the <Link href="https://zentaurios.app/white-paper/zentaurios" target="_blank">Zentaurios WhitePaper</Link></p>
            <p>Check the <Link href="/info">NFT Info Page</Link></p>
            <p>Check out the doxxed <Link href="/team">Zentaurios Team Page</Link></p>
            <p><Link href="https://zentaurios.app/nft-terms-and-conditions" target="_blank">Zentaurios Legacy NFT Terms and Conditions</Link></p>

            <Link href="/whitelist" style={{marginTop: "20px"}}><button>Join Whitelist</button></Link>
            <Link href="/marketplace" style={{marginTop: "30px"}}><button>Marketplace</button></Link>
          </div>
          <Image
                    src="/zentauria-sample.png"
                    height={300}
                    width={300}
                    alt="Sample zentaurios legacy NFT image"
                    style={{marginTop: "20px"}}
                    priority
                />
        </div>
      </main>
    </div>
  );
};

export default Home;