const SaNisBlockChain = require('./SaNisBlockChain');

const insuranceBlockChain = new SaNisBlockChain();

console.log(insuranceBlockChain);

/*const nonce = 10001;

const previousHashBlockData = "JHONHOUSE3445566";

const currentBlockData = [
	{
		insuranceAmount: 500,
		policyHolderAddress: "JHON4B1123456677",
		insuranceVendorAddress: "DIGIT2000889922"
	},

	{
		insuranceAmount: 600,
		policyHolderAddress: "JHON4C1123456677",
		insuranceVendorAddress: "DIGIT2100889922"
	},
	{
		insuranceAmount: 500,
		policyHolderAddress: "JHON4D1123456677",
		insuranceVendorAddress: "DIGIT2200889922"
	}
 ];


console.log(insuranceBlockChain.performHashingBlock(13388,previousHashBlockData,currentBlockData));
*/