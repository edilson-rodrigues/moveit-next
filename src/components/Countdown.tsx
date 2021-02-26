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
            <div>
              Ciclo encerrado
              <img src="icons/check_circle.svg" alt="Check Circle" />
            </div>
          </button>
        )}

        {isActive && !hasFinished && (
          <button
            type="button"
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
          >
            <div>
              Abandonar ciclo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
              </svg>
            </div>
          </button>
        )}

        {!isActive && !hasFinished && (
          <button
            type="button"
            className={styles.countdownButton}
            onClick={startCountdown}>
            <div>
              Iniciar um ciclo
              <img src="icons/play_arrow.svg" alt="Play Arrow" />
            </div>
          </button>)}

      </div>
    );
  }
;
export default Countdown;
