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
                    <Dropdown.Item key="info"
            css={{
              marginBottom: "10px",
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
          >
            <Link href="/info">
              <p style={{ width: "240px", fontSize: "1.3rem" }}>
                Info
              </p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="marketplace"
            css={{
              marginBottom: "10px",
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
          >
            <Link href="/marketplace">
              <p style={{ width: "240px", fontSize: "1.3rem" }}>
                Marketplace
              </p>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item key="mint"
            css={{
              marginBottom: "10px",
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
            }}>
            <Link href="/drop">
              <p style={{ width: "240px", fontSize: "1.3rem" }}>
                Mint
              </p>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item key="my-nfts"
            css={{
              marginBottom: "10px",
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
          >
            <Link href="/my-nfts">
              <p style={{ width: "240px", fontSize: "1.3rem" }}>
                My NFTs
              </p>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item key="communities"
            css={{
              marginBottom: "10px",
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
          >
            <Link href="https://communities.zentaurios.app">
              <p style={{ width: "240px", fontSize: "1.3rem" }}>
                Gated Communities
              </p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="home"
            css={{
              marginBottom: "10px",
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
          >
            <Link href="https://zentaurios.app">
              <p style={{ width: "240px", fontSize: "1.3rem" }}>
                Zentaurios.app
              </p>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
