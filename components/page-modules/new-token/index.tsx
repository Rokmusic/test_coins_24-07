import BornTokens from './components/born-tokens';

import Banner from '@/components/common/banner';
import WithSidebar from '@/hoc/with-sidebar.hoc';

const NewToken = () => {
  return (
    <>
      <Banner />
      <BornTokens />
    </>
  );
};

export default WithSidebar(NewToken);
