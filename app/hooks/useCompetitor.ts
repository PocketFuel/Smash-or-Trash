import { useState, useCallback } from 'react';

// Define the Competitor type based on your requirements
type Competitor = {
    id: string,
    name: string,
    imgSrc: string,
    votes: number, // Changed from 0 to number for flexibility
    voteForCompetitor: (id: string) => void,
    rank: number,
    booted: boolean,
    onReady: (id: string) => void,
    tags: string[], // Specify the type for tags
};

export const useCompetitor = () => {
  const [competitors, setCompetitors] = useState<Competitor[]>([]);

  // Function to add a new competitor
  const addCompetitor = useCallback((newCompetitor: Competitor) => {
    setCompetitors((prevCompetitors) => [...prevCompetitors, newCompetitor]);
  }, []);

  // You can add more actions (e.g., removeCompetitor, updateCompetitor) here as needed

  return {
    competitors,
    addCompetitor,
    // List other actions here
  };
};