from web3 import Web3, HTTPProvider
from web3.middleware import geth_poa_middleware
from solcx import compile_source

# Inisialisasi Web3 dengan provider Ethereum (Anda dapat menggunakan alamat lokal atau penyedia layanan seperti Infura)
provider = HTTPProvider('http://localhost:8545')
web3 = Web3(provider)
web3.middleware_onion.inject(geth_poa_middleware, layer=0)  # Menambahkan middleware untuk jaringan Proof of Authority

# Alamat dari kontrak pintar yang sudah dideploy
contract_address = "0x1234567890123456789012345678901234567890"

# Mendapatkan bytecode kontrak pintar
with open("GlobalTransaction.sol", "r") as file:
    contract_source_code = file.read()
compiled_sol = compile_source(contract_source_code)
contract_interface = compiled_sol['<stdin>:GlobalTransaction']

# Membuat instance kontrak pintar
contract = web3.eth.contract(address=contract_address, abi=contract_interface['abi'])

# Mengirim transaksi untuk memanggil fungsi setGlobalValue
transaction_hash = contract.functions.setGlobalValue(42).transact({'from': web3.eth.accounts[0]})
print("Hash Transaksi:", transaction_hash.hex())
