import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2d409b38EfDc4b31dB9C6783D0d6CD09Cd0c503F'
);

export default instance;
