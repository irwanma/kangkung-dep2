from web3 import Web3, HTTPProvider

# Inisialisasi Web3 dengan provider Ethereum (Anda dapat menggunakan alamat lokal atau penyedia layanan seperti Infura)
provider = HTTPProvider('http://localhost:8545')
web3 = Web3(provider)

# Mendapatkan nomor blok terbaru
latest_block_number = web3.eth.blockNumber

# Mendapatkan informasi tentang blok terbaru
latest_block = web3.eth.getBlock(latest_block_number)

# Menampilkan informasi tentang blok terbaru
print("Nomor Blok Terbaru:", latest_block_number)
print("Hash Blok:", latest_block.hash.hex())
print("Timestamp:", latest_block.timestamp)
print("Jumlah Transaksi:", len(latest_block.transactions))
