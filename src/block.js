import sha256 from 'crypto-js/sha256.js';
const DIFFICULTY = 1

export class Block {

    constructor(timestamp, data, previous_hash="To Infinity and Beyond", difficulty) {
        this.timestamp = timestamp;
        this.data = data;
        this.previous_hash = previous_hash;
        this.hash = this.calculateHash();
        this.nonce = 0;
        this.difficulty = difficulty || DIFFICULTY;
    }

    calculateHash() {
        return sha256(this.timestamp + JSON.stringify(this.data) + this.previous_hash + this.nonce + this.difficulty).toString();
    }
}

export default Block;