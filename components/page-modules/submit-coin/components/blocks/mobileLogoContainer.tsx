import { Dispatch, FC, SetStateAction } from 'react';

import styles from './mobileLogoContainer.module.css';

import minusSquare from '@/public/minus-square.svg';
import defaultLogo from '@/public/default-logo.svg';

interface IMobileLogoContainer {
  isMobile: boolean;
  fileObject: { url: string; name: string };
  setFileObject: Dispatch<SetStateAction<{ url: string; name: string }>>;
}

const MobileLogoContainer: FC<IMobileLogoContainer> = ({ isMobile, fileObject, setFileObject }) => {
  return (
    <>
      {isMobile && fileObject.name && (
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
    </>
  );
};

export default MobileLogoContainer;
