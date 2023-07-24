export default function Page404() {
  return (
    <div className='page404 relative'>
      <div className='flex justify-center items-center z-10 black-overlay'>
        <div className='w-[498px] flex flex-col items-center justify-center'>
          <h1 className='text-[130px] lg:text-[244px] -mb-6 lg:-mb-16 font-bold gradient404'>404</h1>
          <p className='text-white text-opacity-50 leading-[19.37px] text-[14px] lg:text-[16px]  px-6 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <button className='w-40 mt-[24px] h-[50px] px-8 py-4 bg-blue-700 rounded-xl shadow justify-center items-center gap-1.5 inline-flex'>
            <span className='text-white text-[14px] lg:text-[16px] font-semibold uppercase'>
              Go back
            </span>
          </button>
        </div>
      </div>


     
    </div>
  );
}
