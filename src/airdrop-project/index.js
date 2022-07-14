const { Keypair, PublicKey } = require("@solana/web3.js");
const wallet = new Keypair();
console.log(wallet.publicKey);
console.log(new PublicKey(wallet.publicKey).toBase58());
console.log(wallet.secretKey);
//console.log(new Keypair());
const dataView = new DataView(wallet.secretKey.buffer);
console.log(dataView.getUint8(0)); // 5
