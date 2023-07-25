import { FC, useRef } from 'react';

import { useClickOutside } from 'primereact/hooks';

import Link from 'next/link';

import { useMedia } from 'use-media';

import { IModalProps } from '../submit-coin.type';

import styles from './modal.module.css';

import bgModal from '@/assets/images/modal-steps.webp';
import bgFrameModal from '@/public/bg-frame-modal.svg';

const Modal: FC<IModalProps> = ({ setIsOpenModal, setStepModal, setStepFrame }) => {
  const isMobile = useMedia({ maxWidth: 768 });
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => {
    setIsOpenModal(false);
  });
  const onClickButtonClose = () => {
    setStepFrame('start');
    setStepModal(1);
    setIsOpenModal(false);
  };
  return (
    <div
      ref={modalRef}
      className={styles.modalContainer}
      style={{ backgroundImage: `url(${bgModal.src})` }}
    >
      <div
        className={styles.modalFrame}
        style={{ backgroundImage: isMobile ? '' : `url(${bgFrameModal.src})` }}
      >
        <h3 className={styles.headline_3}>You coin has submitted on our site!</h3>
        <div className={styles.promoteContainer}>
          <div className={styles.headline}>
            Promote<span className={styles.withoutGradient}> your token & Start </span>Earn
            <span className={styles.withoutGradient}> Money</span>
          </div>
          <span className={styles.justFrom}>Just from 0.2 BNB/Day</span>
          <p className={styles.paragraph}>
            Consider promoting your coin and get listed on top of every main page! Promoted coins
            are also become verifed and will be listed on all toplists.
          </p>
        </div>
        <div className={styles.controls}>
          <button onClick={onClickButtonClose} className={styles.no}>
            NO, THANKS
          </button>
          <button className={styles.promote}>
            <Link href={'#'} className={styles.linkPromote}>
              I WANT TO PROMOTE!
            </Link>
          </button>
        </div>
        <button onClick={onClickButtonClose} className={styles.btnClose}>
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default Modal;
