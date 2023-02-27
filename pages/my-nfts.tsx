import { MediaRenderer, useOwnedNFTs, useContract, useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const address = useAddress();
    const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(contract, address);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}> 
          Owned NFTs
        </h1>
        {!isLoading ? (
          <div style={{display: "flex", flexDirection: "row", flexWrap: 'wrap'}}>
            { ownedNFTs && ownedNFTs.map((ownedNFT) => {
              return (
                <div key={ownedNFT.metadata.id} style={{marginTop: "20px", border: "2px solid purple", marginLeft: "32px", marginRight: "32px", backgroundColor: 'black'}}>
                    <div style={{padding: "10px"}}>
                  <MediaRenderer
                    src={ownedNFT.metadata.image}
                    height="300px"
                    width="300px"
                  />
                    <p style={{textAlign: "center"}}>{ownedNFT.metadata.name}</p>
                    <p style={{maxWidth: "300px"}}>{ownedNFT.metadata.description}</p>
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
  );
};

export default Home;