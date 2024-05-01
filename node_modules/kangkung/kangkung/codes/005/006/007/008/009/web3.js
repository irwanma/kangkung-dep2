const Web3 = require('web3');

// Inisialisasi Web3 dengan provider Ethereum (Anda dapat menggunakan alamat lokal atau penyedia layanan seperti Infura)
const web3 = new Web3('http://localhost:8545');

// Mendapatkan nomor blok terbaru
web3.eth.getBlockNumber((error, latestBlockNumber) => {
  if (error) {
    console.error('Gagal mendapatkan nomor blok terbaru:', error);
  } else {
    console.log('Nomor Blok Terbaru:', latestBlockNumber);
    
    // Mendapatkan informasi tentang blok terbaru
    web3.eth.getBlock(latestBlockNumber, (error, latestBlock) => {
      if (error) {
        console.error('Gagal mendapatkan informasi blok terbaru:', error);
      } else {
        console.log('Informasi Blok Terbaru:', latestBlock);
      }
    });
  }
});

