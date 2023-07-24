'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DataTable } from 'primereact/datatable';

import { Column } from 'primereact/column';

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

// import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

import Link from 'next/link';

// import { useMedia } from 'use-media';

import styles from '../../home/components/home-components.module.css';

import cake from '@/public/cake.svg';
// import fire from '@/public/fire-2.svg';
import star from '@/public/star.svg';
// import rocket from '@/public/rocket.svg';
// import crown from '@/public/crown.svg';
// import eco from '@/public/eco.svg';
// import diamonds from '@/public/diamonds.svg';
// import flag from '@/public/flag.svg';
import arrowUp from '@/public/arrow-up.svg';
import arrowDown from '@/public/arrow-down.svg';
// import arrowUpSecond from '@/public/arrow-up-2.svg';
import arrowLeft from '@/public/arrow-left-2.svg';
import arrowRight from '@/public/arrow-right-2.svg';

import { fakeTokenData } from '@/components/page-modules/home/data/home.repository';

interface Country {
  name: string;
  code: string;
}

const BornTokens = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  // const [selectedTab, setSelectedTab] = useState(0);

  // const [first, setFirst] = useState(0);
  // const [rows, setRows] = useState(10);

  // const isMobile = useMedia({ maxWidth: 727 });

  // const onPageChange = (event: PaginatorPageChangeEvent) => {
  //   setFirst(event.first);
  //   setRows(event.rows);
  // };

  // const menu = useRef(null);

  const countries: Country[] = [
    { name: 'Test', code: 'AU' },
    { name: 'Test', code: 'BR' },
    { name: 'Test', code: 'CN' },
    { name: 'Test', code: 'EG' },
    { name: 'Test', code: 'FR' },
    { name: 'Test', code: 'DE' },
    { name: 'Test', code: 'IN' },
    { name: 'Test', code: 'JP' },
    { name: 'Test', code: 'ES' },
    { name: 'Test', code: 'US' },
  ];

  // const onMenuToggle = (e: any) => {
  //   if (menu.current) {
  //     // @ts-ignore
  //     menu?.current.toggle(e);
  //   }
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectedCountryTemplate = (option: Country, props: any) => {
    if (option) {
      return <div className={styles.option}>{option.name}</div>;
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option: Country) => {
    return <div className={styles.option}>{option.name}</div>;
  };

  const starBody = () => {
    return (
      <div>
        <Image src={star} className={styles.starIcon} alt="star" />
      </div>
    );
  };

  const nameBody = (data: FakeData) => {
    const {
      name: { icon, shared, title },
    } = data;
    return (
      <div className={styles.nameColumnContainer}>
        <Link href="#">
          <div className={styles.nameColumnContent}>
            <Image className={styles.currencyIcon} src={icon} alt={title} />
            <div className={styles.currencyContainer}>
              <span className={styles.title}>{title}</span>
              <div className={styles.sharedContent}>
                <Image src={shared.icon} alt={String(shared.count)} />
                <span className={styles.sharedCount}>{shared.count}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  const hourBody = (data: FakeData) => {
    const {
      hour: { pain, percent },
    } = data;

    return (
      <div className={`${styles.hourContainer} ${pain ? styles.hourPain : ''}`}>
        {percent}%
        <Image width={18} src={pain ? arrowUp : arrowDown} alt={String(percent)} />
      </div>
    );
  };

  const dayBody = (data: FakeTokenData) => {
    const {
      day: { pain, percent },
    } = data;

    return (
      <div className={`${styles.dayContainer} ${pain ? styles.hourPain : ''}`}>
        {percent}%
        <Image width={18} src={pain ? arrowUp : arrowDown} alt={String(percent)} />
      </div>
    );
  };

  const marketBody = (data: FakeTokenData) => {
    return <div className={styles.marketContainer}>${data.market}K</div>;
  };

  const lpBody = (data: FakeTokenData) => {
    return <div className={styles.marketContainer}>${data.lp}K</div>;
  };

  const txnBody = (data: FakeTokenData) => {
    return <div className={styles.txnData}>{data.txn}</div>;
  };

  const ageBody = (data: FakeData) => {
    return <div className={styles.marketContainer}>{data.age} min</div>;
  };

  const socialBody = (data: FakeTokenData) => {
    const { social } = data;

    return (
      <div className={styles.socialData}>
        {social.map((s) => (
          <Image className={styles.socialDataImage} key={s.title} src={s.icon} alt={s.title} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.sectionPromoted}>
      <div className={styles.sectionTitleContainer}>
        <h3 className={styles.sectionTitleNormal}>
          <Image src={cake} alt="cake" />
          New born tokens
        </h3>
      </div>
      <div className={styles.titleDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div className={styles.tabsContainer}>
        <div className={styles.trendingDropdownsContainer}>
          <div className={styles.dropdown}>
            <span className={styles.dropdownTitle}>Network / Chain</span>
            <Dropdown
              dataKey="code"
              value={selectedCountry}
              onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)}
              options={countries}
              optionLabel="name"
              placeholder="All / Pick One"
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="no-scrollbar"
            />
          </div>
          <div className={styles.dropdown}>
            <span className={styles.dropdownTitle}>Platform</span>
            <Dropdown
              dataKey="code"
              value={selectedCountry}
              onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)}
              options={countries}
              optionLabel="name"
              placeholder="Platform"
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="no-scrollbar"
            />
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className="born-tokens-table">
          <DataTable
            dataKey="id"
            value={fakeTokenData}
            lazy
            sortMode="multiple"
            resizableColumns
            scrollable
          >
            <Column body={starBody} header="" sortable></Column>

            <Column body={nameBody} header="Name" className="with-shadow" sortable></Column>
            {/* {isMobile && (
              <Column
                body={socialBody}
                header='Social'
                className='votes'
                sortable
              ></Column>
            )} */}

            <Column body={socialBody} header="Social" sortable></Column>
            <Column body={hourBody} header="1h %" sortable></Column>
            <Column body={dayBody} header="24h %" sortable></Column>
            <Column body={txnBody} header="TXN" sortable></Column>

            <Column body={marketBody} header="Market Cap" sortable></Column>

            <Column body={lpBody} header="LP" sortable></Column>
            <Column body={ageBody} header="Age" sortable></Column>
            {/* 
            {!isMobile && (
              <Column
                body={socialBody}
                header='Social'
                className='votes'
                sortable
              ></Column> */}
            {/* )} */}
          </DataTable>
        </div>
        <div className={styles.paginationContainer}>
          <div className={styles.pagination}>
            <Image src={arrowLeft} alt="arrow-left" className={styles.arrowPagination} />
            <div className={`${styles.pageContainer} ${styles.pageContainerActive}`}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>1</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>2</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>3</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>4</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>5</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>...</div>
              </div>
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.pageItem}>
                <div className={styles.pageNumber}>24</div>
              </div>
            </div>
            <Image src={arrowRight} alt="arrow-right" className={styles.arrowPagination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BornTokens;
