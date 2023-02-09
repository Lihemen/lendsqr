import React from 'react';
import { motion } from 'framer-motion';

const SlideRightContainer = ({
  children,
  className,
  duration = 1.0,
}: {
  children: React.ReactNode;
  className: string;
  duration: number;
}) => {
  return (
    <motion.div
      initial={{ transform: 'translateX(-100%)', opacity: 0 }}
      animate={{ transform: 'translateX(0%)', opacity: 1 }}
      exit={{ transform: 'translateX(-100%)', opacity: 0 }}
      transition={{ duration }}
      style={{ zIndex: 1 }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default SlideRightContainer;
