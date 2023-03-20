import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Info: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}> 
          Info
        </h1>
        <h3>
            Legacy NFT
        </h3>
        <p>
            The Legacy NFTs are a Lifetime Membership to share the following utilties on Zentaurios:
        </p>
            <ul>
                <li>ZentaPosts - Posting Blogs</li>
                <li>Zentagram - Posting Media</li>
                <li>Web3 Community Calendar - Posting Events</li>
                <li>Posting Whitepapers</li>
                <li>Public Blogs, Media, Events, and Whitepapers shared to Zentaurios Twitter, Facebook, LinkedIn Group, and sometimes more social platforms.</li>
                <li>Public Profile</li>
                <li>Token Gated Community</li>
                <li>Token Gated Community Posts</li>
                <li>Access to Zentaurios Token Gated Community</li>
            </ul>
        <p>
            1 NFT = 1 Profile but there is a minimum requirement of 2 NFTs
        </p>
        <h3>
            Rarities
        </h3>
        <p>
            Rarities were added by weight. A weight of 10 is 10 times more likely than weight of 1, a weight of 20 is 2 times more likely than a weight of 10, etc. These numbers decided the chances of each trait, not the outcome.
        </p>
        <p>
            A clearer breakdown may be provided in the future but note that the purpose and value of the NFTs is outlined in the Legacy NFT section above. Rarities are listed below as Weight - Trait:
        </p>
        <div style={{textAlign: "left"}}>
        <p>Zentauria</p>
        <ul>
            <li>60 - zentauria</li>
            <li>10 - zentauria-inverted</li>
        </ul>
        <p>Logo</p>
        <ul style={{ textAlign: "left"}}>
            <li>100 - spectrum</li>
            <li>40 - grey</li>
            <li>40 - greyscale</li>
            <li>40 - original</li>
            <li>40 - inverted</li>
            <li>10 - original-small</li>
            <li>10 - inverted-small</li>
            <li>1 - none</li>
        </ul>
        <p>Frame</p>
        <ul>
            <li>10 - purple</li>
            <li>10 - blue</li>
            <li>10 - pink</li>
            <li>5 - black</li>
            <li>1 - none</li>
        </ul>
        <p>Background</p>
        <ul>
            <li>20 - black</li>
            <li>20 - blue</li>
            <li>20 - pink</li>
            <li>20 - purple</li>
            <li>10 - blue-pink</li>
            <li>10 - blue-purple</li>
            <li>10 - pink-blue</li>
            <li>10 - pink-purple</li>
            <li>10 - purple-blue</li>
            <li>10 - purple-pink</li>
            <li>5 - black-blue</li>
            <li>5 - black-pink</li>
            <li>5 - black-purple</li>
            <li>5 - blue-black</li>
            <li>5 - pink-black</li>
            <li>5 - purple-black</li>
            <li>1 - rainbow</li>
        </ul>
        </div>
        <h3>
            Video Chat NFT
        </h3>
        <p>
            The video chat costs $1 per person per month plus tax. This is from an outside service. There will be various methods soon for some price not much over $1 per month to cover the costs of this. This will unfortunately be required to be purchased by anyone looking to use the video chat. However, it does allow for unlimited time in calls within each month. 
        </p>
        <p>
            Edited 3/20/2023: It is also an option each account signs up for its own video chat service and submits it to Zentuarios. This would give you greater control of your chat and 25 users free each month. The point is, video chat expenses cannot be vcovered by Zenturios strictly from firsthand NFT sales.
        </p>
        <h3>
            Future Utility
        </h3>
        <p>
            There may or may not be additional values added to these utilities in the future. 
        </p>
        <h3>
            Offical Terms and Conditions
        </h3>
        <p>
            The information on this page is in accordance with and expanded on in the link below:
        </p>
        <p style={{marginBottom: '100px'}}><Link href="https://zentaurios.app/nft-terms-and-conditions" target="_blank">Zentaurios Legacy NFT Terms and Conditions</Link></p>
      </main>
    </div>
  );
};

export default Info;