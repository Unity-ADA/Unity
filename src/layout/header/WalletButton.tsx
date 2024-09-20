import dynamic from 'next/dynamic';

const WC = dynamic(() => import('./WalletConnect'), {
  ssr: false,
});

const WCB = () => {
  return <WC />;
};

export default WCB;