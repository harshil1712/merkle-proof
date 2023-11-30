const { MerkleTree } = require('merkletreejs');
const SHA256 = require('crypto-js/sha256');

const data = ['a', 'b', 'c', 'd'];

const leaves = data.map((x) => SHA256(x));

const tree = new MerkleTree(leaves, SHA256);

const root = tree.getRoot().toString('hex');

const leafToProve = SHA256('d');

const proofPath = tree.getProof(leafToProve);

const belongsToTree = tree.verify(proofPath, leafToProve, root);

console.log(belongsToTree);
