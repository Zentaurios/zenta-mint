import Image from 'next/image';
import Link from 'next/link';
import { useContract, useAddress, useClaimNFT } from '@thirdweb-dev/react';
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home.module.css";
import toast from "react-hot-toast";

const Drop = () => {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const address = useAddress();
    const {
        mutate: claimNft,
        isLoading,
        error,
    } = useClaimNFT(contract);
    if (error) {
        toast.error("Purchase Failed")
        console.error("failed to claim nft", error);
    }
    if (!isLoading && !error) {
        toast.success("NFT Purchased!")
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Whitelisted Buy
                </h1>
                <Image
                    src="/zentauria-sample.png"
                    height={300}
                    width={300}
                    alt="Sample zentaurios legacy NFT image"
                    style={{marginTop: "20px"}}
                    priority
                />
                <p style={{textAlign: "center", marginBottom: "0px"}}>
                    Sample NFT image! You can see your NFT on the &apos;My NFTs&apos; page after minting.
                </p>
                <p style={{textAlign: "center", marginBottom: "0px"}}>
                    Chain: Polygon
                </p>
                <p style={{textAlign: "center"}}>
                    Cost: 40 MATIC
                </p>
                <button
                    disabled={isLoading}
                    onClick={() => claimNft({ to: address, quantity: 1 })}
                >
                    <p style={{ paddingLeft: "10px", paddingRight: "10px", marginTop: "4px", marginBottom: "4px" }}>
                        Buy
                    </p>
                </button>
                <p style={{textAlign: "center"}}>
                    Read the <Link href="/info">INFO</Link> first!
                </p>
            </main>
        </div>
    );
};

export default Drop;