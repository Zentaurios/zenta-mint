import { MediaRenderer, useActiveListings, useContract } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { contract } = useContract(
    MARKETPLACE_ADDRESS,
    'marketplace'
  )
  const { data: nfts, isLoading } = useActiveListings(contract);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Marketplace
        </h1>
        {!isLoading ? (
          <div>
            {nfts && nfts.map((nft) => {
              return (
                <div key={nft.asset.id}>
                  <MediaRenderer
                    src={nft.asset.image}
                    height="200px"
                    width="200px"
                  />
                  <p>{nft.asset.name}</p>
                  <p>Price: {nft.buyoutCurrencyValuePerToken.displayValue} USDC</p>
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
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )
        }
        <p>Do not see an NFT you like? Please Check back soon.</p>
        <p>Coming to other marketplaces soon!</p>
      </main>
    </div>
  );
};

export default Home;