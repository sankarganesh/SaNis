/* Date Formatter Plugin */
const momentPlugin = require('moment');

/*SHA512 for UTF-8 encoding */
const sha512 = require('js-sha512');

/* Constructor function to create Blockchain 
(All the blocks will be stored in the insuranceBlockChain Array)
and add the new Transactions

New Transactions are pending Transactions as these transactions are not mined  */

function SaNisBlockChain(){

	this.insuranceBlockChain =[];

	this.pendingTransactions = [];

	/* Creates the Gensis block by sending some value 
	for Nonce, previousHashBlock, hash */
	this.createNewBlock(1000,'0','0');
};

/* Create a new block in the Blockchain */

SaNisBlockChain.prototype.createNewBlock = function(nonce,previousBlockHash,hash){
 
const newBlockCreationTime = Date.now();

 const newBlock = {
 	index: this.insuranceBlockChain.length +1,
 	timestamp: momentPlugin().format('MMMM Do YYYY, h:mm:ss a'),
 	transactions: this.pendingTransactions,
 	nonce: nonce, 
 	hash:hash,
 	previousBlockHash:previousBlockHash
  };
 
  this.pendingTransactions = [];
  
  this.insuranceBlockChain.push(newBlock);

  return newBlock;

}


/* Method to retireve the Last block */

SaNisBlockChain.prototype.retrieveLastBlock = function(){
	return this.insuranceBlockChain[this.insuranceBlockChain.length -1];
};

/* Method to pay Insurance Premium Amount */

SaNisBlockChain.prototype.payInsurancePremiumAmount = function(insuranceAmount,policyHolderAddress,insuranceVendorAddress){
	const payInsurancePremiumTransaction = {
		insuranceAmount:insuranceAmount,
		policyHolderAddress:policyHolderAddress,
		insuranceVendorAddress:insuranceVendorAddress

	};

	this.pendingTransactions.push(payInsurancePremiumTransaction);

	return this.retrieveLastBlock()['index'] +1;
};

/* Method to perform hashing the block using SHA512 */

SaNisBlockChain.prototype.performHashingBlock = function(nonce,previousBlockHash,currentBlockData){
	const hashDataAsString = nonce.toString() + previousBlockHash + JSON.stringify(currentBlockData);
	const resultHashData = sha512(hashDataAsString);
	return resultHashData;
};

/* Proof of Work method for securing the Blockchain, 
   This ensures all the blocks added in the blockchain are legitimate */
SaNisBlockChain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
	let nonce = 0;
	let tempHash ="-1";
	do{
		tempHash = this.performHashingBlock(nonce,previousBlockHash,currentBlockData);
		nonce+=1;
	}while(tempHash.substring(0,4) !== '0000');
	return nonce;
};


module.exports = SaNisBlockChain;