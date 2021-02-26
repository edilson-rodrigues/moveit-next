import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => {
  const hasActiveChallenge = true;
  return (
    <div className={styles.challengeBoxContainer}>

      {hasActiveChallenge && (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="Body" />
            <strong>Exercite-se </strong>
            <p>É agora Edilson, bora lá meu parça.
              Caminhe por 3 minutos e estique suas pernas
              pra você ficar saudável.</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      )}

      {!hasActiveChallenge && (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
