'use client';

import React, { FC, useEffect, useRef } from 'react';

import { Dropdown, DropdownChangeEvent, DropdownProps } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import DatePicker from 'react-datepicker';

import { IDataProjectValue, IPojectProps, TSteps, TTypesDataProject } from '../submit-coin.type';

import styles from './project-inform.module.css';

import 'react-datepicker/dist/react-datepicker.css';

import binanceIcon from '@/public/binance.svg';
import etheriumIcon from '@/public/etherium.svg';
import TickSquare from '@/components/common/icons/tick-square';
import Calendar from '@/components/common/icons/calendar';

const blockchains = [
  { name: 'Binance2', icon: binanceIcon.src },
  { name: 'Binance3', icon: binanceIcon.src },
  { name: 'etherium1', icon: etheriumIcon.src },
  { name: 'etherium2', icon: etheriumIcon.src },
  { name: 'etherium3', icon: etheriumIcon.src },
];

const ProjectInform: FC<IPojectProps> = ({
  stepFrame,
  setStep,
  dataProject,
  setDataProject,
  refContainer,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const type = stepFrame.split('_')[0];
    const step = Number(stepFrame.split('_')[1]);
    if (step === 2) return;
    if (type !== 'start') setStep(step as TSteps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setStep, stepFrame]);

  const onChangeHandler = (type: TTypesDataProject, data: IDataProjectValue) => {
    inputRef.current ? inputRef.current.classList.remove('warning') : () => {};

    switch (type) {
      case 'presaleProject':
        setDataProject((prev) => ({
          ...prev,
          [type]: { ...prev[type], value: !prev[type].value },
        }));
        break;
      case 'blockchain':
        setDataProject((prev) => ({
          ...prev,
          [type]: { ...prev[type], name: data.name, icon: data.icon },
        }));
        break;
      default:
        setDataProject((prev) => ({
          ...prev,
          [type]: { ...prev[type], value: data.value },
        }));
        break;
    }
  };

  const selectedTemplate = (option: IDataProjectValue, props: DropdownProps) => {
    if (dataProject.blockchain.icon) {
      return (
        <div className={styles.option}>
          <img
            className={styles.optionImage}
            alt={dataProject.blockchain.name}
            src={dataProject.blockchain.icon}
          />
          <span>{dataProject.blockchain.name}</span>
        </div>
      );
    }
    if (option) {
      return (
        <div className={styles.option}>
          <img className={styles.optionImage} alt={option.name} src={option.icon} />
          <span>{option.name}</span>
        </div>
      );
    }
    return <div className={styles.option}>{props.placeholder}</div>;
  };

  const optionTemplate = (option: IDataProjectValue) => {
    if (option) {
      return (
        <div className={styles.option}>
          <img className={styles.optionImage} alt={option.name} src={option.icon} />
          <span>{option.name}</span>
        </div>
      );
    }
  };
  return (
    <div ref={refContainer} className={`project-info ${styles.projectContainer}`}>
      <label className={`${styles.containerInput}`}>
        <div>
          <span>Blockchain</span>
          {dataProject.blockchain.req && <span className={styles.required}>required</span>}
        </div>
        <Dropdown
          dataKey="name"
          value={dataProject.blockchain}
          onChange={(e: DropdownChangeEvent) => onChangeHandler('blockchain', e.value)}
          options={blockchains}
          optionLabel="name"
          placeholder="Blockchain"
          valueTemplate={selectedTemplate}
          itemTemplate={optionTemplate}
          className="no-scrollbar"
          required={dataProject.blockchain.req}
        />
      </label>

      <label className={`${styles.containerInput}`}>
        <div>
          <span>Contract address</span>
          {dataProject.contractAddress.req && <span className={styles.required}>required</span>}
        </div>
        <InputText
          value={dataProject.contractAddress.value as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('contractAddress', { value: e.target.value })
          }
          className={`${styles.input}`}
          placeholder="0xb27fsgu3y45gijo42gúuig4iiofq3iojfoijcioj5tcc"
          required={dataProject.contractAddress.req}
          ref={inputRef}
        />
        {dataProject.contractAddress.value?.toString() && (
          <span className={styles.inputIcon}>
            <TickSquare />
          </span>
        )}
      </label>

      <label className={`${styles.containerInput}`}>
        <div>
          <span>Name</span>
          {dataProject.name.req && <span className={styles.required}>required</span>}
        </div>
        <InputText
          value={dataProject.name.value as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('name', { value: e.target.value })
          }
          className={`${styles.input}`}
          placeholder="Bitcoin"
          required={dataProject.name.req}
        />
      </label>

      <label className={`${styles.containerInput}`}>
        <div>
          <span>Symbol</span>
          {dataProject.symbol.req && <span className={styles.required}>required</span>}
        </div>
        <InputText
          value={dataProject.symbol.value as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('symbol', { value: e.target.value })
          }
          className={`${styles.input}`}
          placeholder="BTC"
          required={dataProject.symbol.req}
        />
      </label>

      <label className={`${styles.containerInput} ${styles.dateInput}`}>
        <div>
          <span>Launch date</span>
          {dataProject.launchDate.req && <span className={styles.required}>required</span>}
        </div>
        <DatePicker
          selected={dataProject.launchDate.value as Date}
          onChange={(date) =>
            onChangeHandler('launchDate', {
              value: date ? (date.getTime() as unknown as string) : undefined,
            })
          }
        />
        <span className={styles.inputIcon}>
          <Calendar />
        </span>
      </label>

      <label className={`${styles.containerInput}`}>
        <div>
          <span>Description</span>
          {dataProject.description.req && <span className={styles.required}>required</span>}
        </div>
        <InputTextarea
          value={dataProject.description.value as string}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChangeHandler('description', { value: e.target.value })
          }
          rows={5}
          cols={30}
          required={dataProject.description.req}
        />
      </label>
      <label className={styles.containerToogle}>
        <div
          onClick={() => onChangeHandler('presaleProject', { value: 'change' })}
          className={`${styles.toogleBtn} ${
            dataProject.presaleProject.value ? styles.activeKnob : ''
          }`}
        >
          <div className={`${styles.knob}`} />
        </div>
        <span onClick={() => onChangeHandler('presaleProject', { value: 'change' })}>
          Presale Project
        </span>
      </label>
    </div>
  );
};

export default ProjectInform;
