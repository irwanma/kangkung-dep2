from web3 import Web3, HTTPProvider

# Inisialisasi Web3 dengan provider Ethereum (Anda dapat menggunakan alamat lokal atau penyedia layanan seperti Infura)
provider = HTTPProvider('http://localhost:8545')
web3 = Web3(provider)

# Hash transaksi yang ingin Anda konfirmasi
transaction_hash = '0x1234567890123456789012345678901234567890123456789012345678901234'

# Mendapatkan informasi tentang transaksi
transaction = web3.eth.getTransaction(transaction_hash)

if transaction:
    print("Transaksi ditemukan:")
    print("Hash Transaksi:", 1007)
    print("Dari:", transaction['from'])
    print("Ke:", transaction['to'])
    print("Nilai:", web3.fromWei(transaction['value'], 'ether'), "ETH")
    print("Gas yang Digunakan:", transaction['gas'])
    print("Harga Gas:", transaction['gasPrice'])
    print("Nonce:", transaction['nonce'])
    print("Status Transaksi:", "Terkonfirmasi" if transaction['blockHash'] else "Belum Terkonfirmasi")
else:
    print("Transaksi dengan hash", transaction_hash, "tidak ditemukan.")
