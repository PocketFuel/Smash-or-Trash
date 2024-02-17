import React, { useEffect, useState } from 'react';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { Connection, PublicKey } from '@solana/web3.js';
import { mplTokenMetadata as Metadata } from '@metaplex-foundation/mpl-token-metadata';

const Solana_RPC_Endpoint = "https://mainnet.helius-rpc.com/?api-key=b6b97ed4-c507-40f7-ad75-e46051af0379";

interface NFT {
  name: string;
  uri: string;
}

interface MetadataAccount {
  data: {
    data: {
      name: string;
      uri: string;
    };
  };
}

const MyCollectibles: React.FC<{ walletAddress: string }> = ({ walletAddress }) => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const connection = new Connection(Solana_RPC_Endpoint);
        const umi = createUmi(connection); // Pass connection directly
        const walletPublicKey = new PublicKey(walletAddress);
  
        const accounts = await connection.getParsedTokenAccountsByOwner(walletPublicKey, {
          programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
        });
  
        const nftsDataPromises = accounts.value.map(async (accountInfo) => {
          const mintAddress = accountInfo.account.data.parsed.info.mint;
          const metadataPDA = await Metadata.getPDA(new PublicKey(mintAddress));
          return Metadata.load(connection, metadataPDA)
            .then((metadataAccount: MetadataAccount) => ({
              name: metadataAccount.data.data.name,
              uri: metadataAccount.data.data.uri,
            }))
            .catch((error: any) => {
              console.error("Error loading metadata for mint:", mintAddress, error);
              return null; // Return null for any failed metadata fetch
            });
        });
  
        const nftsData = await Promise.all(nftsDataPromises);
        setNfts(nftsData.filter((nft): nft is NFT => nft !== null));
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setNfts([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchNFTs();
  }, [walletAddress]);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {nfts.map((nft, index) => (
        <div key={index}>
          <p>{nft.name}</p>
          <img src={nft.uri} alt={nft.name} />
        </div>
      ))}
    </div>
  );
};

export default MyCollectibles;