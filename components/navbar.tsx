import Link from "next/link";
import Image from "next/image";
import DropMenu from "./dropdown";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {

    return (
        <>
            <div style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto", paddingLeft: "4px", paddingRight: "4px" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "4px", height: "48px" }}>
                    <Link href="/" >
                        <Image src="/logo.png" width={50} height={50} priority alt="Zentaurios logo web3 pink" />
                    </Link>

                    <div style={{ marginBottom: "2rem", width: "230px" }}>
                        <ConnectWallet />
                    </div>

                    <DropMenu />
                </div>
            </div>
        </>
    )
}

export default Navbar;