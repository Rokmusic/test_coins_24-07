'use client';

import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';

import { useMedia } from 'use-media';

import { IDataLinks, IDataProject, TSteps } from '../submit-coin.type';

import styles from './multiple-spep-form.module.css';

import UploadImage from './upload-image';
import ProjectInform from './project-inform';
import AddLinks from './add-links';
import Overview from './overview';

import Modal from './modal';

import minusSquare from '@/public/minus-square.svg';
import emptyLogoContainer from '@/public/empty-logo.svg';
import defaultLogo from '@/public/default-logo.svg';
import binanceIcon from '@/public/binance.svg';
import dangerIcon from '@/public/danger.svg';
import ArrowSquareRight from '@/components/common/icons/arrow-square-right';
import ArrowSquareLeft from '@/components/common/icons/arrow-square-left';

const headlines = [
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

const initialDataProject = {
  blockchain: { name: 'Binance1', icon: binanceIcon.src, req: true },
  contractAddress: { value: '', req: true },
  name: { value: '', req: true },
  symbol: { value: '', req: true },
  launchDate: { value: new Date(Date.now()), req: true },
  description: { value: '', req: true },
  presaleProject: { value: false },
};

const initialLinksData = {
  website: { value: '' },
  telegram: { value: '' },
  twitter: { value: '' },
  discord: { value: '' },
  facebook: { value: '' },
  reddit: { value: '' },
  linktree: { value: '' },
};

const initialFile = { url: '', name: '' };

const MultiStepFormContainer: FC = () => {
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const projectFormRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<TSteps>(1);
  const [stepFrame, setStepFrame] = useState<string>('start');
  const [fileObject, setFileObject] = useState<{ url: string; name: string }>(initialFile);
  const [dataProject, setDataProject] = useState<IDataProject>(initialDataProject);
  const [linksData, setLinksData] = useState<IDataLinks>(initialLinksData);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [withoutErrors, setWithoutErrors] = useState<boolean>(false);

  const isMobile = useMedia({ maxWidth: 768 });

  const arrEmptyObj: Array<string> = useMemo(() => [], []);
  const checkedData = useCallback(
    (data: IDataProject) => {
      arrEmptyObj.length = 0;
      for (const key in data) {
        if (
          !data[key as keyof IDataProject].name?.length &&
          !data[key as keyof IDataProject].value?.toString()?.length &&
          data[key as keyof IDataProject].req
        ) {
          arrEmptyObj.push(key);
        }
      }
      setWithoutErrors(arrEmptyObj.length === 0);
    },
    [arrEmptyObj],
  );

  useEffect(() => {
    if (stepFrame === 'start') {
      setFileObject(initialFile);
      setDataProject(initialDataProject);
      setLinksData(initialLinksData);
    }
  }, [stepFrame]);

  useEffect(() => {
    if (step !== 2) return;
    checkedData(dataProject);
    const nextButton = nextButtonRef.current;
    const buttonEventClickListener = () => {
      if (withoutErrors) return;
      const projectContainer = projectFormRef.current;
      const inputs = projectContainer
        ? projectContainer.querySelectorAll('input, select, checkbox, textarea')
        : null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      inputs?.forEach((node: any) => {
        if (!node.innerText.length && !node.value) {
          node.classList.add('warning');
        }
      });
    };
    if (nextButton) {
      nextButtonRef.current.addEventListener('click', buttonEventClickListener);
    }

    return () => {
      if (nextButton) {
        nextButton.removeEventListener('click', buttonEventClickListener);
      }
    };
  }, [checkedData, dataProject, step, withoutErrors]);

  const onClickButtonHandler = (typeWithStep: string) => {
    console.log(typeWithStep, 'typeWithSteptypeWithStep');

    setStepFrame(typeWithStep);
  };

  const onSubmitHandler = () => {
    setIsOpenModal(true);
    console.log({ ...dataProject, ...linksData });
  };

  const getButtonStatus = () => {
    const status = (step === 1 && fileObject.name) || (step === 2 && withoutErrors) || step === 3;
    return !status;
  };

  return (
    <section className={styles.container}>
      <h1>Submit Coin</h1>
      <div className={styles.headlinesContainer}>
        {headlines.map((item) => {
          const active = item.id === step;
          return (
            <div key={item.id} className={`${styles.headlineBlock} ${active ? styles.active : ''}`}>
              <span>{item.id}</span>
              <h3>{item.headline}</h3>
            </div>
          );
        })}
      </div>
      {isMobile && step !== 1 && (
        <>
          <div className={`${styles.logoContainer} ${styles.mobileLogoContainer}`}>
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
          <div className={styles.attention}>
            <span className={styles.headline}>
              <Image src={dangerIcon.src} width={14} height={14} alt="attention" />
              Attention!
            </span>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <span className={styles.headline}>Optimal dimensions 512x512px, size up to 1MB</span>
          </div>
        </>
      )}
      {step === 1 && (
        <>
          <div className={styles.logoContainer}>
            <div
              className={styles.logoBack}
              style={{ backgroundImage: `url(${emptyLogoContainer.src})` }}
            >
              <img
                className={styles.logoImage}
                alt="logo"
                src={fileObject.url || defaultLogo.src}
              />
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
          <UploadImage
            stepFrame={stepFrame}
            setStep={setStep}
            setFileObject={setFileObject}
            fileObject={fileObject}
          />
        </>
      )}
      {step === 2 && (
        <ProjectInform
          stepFrame={stepFrame}
          setStep={setStep}
          dataProject={dataProject}
          setDataProject={setDataProject}
          refContainer={projectFormRef}
        />
      )}
      {step === 3 && (
        <AddLinks
          stepFrame={stepFrame}
          setStep={setStep}
          linksData={linksData}
          setLinksData={setLinksData}
        />
      )}
      {step === 4 && (
        <Overview stepFrame={stepFrame} setStep={setStep} data={{ ...dataProject, ...linksData }} />
      )}
      {isMobile && fileObject.name.length && (
        <div className={styles.mobileFile}>
          <span>Your file:</span>
          <div>
            <span>{fileObject.name}</span>
            <button
              type="button"
              className={styles.removeBtn}
              onClick={() => setFileObject({ url: defaultLogo.src, name: '' })}
            >
              <img src={minusSquare.src} alt="remove" />
            </button>
          </div>
        </div>
      )}
      <div className={`${styles.controls} ${step === 1 ? styles.controlBtnNextFirstStep : ''}`}>
        {step === 1 ? (
          ''
        ) : (
          <button
            className={styles.controlBtn}
            onClick={() => onClickButtonHandler(`back_${step - 1}`)}
          >
            <ArrowSquareLeft />
            Back
          </button>
        )}
        {step === 4 ? (
          <button className={styles.controlBtn} onClick={onSubmitHandler}>
            <ArrowSquareRight />
            Submit Coin
          </button>
        ) : (
          <button
            ref={nextButtonRef}
            className={`${styles.controlBtn} ${getButtonStatus() ? 'styles.disabled' : ''}`}
            onClick={() =>
              onClickButtonHandler(getButtonStatus() ? `next_${step + 1}` : `next_${step + 1}`)
            }
          >
            <ArrowSquareRight disabled={getButtonStatus()} />
            Continue
          </button>
        )}
      </div>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} setStepModal={setStep} setStepFrame={setStepFrame} />
      )}
    </section>
  );
};

export default MultiStepFormContainer;
