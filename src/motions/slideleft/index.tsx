import { motion } from 'framer-motion';

const SlideLeftContainer = ({
  children,
  className,
  duration = 1.0,
}: TransitionController) => {
  return (
    <motion.div
      initial={{ transform: 'translateX(100%)', opacity: 0 }}
      animate={{ transform: 'translateX(0%)', opacity: 1 }}
      exit={{ transform: 'translateX(100%)', opacity: 0 }}
      transition={{ duration }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default SlideLeftContainer;
