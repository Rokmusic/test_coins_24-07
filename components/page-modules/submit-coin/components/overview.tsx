import { FC, useEffect } from 'react';

import Image from 'next/image';

import { IOverviewProps, TSteps } from '../submit-coin.type';

import styles from './overview.module.css';

import telegramIcon from '@/public/telegram-white.svg';
import twitterIcon from '@/public/twitter-white.svg';
import facebookIcon from '@/public/facebook-white.svg';
import dangerIcon from '@/public/danger.svg';

const Overview: FC<IOverviewProps> = ({ stepFrame, setStep, data }) => {
  console.log(data, 'datadatadata');

  useEffect(() => {
    const type = stepFrame.split('_')[0];
    const step = Number(stepFrame.split('_')[1]);
    if (step === 4) return;
    if (type !== 'start') setStep(step as TSteps);
  }, [setStep, stepFrame]);
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.lineInputsContainer}>
        <div>
          <span>Name</span>
          <span>{data.name.value as string}</span>
        </div>
        <div>
          <span>Symbol</span>
          <span>{data.symbol.value as string}</span>
        </div>
        <div>
          <span>Launch Date</span>
          <span>{new Date(data.launchDate.value as Date).toLocaleDateString('en-US')}</span>
        </div>
        <div>
          <span>Blockchain</span>
          <span className={styles.blockchain}>
            <Image
              className={styles.icon}
              src={data.blockchain.icon as string}
              width={20}
              height={20}
              alt={data.blockchain.name as string}
            />
            <span>{data.blockchain.name}</span>
          </span>
        </div>
        <div>
          <span>Contract Address</span>
          <span>{data.contractAddress.value as string}</span>
        </div>
        <div>
          <span>Presale</span>
          <span>{data.presaleProject.value ? 'Yes' : 'No'}</span>
        </div>
      </div>
      <div className={styles.description}>
        <span>Description</span>
        <p>{data.description.value as string}</p>
      </div>
      {(data.telegram.value || data.twitter.value || data.facebook.value) && (
        <div className={styles.social}>
          {data.twitter.value && (
            <span>
              <Image src={twitterIcon.src} width={14} height={14} alt="Twitter" />
              <span>{data.twitter.value}</span>
            </span>
          )}
          {data.facebook.value && (
            <span>
              <Image src={facebookIcon.src} width={14} height={14} alt="Facebook" />
              <span>{data.facebook.value}</span>
            </span>
          )}
          {data.telegram.value && (
            <span>
              <Image src={telegramIcon.src} width={14} height={14} alt="telegram" />
              <span>{data.telegram.value}</span>
            </span>
          )}
        </div>
      )}
      <div className={styles.warning}>
        <span>
          <Image src={dangerIcon.src} width={14} height={14} alt="attention" />
          Every submit will undergo manual review, it may take up to 8 hours. Promoted coins will
          automatically become verified.
        </span>
      </div>
    </div>
  );
};

export default Overview;
