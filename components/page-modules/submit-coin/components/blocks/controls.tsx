import { FC } from 'react';

import { TSteps } from '../../submit-coin.type';

import styles from './controls.module.css';

import ArrowSquareRight from '@/components/common/icons/arrow-square-right';
import ArrowSquareLeft from '@/components/common/icons/arrow-square-left';

interface IControlsProps {
  step: TSteps;
  onClickButtonHandler: (typeWithStep: string) => void;
  getButtonStatus: () => boolean;
  nextButtonRef: React.RefObject<HTMLButtonElement>;
  onSubmitHandler: () => void;
}

const Controls: FC<IControlsProps> = ({
  step,
  onClickButtonHandler,
  getButtonStatus,
  nextButtonRef,
  onSubmitHandler,
}) => {
  return (
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
          className={`${styles.controlBtn} ${getButtonStatus() ? styles.disabled : ''}`}
          onClick={() =>
            onClickButtonHandler(getButtonStatus() ? `next_${step}` : `next_${step + 1}`)
          }
        >
          <ArrowSquareRight />
          Continue
        </button>
      )}
    </div>
  );
};

export default Controls;
