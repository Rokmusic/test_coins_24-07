'use client';

import Image from 'next/image';

import { useMedia } from 'use-media';

import { useCallback, useState } from 'react';

// import { motion } from 'framer-motion';

import dynamic from 'next/dynamic';

import Link from 'next/link';

import styles from './header.module.css';

import binance from '@/public/binance.svg';
import etherium from '@/public/etherium.svg';
import arrows from '@/public/arrange-square.svg';
import arrowUp from '@/public/arrow-up.svg';
import arrowDown from '@/public/arrow-down.svg';
import twitter from '@/public/twitter.svg';
import telegram from '@/public/telegram.svg';
import logo from '@/public/logo.svg';
import sixFigure from '@/public/sixfigure.svg';
import searchLight from '@/public/search-light.svg';
import menu from '@/public/menu.svg';

import Button from '@/components/common/button';

const SidebarMobile = dynamic(() => import('@/components/common/layout/sidebar/mobile'));

export default function Header() {
  const isWide = useMedia({ minWidth: 992 });
  const [visible, setVisible] = useState(false);

  function onMobileHeader() {
    setVisible(true);
  }

  const getSharedCount = useCallback(
    (count: number) => {
      if (count >= 1000 && !isWide) return (count / 1000).toFixed(0) + 'K';

      return count / 1000;
    },
    [isWide],
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={`container ${styles.headerContent}`}>
            <div className={styles.headerFrame}></div>
            <div className={`slider ${styles.headerItems}`}>
              <div className={styles.headerItem}>
                <div className={styles.currencyInfo}>
                  <Image src={binance} alt="binance" />
                  BNB
                  <Image src={arrows} alt="arrows" />
                  $27,181
                  <div className={styles.headerPercent}>
                    1,37%
                    <Image src={arrowUp} alt="arrow-up" />
                  </div>
                </div>
                <div className={styles.currencyInfo}>
                  <Image src={etherium} alt="binance" />
                  ETH
                  <Image src={arrows} alt="arrows" />
                  $1.746
                  <div className={styles.headerPercent}>
                    1,37%
                    <Image src={arrowDown} alt="arrow-up" />
                  </div>
                </div>
              </div>
              <div className={styles.statistics}>
                <div className={styles.statItem}>
                  <span className={styles.statItemName}>Projects Listed:</span>
                  <span className={styles.statItemCount}>1,321</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statItemName}> Watchlist’s: </span>
                  <span className={styles.statItemCount}>72,312</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statItemName}> Total Votes:</span>
                  <span className={styles.statItemCount}>917,216</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statItemName}>Users: </span>
                  <span className={styles.statItemCount}>819,721</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statItemName}> Support Chains:</span>
                  <span className={styles.statItemCount}>8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.headerBottom}>
          <div className={styles.headerBottomContent}>
            <div className="container">
              <div className={styles.headerBottomItem}>
                <div className={styles.headerBottomItemContent}>
                  <Link href="/">
                    <Image src={logo} alt="logo" className={styles.logo} />
                  </Link>
                  <div className={styles.social}>
                    <Link href="#">
                      <div className={styles.socialItem}>
                        <Image src={telegram} alt="telegram" />
                        <span>{getSharedCount(1241)}</span>
                      </div>
                    </Link>
                    <Link href="#">
                      <div className={styles.socialItem}>
                        <Image src={twitter} alt="twitter" />
                        <span>{getSharedCount(8412)}</span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className={styles.rightBlock}>
                  {isWide && (
                    <div className={styles.searchFull}>
                      <div className={styles.searchInputContainer}>
                        <div className={styles.searchInputImage}>
                          <Image src={searchLight} alt="search" />
                        </div>
                        <input type="text" placeholder="Search" className={styles.searchInput} />
                      </div>
                      <Button text="Submit Coin" image={sixFigure} />
                    </div>
                  )}

                  {!isWide && (
                    <div className={styles.searchImage}>
                      <Image src={searchLight} alt="search" />
                    </div>
                  )}
                  <div onClick={onMobileHeader} className={styles.mobileMenu}>
                    <Image src={menu} alt="menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SidebarMobile isWide={isWide} visible={visible} setVisible={setVisible} />
      </header>
    </>
  );
}

// interface MarqueeWrapperProps extends PropsWithChildren {
//   isWide: boolean;
// }

// const MarqueeWrapper: FC<MarqueeWrapperProps> = (props) => {
//   const { isWide, children } = props;

//   return isWide ? (
//     children
//   ) : (
//     <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
//       <motion.div
//         animate={{ x: '-100%' }}
//         transition={{
//           repeat: Infinity,
//           duration: 5,
//           ease: 'linear',
//         }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };
