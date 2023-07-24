import { FC } from 'react';

interface IArrowSquareRightProps {
  disabled?: boolean;
}

const ArrowSquareRight: FC<IArrowSquareRightProps> = ({ disabled = false }) => {
  return (
    <>
      {!disabled ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1425 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.135C1.5 14.8725 3.1275 16.5 5.8575 16.5H12.135C14.865 16.5 16.4925 14.8725 16.4925 12.1425V5.8575C16.5 3.1275 14.8725 1.5 12.1425 1.5ZM11.0925 9.3975L8.445 12.045C8.3325 12.1575 8.19 12.21 8.0475 12.21C7.905 12.21 7.7625 12.1575 7.65 12.045C7.4325 11.8275 7.4325 11.4675 7.65 11.25L9.9 9L7.65 6.75C7.4325 6.5325 7.4325 6.1725 7.65 5.955C7.8675 5.7375 8.2275 5.7375 8.445 5.955L11.0925 8.6025C11.3175 8.82 11.3175 9.18 11.0925 9.3975Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            stroke="white"
            strokeOpacity="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.05493 11.6475L10.6949 9.00004L8.05493 6.35254"
            stroke="white"
            strokeOpacity="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default ArrowSquareRight;
