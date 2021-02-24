import styles from '../styles/components/Countdown.module.css';
import { useEffect, useState } from 'react';

let countdownTimeOut: NodeJS.Timeout;

const Countdown = () => {
    const initialState = 0.1 * 60;
    const [time, setTime] = useState(initialState);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
      setIsActive(true);
    }

    function resetCountdown() {
      clearTimeout(countdownTimeOut);
      setIsActive(false);
      setTime(initialState);
    }

    useEffect(() => {

      if (isActive && time > 0) {
        countdownTimeOut = setTimeout(() => {
          setTime(time - 1);
        }, 1000);
      } else if (isActive && time === 0) {
        setHasFinished(true);
        setIsActive(false);
      }

    }, [isActive, time]);

    return (
      <div>
        <div className={styles.countdownContainer}>
          <div>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
          </div>
        </div>

        {hasFinished && (
          <button
            disabled
            className={styles.countdownButton}
          >
            Ciclo encerrado
          </button>
        )}

        {isActive && !hasFinished && (
          <button
            type="button"
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
          >
            Abandonar um ciclo
          </button>
        )}

        {!isActive && !hasFinished && (
          <button
            type="button"
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            Iniciar um ciclo
          </button>)}

      </div>
    );
  }
;
export default Countdown;
