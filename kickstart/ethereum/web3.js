import Web3 from 'web3';

let web3;

// Handle case in which our code executed in browser and metamask is available
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/91f7a974667447e0837fce739574ed35'
  );
  web3 = new Web3(provider);
}

export default web3;
