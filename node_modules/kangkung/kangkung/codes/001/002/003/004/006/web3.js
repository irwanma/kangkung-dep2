const Web3 = require('web3');

// Inisialisasi Web3 dengan provider Ethereum (Anda dapat menggunakan alamat lokal atau penyedia layanan seperti Infura)
const web3 = new Web3('http://localhost:8545');

// Mendapatkan daftar semua akun di node Ethereum
web3.eth.getAccounts()
  .then(accounts => {
    console.log('Daftar Akun:', accounts);

    // Mendapatkan saldo ETH dari setiap akun
    Promise.all(accounts.map(account => web3.eth.getBalance(account)))
      .then(balances => {
        console.log('Saldo ETH:');
        accounts.forEach((account, index) => {
          console.log(`  ${account}: ${web3.utils.fromWei(balances[index], 'ether')} ETH`);
        });

        // Membuat transaksi untuk mentransfer ETH antara dua akun
        const fromAccount = accounts[0];
        const toAccount = accounts[1];
        const amountToSend = web3.utils.toWei('1', 'ether');
        web3.eth.sendTransaction({from: fromAccount, to: toAccount, value: amountToSend})
          .on('transactionHash', hash => {
            console.log('Transaksi Dikirim, Hash:', hash);
          })
          .on('receipt', receipt => {
            console.log('Transaksi Berhasil:', receipt);
          })
          .on('error', error => {
            console.error('Transaksi Gagal:', error);
          });
      })
      .catch(error => {
        console.error('Gagal mendapatkan saldo ETH:', error);
      });
  })
  .catch(error => {
    console.error('Gagal mendapatkan daftar akun:', error);
  });
