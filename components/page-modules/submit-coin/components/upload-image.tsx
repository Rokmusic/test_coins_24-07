'use client';

import { Dispatch, FC, SetStateAction, useEffect } from 'react';

import {
  FileUpload,
  FileUploadHeaderTemplateOptions,
  FileUploadSelectEvent,
} from 'primereact/fileupload';

import { useMedia } from 'use-media';

import { TSteps } from '../submit-coin.type';

import styles from './upload-image.module.css';

import emptyLogoContainer from '@/public/empty-logo.svg';
import defaultLogo from '@/public/default-logo-normal.svg';
import defaultLogoSmall from '@/public/default-logo-small.svg';
import AddSquare from '@/components/common/icons/add-square';

interface IStepProps {
  stepFrame: string;
  setStep: Dispatch<SetStateAction<TSteps>>;
  setFileObject: Dispatch<SetStateAction<{ url: string; name: string }>>;
  fileObject: { url: string; name: string };
}

interface TFileWithObjectUrl extends File {
  objectURL?: string;
}

const UploadImage: FC<IStepProps> = ({ stepFrame, setStep, setFileObject, fileObject }) => {
  const isMobile = useMedia({ maxWidth: 992 });
  useEffect(() => {
    const type = stepFrame.split('_')[0];
    const step = Number(stepFrame.split('_')[1]);
    if (step === 1) return;
    if (type !== 'start') setStep(step as TSteps);
  }, [setStep, stepFrame]);

  const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
    const { chooseButton } = options;
    return <div className={`${styles.controlsUpload} ${styles.controlBtn}`}>{chooseButton}</div>;
  };

  const onTemplateSelect = (event: FileUploadSelectEvent) => {
    const file: TFileWithObjectUrl = event.files[0];
    setFileObject({ url: file.objectURL ? file.objectURL : '', name: file.name });
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.logoContainer} style={{ width: '128px', height: '128px' }}>
        <div
          className={styles.logoBack}
          style={{ backgroundImage: `url(${emptyLogoContainer.src})` }}
        >
          <img
            alt="logo 128"
            className={styles.logoImage}
            src={fileObject.url || defaultLogo.src}
          />
          <span className={styles.resolution}>128x128</span>
        </div>
      </div>
      <div className={styles.logoContainer} style={{ width: '64px', height: '64px' }}>
        <div
          className={styles.logoBack}
          style={{ backgroundImage: `url(${emptyLogoContainer.src})` }}
        >
          <img
            alt="logo 64"
            className={styles.logoImage}
            src={fileObject.url || defaultLogoSmall.src}
          />
          <span className={styles.resolutionSmall}>64x64</span>
        </div>
      </div>
      <FileUpload
        name="coin logo"
        // url={'/api/upload'}
        accept="image/*"
        maxFileSize={1000000}
        chooseLabel="Upload"
        headerTemplate={headerTemplate}
        onSelect={onTemplateSelect}
        chooseOptions={{ icon: <AddSquare isMobile={isMobile} /> }}
      />
    </div>
  );
};

export default UploadImage;
