import { motion, type HTMLMotionProps } from 'framer-motion';

interface RevealProps extends HTMLMotionProps<'div'> {
  /** Atraso em milissegundos, para escalonar itens de uma lista. */
  delay?: number;
}

/** Entrada suave ao rolar a página: fade + leve subida, uma única vez. */
export const Reveal = ({ delay = 0, children, ...props }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
);
