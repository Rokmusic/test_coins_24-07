'use client';

import { FC } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

import styles from './banner.module.css';

import beBold from '@/public/be-bold-banner.svg';
import bitcoinWallet from '@/public/bitcoin-wallet-banner.svg';
import bitcoinWalletSecond from '@/public/bitcoin-wallet-banner-2.svg';
import bitcoinWalletThird from '@/public/bitcoin-wallet-banner-3.svg';
import bitcoinWalletMobile from '@/public/bitcoin-wallet-mobile.svg';

const Banner: FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`banners ${styles.container}`}>
      <div>
        <Image src={beBold} alt="be-bold" className={styles.firstBanner} />
        <Image src={bitcoinWalletMobile} alt="be-bold" className={styles.firstBannerMobile} />
      </div>
      <Slider {...settings}>
        <Image src={bitcoinWallet} alt="be-bold" className={styles.slideItem} />
        <Image src={bitcoinWalletThird} alt="be-bold" className={styles.slideItem} />
        <Image src={bitcoinWalletSecond} alt="be-bold" className={styles.slideItem} />
        <Image src={bitcoinWalletThird} alt="be-bold" className={styles.slideItem} />
      </Slider>
    </div>
  );
};

export default Banner;
