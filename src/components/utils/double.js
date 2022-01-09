
export const findWallet = (walletAddress, walletData) => {

    let walletDataCopy = walletData, transactions = [], count = 0;

    for (let i = 0; i < walletDataCopy.result.length; i++) {
        if(walletAddress === walletDataCopy.result[i].to){
            transactions.push(walletDataCopy.result[i].hash);
            count++;
        };
    };

    console.log(`These wallets have interacted ${count} times over the last ${walletDataCopy.result.length} transactions`);
}