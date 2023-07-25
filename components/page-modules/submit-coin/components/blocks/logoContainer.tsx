import { Dispatch, FC, SetStateAction } from 'react';

import Image from 'next/image';

import { TSteps } from '../../submit-coin.type';

import styles from './logoContainer.module.css';

import defaultLogo from '@/public/default-logo.svg';
import dangerIcon from '@/public/danger.svg';
import emptyLogoContainer from '@/public/empty-logo.svg';
import minusSquare from '@/public/minus-square.svg';

interface ILogoContainer {
  step: TSteps;
  isMobile: boolean;
  fileObject: { url: string; name: string };
  setFileObject: Dispatch<SetStateAction<{ url: string; name: string }>>;
}

const LogoContainer: FC<ILogoContainer> = ({ step, isMobile, fileObject, setFileObject }) => {
  return (
    <>
      {isMobile && (
        <>
          {step !== 1 && (
            <div
              style={{ margin: step === 4 ? 'auto' : '' }}
              className={`${styles.logoContainer} ${styles.mobileLogoContainer}`}
            >
              <div
                className={styles.logoBack}
                style={{ backgroundImage: `url(${emptyLogoContainer.src})` }}
              >
                <img
                  className={styles.logoImage}
                  alt="logo"
                  src={fileObject.url || defaultLogo.src}
                />
                <span className={styles.resolution}>128x128</span>
              </div>
            </div>
          )}
          {step !== 4 && (
            <div
              className={styles.attention}
              style={{ width: isMobile && step === 1 ? '100%' : '' }}
            >
              <span className={styles.headline}>
                <Image src={dangerIcon.src} width={14} height={14} alt="attention" />
                Attention!
              </span>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              {step === 1 && (
                <span className={styles.headline}>
                  Optimal dimensions 512x512px, size up to 1MB
                </span>
              )}
            </div>
          )}
        </>
      )}
      {(!isMobile || step === 1) && (
        <div className={styles.logoContainer}>
          <div
            className={styles.logoBack}
            style={{ backgroundImage: `url(${emptyLogoContainer.src})` }}
          >
            <img className={styles.logoImage} alt="logo" src={fileObject.url || defaultLogo.src} />
            {step === 1 && <span className={styles.resolution}>256x256</span>}
          </div>

          <div className={styles.logoNameContainer}>
            {fileObject.url && fileObject.name && !isMobile && (
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => setFileObject({ url: defaultLogo.src, name: '' })}
              >
                <img src={minusSquare.src} alt="remove" />
              </button>
            )}
            <span>
              {fileObject.url &&
                !isMobile &&
                (fileObject.name || 'Optimal dimensions 512x512px, size up to 1MB')}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoContainer;
