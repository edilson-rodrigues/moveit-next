import styles from '../styles/components/Countdown.module.css';

const Countdown = () => (
  <div className={styles.countdownContainer}>
    <div>
      <span>2</span>
      <span>5</span>
    </div>
    <span>:</span>
    <div>
      <span>0</span>
      <span>1</span>
    </div>
  </div>
);
export default Countdown;
