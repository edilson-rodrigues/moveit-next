import { createContext, ReactNode, useState } from 'react';

interface ChallengeProviderProps {
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export default function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log("new challenge");
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengeCompleted,
        levelUp,
        startNewChallenge,
      }}>
      {children}
    </ChallengeContext.Provider>
  );
}
