import styles from '../styles/components/ExperienceBar.module.css';
import { ChallengeContext } from '../context/ChallengeContext';
import { useContext } from 'react';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentsToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentsToNextLevel}%` }}>
          <span
            className={styles.currentExperience}
            style={{ left: `${percentsToNextLevel}%` }}
          >
            {currentExperience} xp
          </span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};

export default ExperienceBar;
