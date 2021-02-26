import styles from '../styles/components/CompletedChallenges.module.css';
import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';

const CompletedChallenges = () => {
  const { challengeCompleted } = useContext(ChallengeContext);
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </div>
  );
};

export default CompletedChallenges;
