import React, { createContext, useContext, useState } from 'react';
import { CompetitorProps } from './Competitor'; // Ensure this is correctly exported

// Define the context with an initial value or undefined
// You might need to define the shape of the context value
const CompetitorContext = createContext<{
  competitors: CompetitorProps[];
  addCompetitor: (competitor: CompetitorProps) => void;
} | undefined>(undefined);

export const CompetitorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [competitors, setCompetitors] = useState<CompetitorProps[]>([]);

  const addCompetitor = (competitor: CompetitorProps) => {
    setCompetitors((prevCompetitors) => [...prevCompetitors, competitor]);
  };

  return (
    <CompetitorContext.Provider value={{ competitors, addCompetitor }}>
      {children}
    </CompetitorContext.Provider>
  );
};

export const useCompetitor = () => {
  const context = useContext(CompetitorContext);
  if (context === undefined) {
    throw new Error('useCompetitor must be used within a CompetitorProvider');
  }
  return context;
};