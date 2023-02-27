import Link from "next/link";
import { Dropdown } from "@nextui-org/react";

export default function DropMenu() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Dropdown>
        <Dropdown.Button
          auto
          css={{
            marginRight: "4px",
            borderRadius: '$xs', // radii.xs
            border: '$space$1 solid transparent',
            background: '#d728e6', // colors.pink800
            color: '$purple800',
            height: '$12', // space[12]
            boxShadow: '$md', // shadows.md
            '&:hover': {
              background: '$purple800',
              color: '#d728e6',
            },
            '&:active': {
              background: '$purple800',
            },
            '&:focus': {
              borderColor: '$purple800',
            },
          }}
        ></Dropdown.Button>
        <Dropdown.Menu css={{
          background: "black"
        }}>
          <Dropdown.Item key="marketplace">
            <Link href="/">
              <p style={{ width: "240px" }}>
                Marketplace
              </p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="my-nfts">
            <Link href="/my-nfts">
              <p style={{ width: "240px" }}>
                My NFTs
              </p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="mint">
            <Link href="/drop">
              <p style={{ width: "240px" }}>
                Whitelisted
              </p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="info">
            <Link href="/info">
              <p style={{ width: "240px" }}>
                Info
              </p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="communites">
            <Link href="https://communities.zentaurios.app">
              <p style={{ width: "240px" }}>
                Gated Communities
              </p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="home">
            <Link href="https://zentaurios.app">
              <p style={{ width: "240px" }}>
                Zentaurios.app
              </p>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
