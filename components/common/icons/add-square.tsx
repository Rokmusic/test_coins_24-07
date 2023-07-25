import { FC } from 'react';

interface IAddSquareProps {
  isMobile?: boolean;
}

const AddSquare: FC<IAddSquareProps> = ({ isMobile = false }) => {
  return (
    <>
      {isMobile ? (
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 9.59375H12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M9 12.5938V6.59375"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75 17.0938H11.25C15 17.0938 16.5 15.5938 16.5 11.8438V7.34375C16.5 3.59375 15 2.09375 11.25 2.09375H6.75C3 2.09375 1.5 3.59375 1.5 7.34375V11.8438C1.5 15.5938 3 17.0938 6.75 17.0938Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2935 1.3335H5.70683C3.28016 1.3335 1.8335 2.78016 1.8335 5.20683V10.7868C1.8335 13.2202 3.28016 14.6668 5.70683 14.6668H11.2868C13.7135 14.6668 15.1602 13.2202 15.1602 10.7935V5.20683C15.1668 2.78016 13.7202 1.3335 11.2935 1.3335ZM11.1668 8.50016H9.00016V10.6668C9.00016 10.9402 8.7735 11.1668 8.50016 11.1668C8.22683 11.1668 8.00016 10.9402 8.00016 10.6668V8.50016H5.8335C5.56016 8.50016 5.3335 8.2735 5.3335 8.00016C5.3335 7.72683 5.56016 7.50016 5.8335 7.50016H8.00016V5.3335C8.00016 5.06016 8.22683 4.8335 8.50016 4.8335C8.7735 4.8335 9.00016 5.06016 9.00016 5.3335V7.50016H11.1668C11.4402 7.50016 11.6668 7.72683 11.6668 8.00016C11.6668 8.2735 11.4402 8.50016 11.1668 8.50016Z"
            fill="white"
          />
        </svg>
      )}
    </>
  );
};

export default AddSquare;
