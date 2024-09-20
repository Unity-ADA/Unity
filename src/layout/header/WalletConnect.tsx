import Button from "@/components/Button";
import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet';

const WalletConnect = () => {
  const { 
      isEnabled,
      isConnected,
      enabledWallet,
      stakeAddress,
      signMessage,
      connect,
      disconnect 
  } = useCardano();

  const onConnect = () => alert('Successfully connected!');

  return (
    <li>
      { isConnected ?
        <div className="flex flex-row gap-2">
          <div className="max-w-30 md:max-w-70 truncate">
            <Button text={stakeAddress as string} size="xs" class_extra="cursor-default"/>
          </div>

          <div onClick={disconnect}>
            <Button text="Sign Out" size="xs" class_extra="cursor-pointer"/>
          </div>

        </div>
        :
        /**
         * @TODO this shouldn't be hardcoded but instead look
         * for the wallets currently installed
         * */
        <div onClick={() => connect('eternl', onConnect)}>
          <Button text="Connect Wallet" size="xs" class_extra="cursor-pointer"/>
        </div>
      }
      
    </li>
  );
};

export default WalletConnect;
