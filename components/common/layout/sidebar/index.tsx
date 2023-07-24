import Image from 'next/image';

import Link from 'next/link';

import styles from './sidebar.module.css';

import flash from '@/public/flash.svg';
import web from '@/public/web.svg';
import ecology from '@/public/ecology.svg';
import jewelery from '@/public/jewelery.svg';
import time from '@/public/time.svg';
import cash from '@/public/cash-bag.svg';

import binanceLight from '@/public/binance-light.svg';
import etheriumLight from '@/public/etherium-light.svg';
import dogecoinLight from '@/public/dogecoin-light.svg';
import polygonLight from '@/public/polygon-light.svg';
import cronosLight from '@/public/cronos-light.svg';

import scanner from '@/public/scanner.svg';
import mp3 from '@/public/mp3.svg';

import ads from '@/public/ads.svg';
import fire from '@/public/fire.svg';
import graph from '@/public/graph.svg';

import twitter from '@/public/twitter.svg';
import telegram from '@/public/telegram.svg';

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.sidebar}>
        <div>
          <h4 className={styles.headline}>Coin Ranks</h4>

          <div className={styles.sidebarItem}>
            <Link href="#">
              <div className={styles.itemName}>
                <Image src={flash} alt="flash" />
                <span>1h Gainers</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={web} alt="web" />
                <span>24h Gainers</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={ecology} alt="ecology" />
                <span>Recently listed</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={jewelery} alt="jewelery" />
                <span>Daily Top</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={time} alt="time" />
                <span>All Time Best</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={cash} alt="cash" />
                <span>New Born Tokens</span>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <h4 className={styles.headline}>Coin Ranks</h4>

          <div className={styles.sidebarItem}>
            <Link href="#">
              <div className={styles.itemName}>
                <Image src={binanceLight} alt="binanceLight" />
                <span>Binance</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={etheriumLight} alt="etheriumLight" />
                <span>24h Gainers</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={dogecoinLight} alt="dogecoinLight" />
                <span>Dogechain</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={polygonLight} alt="polygonLight" />
                <span>Polygon</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={cronosLight} alt="cronosLight" />
                <span>Cronos</span>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <h4 className={styles.headline}>Others</h4>

          <div className={styles.sidebarItem}>
            <Link href="#">
              <div className={styles.itemName}>
                <Image src={scanner} alt="scanner" />
                <span>Contract Scanner</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={mp3} alt="mp3" />
                <span>Games</span>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <h4 className={styles.headline}>Advertise</h4>

          <div className={styles.sidebarItem}>
            <Link href="#">
              <div className={styles.itemName}>
                <Image src={graph} alt="graph" />
                <span>Services & prices</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={fire} alt="fire" />
                <span>Promote Coin</span>
              </div>
            </Link>

            <Link href="#">
              <div className={styles.itemName}>
                <Image src={ads} alt="ads" />
                <span>Banners Ads</span>
              </div>
            </Link>
          </div>
        </div>
        <button className={styles.buttonSubmit}>+ Submit Coin</button>
        <div className={styles.asideSocial}>
          <Link href="#">
            <div className={styles.asideSocialItem}>
              <Image src={telegram} alt="telegram" />
              <span>1.241</span>
            </div>
          </Link>
          <Link href="#">
            <div className={styles.asideSocialItem}>
              <Image src={twitter} alt="twitter" />
              <span>8.412</span>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
}
