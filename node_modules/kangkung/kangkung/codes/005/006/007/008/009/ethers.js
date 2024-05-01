const { ethers } = require('ethers');

// Inisialisasi provider Ethereum (Anda dapat menggunakan alamat lokal atau penyedia layanan seperti Infura)
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

// Mendapatkan daftar akun dari provider
provider.listAccounts().then(async (accounts) => {
    // Mendapatkan saldo ETH dari akun pertama
    const balance = await provider.getBalance(accounts[0]);
    console.log(`Saldo akun pertama: ${ethers.utils.formatEther(balance)} ETH`);

    // Menginisialisasi wallet dengan private key dari akun pertama
    const wallet = new ethers.Wallet('private_key_here', provider);

    // Membuat transaksi Ethereum
    const tx = {
        to: 'receiver_address_here',
        value: ethers.utils.parseEther('0.1') // Mengirim 0.1 ETH
    };

    // Menandatangani transaksi dengan private key wallet
    const signedTx = await wallet.signTransaction(tx);

    // Mengirim transaksi yang telah ditandatangani ke jaringan
    const txResponse = await provider.sendTransaction(signedTx);
    console.log(`Transaksi berhasil: https://etherscan.io/tx/${txResponse.hash}`);

    // Menginisialisasi kontrak pintar ERC20
    const abi = [
        // ABI kontrak ERC20
    ];
    const contractAddress = 'contract_address_here';
    const contract = new ethers.Contract(contractAddress, abi, wallet);

    // Memanggil fungsi balanceOf dari kontrak ERC20
    const balanceOf = await contract.balanceOf(accounts[0]);
    console.log(`Saldo ERC20: ${ethers.utils.formatUnits(balanceOf, 18)}`);

    // Mengirim transaksi ke fungsi transfer dari kontrak ERC20
    const transferTx = await contract.transfer('recipient_address_here', ethers.utils.parseUnits('100', 18)); // Mengirim 100 token ERC20
    console.log(`Transaksi transfer berhasil: https://etherscan.io/tx/${transferTx.hash}`);
});
