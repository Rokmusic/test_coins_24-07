import Image from 'next/image';
import { FC } from 'react';

import styles from './button.module.css';

interface Props {
  image?: string;
  text: string;
}

const Button: FC<Props> = ({ image, text }) => {
  return (
    <button className={styles.button}>
      {image && <Image src={image} alt="six figure" />}
      {text}
    </button>
  );
};

export default Button;
