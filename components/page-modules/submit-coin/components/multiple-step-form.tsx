'use client';

import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMedia } from 'use-media';

import { IDataLinks, IDataProject, TSteps } from '../submit-coin.type';
import { initialDataProject, initialFile, initialLinksData } from '../data';

import styles from './multiple-spep-form.module.css';

import UploadImage from './upload-image';
import ProjectInform from './project-inform';
import AddLinks from './add-links';
import Overview from './overview';
import Modal from './modal';

import Headlines from './blocks/headlines';
import Controls from './blocks/controls';
import LogoContainer from './blocks/logoContainer';
import MobileLogoContainer from './blocks/mobileLogoContainer';

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
  }, [checkedData, dataProject, step]);

  const onClickButtonHandler = (typeWithStep: string) => {
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
      <h1>Submit {isMobile ? 'your ' : ''}Coin</h1>
      <Headlines step={step} />
      <LogoContainer
        step={step}
        isMobile={isMobile}
        fileObject={fileObject}
        setFileObject={setFileObject}
      />
      {step === 1 && (
        <>
          <UploadImage
            stepFrame={stepFrame}
            setStep={setStep}
            setFileObject={setFileObject}
            fileObject={fileObject}
          />
          <MobileLogoContainer
            isMobile={isMobile}
            fileObject={fileObject}
            setFileObject={setFileObject}
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
      <Controls
        step={step}
        onClickButtonHandler={onClickButtonHandler}
        getButtonStatus={getButtonStatus}
        nextButtonRef={nextButtonRef}
        onSubmitHandler={onSubmitHandler}
      />
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} setStepModal={setStep} setStepFrame={setStepFrame} />
      )}
    </section>
  );
};

export default MultiStepFormContainer;
