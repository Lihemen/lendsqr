import { motion } from 'framer-motion';

const Fade = ({
  children,
  className,
  duration = 0.3,
}: TransitionController) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default Fade;
