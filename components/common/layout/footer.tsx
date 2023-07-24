import Image from 'next/image';

import Link from 'next/link';

import styles from './footer.module.css';

import logo from '@/public/logo.svg';
import facebook from '@/public/facebook-link.svg';
import instagram from '@/public/instagram-link.svg';
import twitter from '@/public/twitter-link.svg';
import telegram from '@/public/telegram-link.svg';
import discord from '@/public/discord-link.svg';
import medium from '@/public/medium-link.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>
        <div className="container">
          <div className={styles.footerContainer}>
            <div className={styles.footerFirstPart}>
              <div className={styles.footerItem}>
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
                <p className={styles.footerDesc}>
                  We are the best crypto tokens ranking & upvoting service! Easily find your token
                  by price, marketcap, liquidity and more, check it for scams, rug pull, honeypot...
                  Buy and grow faster! Just what you need – CoinsGEM
                </p>
                <div className={styles.footerSocial}>
                  <a href="#" target="_blank">
                    <Image className={styles.footerSocialItem} src={twitter} alt="twitter" />
                  </a>
                  <a href="#" target="_blank">
                    <Image className={styles.footerSocialItem} src={telegram} alt="telegram" />
                  </a>
                  <a href="#" target="_blank">
                    <Image className={styles.footerSocialItem} src={instagram} alt="instagram" />
                  </a>
                  <a href="#" target="_blank">
                    <Image className={styles.footerSocialItem} src={facebook} alt="facebook" />
                  </a>
                  <a href="#" target="_blank">
                    <Image className={styles.footerSocialItem} src={discord} alt="discord" />
                  </a>
                  <a href="#" target="_blank">
                    <Image className={styles.footerSocialItem} src={medium} alt="medium" />
                  </a>
                </div>
              </div>
              <div className={styles.footerNav}>
                <div className={styles.footerNavItem}>
                  <h3 className={styles.footerNavItemTitle}>Coin ranking</h3>
                  <ul className={styles.footerNavItemList}>
                    <li>
                      <a href="#">List of coins</a>
                    </li>
                    <li>
                      <a href="#">Submit Coin</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.footerNavItem}>
                  <h3 className={styles.footerNavItemTitle}>Games</h3>
                  <ul className={styles.footerNavItemList}>
                    <li>
                      <a href="#">DeFI Games</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.footerNavItem}>
                  <h3 className={styles.footerNavItemTitle}>Advertise</h3>
                  <ul className={styles.footerNavItemList}>
                    <li>
                      <a href="#">Promote Coin</a>
                    </li>

                    <li>
                      <a href="#">Banners</a>
                    </li>
                    <li>
                      <a href="#">Services & prices</a>
                    </li>
                    <li>
                      <a href="#">KYC</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.footerNavItem}>
                  <h3 className={styles.footerNavItemTitle}>Popular</h3>
                  <ul className={styles.footerNavItemList}>
                    <li>
                      <a href="#">Trending</a>
                    </li>
                    <li>
                      <a href="#">Recently listed</a>
                    </li>
                    <li>
                      <a href="#">All Time Best</a>
                    </li>
                    <li>
                      <a href="#">Top Gainers</a>
                    </li>
                    <li>
                      <a href="#">New Born Tokens</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>CoinsGEM – Best New Crypto Tokens & Coins © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
