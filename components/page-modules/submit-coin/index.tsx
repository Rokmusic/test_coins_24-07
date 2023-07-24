import MultiStepFormContainer from './components/multiple-step-form';

import WithSidebar from '@/hoc/with-sidebar.hoc';

const SubmitCoin = () => {
  return (
    <>
      <MultiStepFormContainer />
    </>
  );
};

export default WithSidebar(SubmitCoin);
