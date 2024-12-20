'use client';

import { motion, useAnimation } from 'framer-motion';

const pathVariants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
};

const CircleCheckIcon = ({ className = '' }) => {  // Accept className prop
  const controls = useAnimation();

  return (
    <div
      className={`cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center ${className}`}  // Apply className to div
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}  // Apply className to svg
      >
        <circle cx="12" cy="12" r="10" />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="m9 12 2 2 4-4"
        />
      </svg>
    </div>
  );
};

export { CircleCheckIcon };