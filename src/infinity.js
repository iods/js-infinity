import Block from './block.js';
import Blockchain from './blockchain.js';

const block = new Block('2021-23-03', { balance: 50000000, to: "Ronnie", message: "Thanks for babysitting my pet raccoon.", amount: 34213434.21234, from: "Rye" });
console.log(block)

const blockchain = new Blockchain()
blockchain.addBlock(block);
console.log(blockchain.isValid());
console.log(blockchain);

console.log(blockchain.chain[1].data.amount);