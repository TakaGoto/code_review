import { Alchemy, GetNftsForOwnerOptions, Network } from 'alchemy-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getFrameNftsByAddress(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query;
  const settings = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(settings);
  const options: GetNftsForOwnerOptions = {
    contractAddresses: ['0x6cfc9ca8da1d69719161ccc0ba4cfa95d336f11d'],
  };
  if (address !== undefined && typeof address === 'string') {
    const responseIterable = alchemy.nft.getNftsForOwnerIterator(
      address,
      options
    );
    const normalizedNfts = [];
    for await (const nft of responseIterable) {
      const normalizedNft = {
        tokenId: nft.tokenId,
        imageUrl: nft.media[0].thumbnail,
      };
      normalizedNfts.push(normalizedNft);
    }
    res.status(200).json(normalizedNfts);
  } else {
    res.status(404).send('Not found');
  }
}
