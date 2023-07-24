'use client';

import Image from 'next/image';

import dynamic from 'next/dynamic';

import Link from 'next/link';

import styles from './home-components.module.css';

import gameboy from '@/public/gameboy.svg';
import binance from '@/public/binance.svg';
import arrowLeft from '@/public/arrow-left.svg';
import arrowRight from '@/public/arrow-right.svg';
import game from '@/assets/images/game.png';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PrevArrow(props: any) {
  const { ...res } = props;
  return (
    <div {...res}>
      <Image src={arrowLeft} alt="arrow-left" />
    </div>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NextArrow(props: any) {
  const { ...res } = props;
  return (
    <div {...res}>
      <Image src={arrowRight} alt="arrow-left" />
    </div>
  );
}

const Games = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.sectionPromoted}>
      <div className={styles.sectionTitleContainer}>
        <Image src={gameboy} alt="gameb-boy" />
        <h3 className={styles.sectionTitleNormal}>Blockchain Games</h3>
      </div>

      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {[...new Array(12)].map((_, i) => (
            <GameItem key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const GameItem = () => {
  return (
    <Link href="#">
      <div className={styles.sliderItem}>
        <div className={styles.slideTop}>
          <Image src={game} alt="game" />
          <div className={styles.slideCount}>10,6K</div>
        </div>
        <div className={styles.slideTitle}>Battle-Royal</div>

        <h3 className={styles.slideDesc}>Three Kingdom Battles</h3>

        <button className={styles.slideBtn}>Vote</button>
        <div className={styles.slideIcons}>
          <Image src={binance} alt="binance" />
          <Image src={binance} alt="binance" />
          <Image src={binance} alt="binance" />
        </div>
      </div>
    </Link>
  );
};

export default Games;
