import Games from './components/games';
import Promoted from './components/promoted';
import Trending from './components/trending';

import Banner from '@/components/common/banner';
import WithSidebar from '@/hoc/with-sidebar.hoc';

const Home = () => {
  return (
    <>
      <Banner />
      <Promoted />
      <Trending />
      <Games />
    </>
  );
};

export default WithSidebar(Home);
