import { FC } from 'react';

import { TSteps } from '../../submit-coin.type';
import { headlines } from '../../data';

import styles from './headlines.module.css';

interface IHeadlinesProps {
  step: TSteps;
}

const Headlines: FC<IHeadlinesProps> = ({ step }) => {
  return (
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
  );
};

export default Headlines;
