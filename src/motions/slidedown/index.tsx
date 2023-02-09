import { motion } from 'framer-motion';

const SlideDownContainer = ({
  children,
  className,
  duration = 1.0,
}: TransitionController) => {
  return (
    <motion.div
      initial={{ transform: 'translateY(-100%)', opacity: 0 }}
      animate={{ transform: 'translateY(0%)', opacity: 1 }}
      exit={{ transform: 'translateY(-100%)', opacity: 0 }}
      transition={{ duration }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default SlideDownContainer;
opacity: 0;
