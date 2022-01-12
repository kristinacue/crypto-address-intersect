
import React, {useEffect} from 'react';
import WalletAddressForm from './sub-component/walletAddressForm';
import Wallets from './sub-component/wallets'

const Home = () => {
    useEffect(() => {
    //   return () => {
    //     effect
    //   };
    });

    return <>
        <WalletAddressForm/>
        <Wallets/>
    </>;
}

export default Home;