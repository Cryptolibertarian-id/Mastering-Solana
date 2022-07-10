const { Keypair, PublicKey } = require("@solana/web3.js");
const wallet = new Keypair();
console.log(wallet.publicKey.toBase58());
console.log(new PublicKey());
console.log(wallet.secretKey);
//console.log(new Keypair());
