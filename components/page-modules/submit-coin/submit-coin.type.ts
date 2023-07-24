import { Dispatch, SetStateAction } from 'react';

export type TSteps = 1 | 2 | 3 | 4;

export interface IDataProject {
  blockchain: IDataProjectValue;
  contractAddress: IDataProjectValue;
  name: IDataProjectValue;
  symbol: IDataProjectValue;
  launchDate: IDataProjectValue;
  description: IDataProjectValue;
  presaleProject: IDataProjectValue;
}

export interface IDataProjectValue {
  value?: string | boolean | Date;
  name?: string;
  icon?: string;
  req?: boolean;
}

export interface IPojectProps {
  stepFrame: string;
  setStep: Dispatch<SetStateAction<TSteps>>;
  dataProject: IDataProject;
  setDataProject: Dispatch<SetStateAction<IDataProject>>;
  refContainer: React.RefObject<HTMLDivElement>;
}

export type TTypesDataProject = keyof IDataProject;

export interface ILinksValue {
  value: string;
}

export interface IDataLinks {
  website: ILinksValue;
  telegram: ILinksValue;
  twitter: ILinksValue;
  discord: ILinksValue;
  facebook: ILinksValue;
  reddit: ILinksValue;
  linktree: ILinksValue;
}

export interface ILinksDataProps {
  stepFrame: string;
  setStep: Dispatch<SetStateAction<TSteps>>;
  linksData: IDataLinks;
  setLinksData: Dispatch<SetStateAction<IDataLinks>>;
}

export type TTypesDataLinks = keyof IDataLinks;

export type TAllData = IDataProject & IDataLinks;

export interface IOverviewProps {
  stepFrame: string;
  setStep: Dispatch<SetStateAction<TSteps>>;
  data: TAllData;
}

export interface IModalProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setStepFrame: Dispatch<SetStateAction<string>>;
  setStepModal: Dispatch<SetStateAction<TSteps>>;
}
