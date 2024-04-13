import { createContext, useState, useContext } from "react";
import { type Armor as TArmor } from "../data/types";

export type SelectedArmorContextType = {
  selectedArmor: TArmor | null;
  setSelectedArmor: React.Dispatch<React.SetStateAction<TArmor | null>>;
};

export const SelectedArmorContext =
  createContext<SelectedArmorContextType | null>(null);

interface SelectedArmorProviderProps {
  children: React.ReactNode;
}

export const SelectedArmorProvider = ({
  children,
}: SelectedArmorProviderProps) => {
  const [selectedArmor, setSelectedArmor] = useState<TArmor | null>(null);
  return (
    <SelectedArmorContext.Provider value={{ selectedArmor, setSelectedArmor }}>
      {children}
    </SelectedArmorContext.Provider>
  );
};

export const useSelectedArmor = () =>
  useContext(SelectedArmorContext) as unknown as SelectedArmorContextType;
