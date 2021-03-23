import Block from './block.js';

export class Blockchain {

    constructor() {
        this.chain = [ this.genesis() ]
    }

    genesis() {
        return new Block('11-12-12', 'Gemini Block', '0', 1)
    }

    getBlockLatest() {
        return this.chain[ this.chain.length - 1 ]
    }

    addBlock(block) {
        block.previous_hash = this.getBlockLatest().hash;
        block.hash = block.calculateHash();
        this.chain.push(block);
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            let current = this.chain[i];
            let last = this.chain[i - 1];

            if (current.hash !== current.calculateHash()) {
                return false;
            }
            if (current.hash !== last.hash){
                return false;
            }
        }

        return true;
    }
}

export default Blockchain;