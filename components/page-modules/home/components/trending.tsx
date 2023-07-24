'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';

import { DataTable } from 'primereact/datatable';

import { Column } from 'primereact/column';

import { TieredMenu } from 'primereact/tieredmenu';

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

// import { PaginatorPageChangeEvent } from 'primereact/paginator';

import Link from 'next/link';

import { useMedia } from 'use-media';

import styles from './home-components.module.css';

import medal2 from '@/public/medal-star-2.svg';
import fire from '@/public/fire-2.svg';
import star from '@/public/star.svg';
import rocket from '@/public/rocket.svg';
import crown from '@/public/crown.svg';
import eco from '@/public/eco.svg';
import diamonds from '@/public/diamonds.svg';
import flag from '@/public/flag.svg';
import arrowUp from '@/public/arrow-up.svg';
import arrowUpSecond from '@/public/arrow-up-2.svg';
import arrowDown from '@/public/arrow-down.svg';
import arrowDownThird from '@/public/arrow-up-3.svg';
import arrowLeft from '@/public/arrow-left-2.svg';
import arrowRight from '@/public/arrow-right-2.svg';

import { fakeData } from '@/components/page-modules/home/data/home.repository';

interface Country {
  name: string;
  code: string;
}

const dropdownItems = [
  {
    label: (
      <button className={`${styles.dropdownItem} ${styles.active}`}>
        <Image src={fire} alt="fire" /> Trending
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Image src={rocket} alt="rocket" /> 24h Gainers
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Image src={crown} alt="crown" /> By Marketcap
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Image src={eco} alt="eco" /> Recently Listed
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Image src={diamonds} alt="diamonds" /> Daily Top
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Image src={flag} alt="flag" /> Presales
      </button>
    ),
    icon: '',
  },
  {
    label: (
      <button className={styles.dropdownItem}>
        <Image src={fire} alt="fire" /> WatchList
      </button>
    ),
    icon: '',
  },
];

const Trending = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const [selectedTab, setSelectedTab] = useState(0);

  // const [first, setFirst] = useState(0);
  // const [rows, setRows] = useState(10);

  const isMobile = useMedia({ maxWidth: 768 });

  const [trendingSpot, setTrendingSpot] = useState(false);

  // const onPageChange = (event: PaginatorPageChangeEvent) => {
  //   setFirst(event.first);
  //   setRows(event.rows);
  // };

  const menu = useRef(null);

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

  const elements = [
    {
      text: 'Trending',
      src: fire,
    },
    {
      text: '24h Gainers',
      src: rocket,
    },
    {
      text: 'By Marketcap',
      src: crown,
    },
    {
      text: 'Recently Listed',
      src: eco,
    },
    {
      text: 'Daily Top',
      src: diamonds,
    },
    {
      text: 'Presales',
      src: flag,
    },
    {
      text: 'WatchList',
      src: fire,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onMenuToggle = (e: any) => {
    if (menu.current && isMobile) {
      setTrendingSpot((t) => !t);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      menu?.current.toggle(e);
    }
  };

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

  const chainBody = (data: FakeData) => {
    const {
      chain: { icon, title },
    } = data;

    return (
      <div className={styles.chainContainer}>
        <Image width={10} src={icon} alt={title} />
        {title}
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

  const dayBody = (data: FakeData) => {
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

  const marketBody = (data: FakeData) => {
    return <div className={styles.marketContainer}>${data.market}K</div>;
  };

  const volumeBody = (data: FakeData) => {
    return <div className={styles.marketContainer}>${data.volume}</div>;
  };

  const ageBody = (data: FakeData) => {
    return <div className={styles.marketContainer}>{data.age} month</div>;
  };

  const votesBody = (data: FakeData) => {
    const {
      votes: { count, square },
    } = data;

    return (
      <div className={styles.votesContainer}>
        <div className={styles.votesRelative}>
          <div className={styles.votesFrame}></div>
          <div className={styles.votesCountContainer}>
            <div className={styles.votesCount}>{count}K</div>
            <div className={styles.square}>{square}</div>
          </div>
          <div className={styles.votesBtn}>
            <div className={styles.votesBtnText}>Vote</div>
          </div>
        </div>
      </div>
    );
  };

  const onSelectTab = (id: number) => {
    setSelectedTab(id);
  };

  return (
    <div className={styles.sectionPromoted}>
      <div className={styles.sectionTitleContainer}>
        <h3 onClick={onMenuToggle} className={styles.sectionTitleNormal}>
          <Image src={medal2} alt="medal2" />
          Trending Spot
        </h3>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <TieredMenu model={dropdownItems} popup ref={menu} breakpoint="768px" />
        {isMobile && (
          <Image
            src={trendingSpot ? arrowUpSecond : arrowDownThird}
            alt="arrow"
            className={styles.arrow}
          />
        )}
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {elements.map((el, i) => (
            <button
              key={i}
              onClick={() => onSelectTab(i)}
              className={`${styles.tab} ${i === selectedTab ? styles.activeTab : ''}`}
            >
              <Image src={el.src} alt={el.text} /> {el.text}
            </button>
          ))}
        </div>

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
        <div className="card">
          <DataTable
            dataKey="id"
            value={fakeData}
            lazy
            sortMode="multiple"
            resizableColumns
            scrollable
          >
            <Column body={starBody} header="" sortable></Column>
            <Column body={nameBody} header="Name" className="table-shadow" sortable></Column>
            <Column body={votesBody} header="Votes" className="votes" sortable></Column>
            <Column body={chainBody} header="Chain" sortable></Column>
            <Column body={hourBody} header="1h %" sortable></Column>
            <Column body={dayBody} header="24h %" sortable></Column>
            <Column body={marketBody} header="Market Cap %" sortable></Column>
            <Column body={volumeBody} header="Volume" sortable></Column>
            <Column body={ageBody} header="Age" sortable></Column>
            <Column body={votesBody} header="Votes" className="votes-second" sortable></Column>
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

export default Trending;
