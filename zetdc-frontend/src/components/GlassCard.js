import styles from './GlassCard.module.css';

const GlassCard = ({ children }) => {
  return <div className={styles.glass}>{children}</div>;
};

export default GlassCard;
