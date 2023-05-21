import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

type frameNft = {
  tokenId: string;
  contractAddress: string;
  imageUrl: string;
};

interface ProfileProps {
  frameNfts: frameNft[];
}

const getImageUrl = (
  tokenId: string,
  height: string,
  width: string
): string => {
  const appendedTokenId = tokenId.padStart(4, '0');
  const imageId = 'We2UD5NhUL4OYZ7uWnOoEQ';
  return `https://imagedelivery.net/${imageId}/frames/${appendedTokenId}.png/w=${width},h=${height}`;
};

const Profile: NextPage<ProfileProps> = (props) => {
  const router = useRouter();
  const { profileAddress } = router.query;
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className='text-aka'>
      <div> this is the profile page for {profileAddress}</div>
      {!address && <button onClick={() => connect()}>Connect Wallet</button>}
      {address && (
        <div>
          <div>Wallet Connected!</div>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      )}
      {address && address !== profileAddress && (
        <div>
          Connected Wallet does not match profile address. You are not able to
          edit this page
        </div>
      )}
      {address && address === profileAddress && (
        <div>
          Connected Wallet matches profile address. You are able to edit this
          page
        </div>
      )}
      <div> this address has the following frames </div>
      <div className='grid grid-cols-4 gap-4'>
        {props.frameNfts.map((frameNft: frameNft) => {
          return (
            <Image
              key={frameNft.tokenId}
              src={getImageUrl(frameNft.tokenId, '400', '400')}
              width='400'
              height='400'
              alt={'picture of frame' + frameNft.tokenId}
            />
          );
        })}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  frameNfts: frameNft[];
}> = async (context: GetServerSidePropsContext) => {
  const address = context.query.profileAddress;
  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'https://0n1force-web-v2.vercel.app/';
  const response = await fetch(
    url + `api/profile/getFrameNftsByAddress?address=${address}`
  );
  const frameNfts = await response.json();
  return {
    props: { frameNfts },
  };
};

export default Profile;
