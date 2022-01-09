
export const findWallet = (walletAddress, walletData) => {
    let walletDataCopy = walletData.result, transactions = [], count = 0;

    for (let i = 0; i < walletDataCopy.length; i++) {
        if(walletAddress === walletDataCopy[i].to){
            transactions.push(walletDataCopy[i].hash);
            count++;
        };
    };

    console.log(`These wallets have interacted ${count} times over the last ${walletDataCopy.length} transactions`);
}