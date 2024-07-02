import { motion } from 'framer-motion';
import { useSmoothMovementCoords } from '../lib/hooks/useSmoothMovementCoords';

export const SmoothMovementWrapper = ({
  children,
  className,
}: React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) => {
  const { smoothY, smoothX } = useSmoothMovementCoords();

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className={className}
      transition={{ type: 'spring' }}
    >
      {children}
    </motion.div>
  );
};
