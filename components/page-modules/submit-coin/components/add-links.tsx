import { FC, useEffect } from 'react';

import Image from 'next/image';

import { InputText } from 'primereact/inputtext';

import { useMedia } from 'use-media';

import { ILinksDataProps, ILinksValue, TSteps, TTypesDataLinks } from '../submit-coin.type';

import styles from './add-links.module.css';

import telegramIcon from '@/public/telegram-white.svg';
import twitterIcon from '@/public/twitter-white.svg';
import discordIcon from '@/public/discord-white.svg';
import facebookIcon from '@/public/facebook-white.svg';
import redditIcon from '@/public/reddit-white.svg';

import telegramIconXl from '@/public/telegram-link.svg';
import twitterIconXl from '@/public/twitter-link.svg';
import discordIconXl from '@/public/discord-link.svg';
import facebookIconXl from '@/public/facebook-link.svg';
import redditIconXl from '@/public/reddit-link.svg';

const AddLinks: FC<ILinksDataProps> = ({ stepFrame, setStep, linksData, setLinksData }) => {
  const isMobile = useMedia({ maxWidth: 768 });
  useEffect(() => {
    const type = stepFrame.split('_')[0];
    const step = Number(stepFrame.split('_')[1]);
    if (step === 3) return;
    if (type !== 'start') setStep(step as TSteps);
  }, [setStep, stepFrame]);

  const onChangeHandler = (type: TTypesDataLinks, data: ILinksValue) => {
    setLinksData((prev) => ({
      ...prev,
      [type]: { ...prev[type], value: data.value },
    }));
  };
  return (
    <div className={styles.linksContainer}>
      <label className={`${styles.containerInput}`}>
        <div>
          <span>Website</span>
        </div>
        <InputText
          value={linksData.website.value as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('website', { value: e.target.value })
          }
          className={`${styles.input} ${styles.inputSocial}`}
          placeholder="Enter link"
        />
      </label>

      <label className={`${styles.containerInput}`}>
        <div>
          <span>Telegram</span>
        </div>
        <Image
          className={styles.inputIconSocial}
          src={isMobile ? telegramIconXl.src : telegramIcon.src}
          width={isMobile ? 24 : 14}
          height={isMobile ? 24 : 14}
          alt="telegram"
        />
        <InputText
          value={linksData.telegram.value as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('telegram', { value: e.target.value })
          }
          className={`${styles.input} ${styles.inputSocial}`}
          placeholder="t.me/"
        />
      </label>

      <label className={`${styles.containerInput}`}>
        <div>
          <span>Twitter</span>
        </div>
        <Image
          className={styles.inputIconSocial}
          src={isMobile ? twitterIconXl : twitterIcon.src}
          width={isMobile ? 24 : 14}
          height={isMobile ? 24 : 14}
          alt="Twitter"
        />
        <InputText
          value={linksData.twitter.value as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('twitter', { value: e.target.value })
          }
          className={`${styles.input} ${styles.inputSocial}`}
          placeholder="twitter.com/"
        />
      </label>
      <label className={`${styles.containerInput}`}>
        <div>
          <span>Discord</span>
        </div>
        <Image
          className={styles.inputIconSocial}
          src={isMobile ? discordIconXl.src : discordIcon.src}
          width={isMobile ? 24 : 15}
          height={isMobile ? 24 : 15}
          alt="Discord"
        />
        <InputText
          value={linksData.discord.value as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('discord', { value: e.target.value })
          }
          className={`${styles.input} ${styles.inputSocial}`}
          placeholder="discord.com/"
        />
      </label>

      <label className={`${styles.containerInput}`}>
        <div>
          <span>Facebook</span>
        </div>
        <Image
          className={styles.inputIconSocial}
          src={isMobile ? facebookIconXl.src : facebookIcon.src}
          width={isMobile ? 24 : 14}
          height={isMobile ? 24 : 14}
          alt="Facebook"
        />
        <InputText
          value={linksData.facebook.value as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('facebook', { value: e.target.value })
          }
          className={`${styles.input} ${styles.inputSocial}`}
          placeholder="facebook.com/"
        />
      </label>

      <label className={`${styles.containerInput}`}>
        <div>
          <span>Reddit</span>
        </div>
        <Image
          className={styles.inputIconSocial}
          src={isMobile ? redditIconXl.src : redditIcon.src}
          width={isMobile ? 24 : 15}
          height={isMobile ? 24 : 15}
          alt="Reddit"
        />
        <InputText
          value={linksData.reddit.value as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('reddit', { value: e.target.value })
          }
          className={`${styles.input} ${styles.inputSocial}`}
          placeholder="reddit.com/"
        />
      </label>

      <label className={`${styles.containerInput}`}>
        <div>
          <span>Linktree</span>
        </div>
        <InputText
          value={linksData.linktree.value as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('linktree', { value: e.target.value })
          }
          className={`${styles.input} ${styles.inputSocial}`}
          placeholder="linktree.com/"
        />
      </label>
    </div>
  );
};

export default AddLinks;
