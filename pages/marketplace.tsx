import type { NextPage } from "next";
import Link from "next/link";
import { MediaRenderer, useActiveListings, useContract } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

const Marketplace: NextPage = () => {
    const { contract } = useContract(
        MARKETPLACE_ADDRESS,
        'marketplace'
      )
      const { data: nfts, isLoading } = useActiveListings(contract);
  return (
    <div className={styles.container}>
      <main className={styles.main} style={{ textAlign: "center" }}>
      <h1 className={styles.title}>
          Marketplace
        </h1>
        <p>Do not see an NFT you like? Please Check back soon.</p>
        <p>Please read <Link href="/info">Info</Link> page before buying.</p>
        <p>Some availability on <Link href="https://opensea.io/collection/zentaurios-legacy-nfts">OpenSea</Link></p>
      {!isLoading ? (
          <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-around', marginLeft: 'auto', marginRight: 'auto' }}>
            {nfts && nfts.map((nft) => {
              return (
                <div key={nft.asset.id} style={{ marginTop: "20px", border: "2px solid purple", marginLeft: "16px", marginRight: "16px", backgroundColor: 'black' }}>
                  <div style={{ padding: "10px" }}>
                    <MediaRenderer
                      src={nft.asset.image}
                      height="200px"
                      width="200px"
                    />
                    <p>{nft.asset.name}</p>
                    <p>Price: {nft.buyoutCurrencyValuePerToken.displayValue} MATIC</p>
                    <p>Chain: Polygon</p>
                    <button
                      onClick={async () => {
                        try {
                          await contract?.buyoutListing(BigNumber.from(nft.id), 1);
                        } catch (error) {
                          console.error(error);
                          alert(error);
                        }
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )
        }
      </main>
    </div>
  )
}

export default Marketplace