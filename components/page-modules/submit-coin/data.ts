import binanceIcon from '@/public/binance.svg';

export const headlines = [
  {
    id: 1,
    headline: 'Upload coin logo',
  },
  {
    id: 2,
    headline: 'Project information',
  },
  {
    id: 3,
    headline: 'Add Linnks',
  },
  {
    id: 4,
    headline: 'Overview',
  },
];

export const initialDataProject = {
  blockchain: { name: 'Binance1', icon: binanceIcon.src, req: true },
  contractAddress: { value: '', req: true },
  name: { value: '', req: true },
  symbol: { value: '', req: true },
  launchDate: { value: new Date(Date.now()), req: true },
  description: { value: '', req: true },
  presaleProject: { value: false },
};

export const initialLinksData = {
  website: { value: '' },
  telegram: { value: '' },
  twitter: { value: '' },
  discord: { value: '' },
  facebook: { value: '' },
  reddit: { value: '' },
  linktree: { value: '' },
};

export const initialFile = { url: '', name: '' };
