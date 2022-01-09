
// firstWalletAddressEx = 0x5968BC57f39301814Fd3eeCCD9E2B954D539e8bc
// secondWalletAddressEx = 0x72A53cDBBcc1b9efa39c834A540550e23463AAcB

import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '../../store/actions/walletActions';
import { findWallet } from '../utils/double';
import { getData } from '../utils/getData';

const INITIAL_STATE= {
    firstWalletAddress: '',
    secondWalletAddress: '',
    firstWalletData: [],
    secondWalletData: []
};

const WalletAddressForm = () => {
    const [wallets, setWallets] = useState(INITIAL_STATE);
    const firstWalletTransactions = useSelector(state => state.walletData.firstWalletTransactions);
    const dispatch = useDispatch();

    useEffect(() => {
    //   return () => {
    //     cleanup
    //   };
    },[wallets]);

    const handleChange = (e) => {
        const {name, value} = e.target; //target = <input/> tag, input tag has properties
        setWallets(INITIAL_STATE => (
            {
            ...INITIAL_STATE,
            [name]: value}));

            console.log(wallets);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Submit Executed');
        try {
           const{firstWalletAddress, secondWalletAddress, firstWalletData, secondWalletData} = wallets;
           // make api calls
           const _firstWalletData = await getData(firstWalletAddress);
        //    console.log('_firstWalletData', _firstWalletData);
           const _secondWalletData = await getData(secondWalletAddress);
        //    console.log('_secondWalletData', _secondWalletData);
           const firstWalletTransactions = findWallet();


        } catch (error) {
            alert(`Error with API ${error}`);
            //setWallets(INITIAL_STATE);
        }

    };


    return <>
        {/* This is WalletAddressForm */}
            <div>
                <h3 className='container'>
                This app compares two wallet and tells you if they've had any transactions in at least the past 1k transactions. If so, it displays the results below.
                </h3>
            </div>
            <br />
            <div className='form-group fg--search'>
                <form onSubmit={handleSubmit}>
                    <input //these properties are all part of the e.target object
                        id='1'
                        type = 'text'
                        className = 'input'
                        name = 'firstWalletAddress'
                        value = {wallets.firstWalletAddress.toLowerCase()}
                        onChange = {(handleChange)}
                        placeholder = 'Enter First Wallet'
                        required
                        />
                    <input
                        id='2'
                        type = 'text'
                        className = 'input'
                        name = 'secondWalletAddress'
                        value = {wallets.secondWalletAddress.toLowerCase()}
                        onChange = {(handleChange)}
                        placeholder = 'Enter Second Wallet'
                        required
                        />
                    <button
                        type='submit'
                        className='btn-primary rounded form-button'
                        id='btn-submit'
                        >
                        SUBMIT
                    </button>
                </form>
            </div>
    </>;
};
 
export default WalletAddressForm;