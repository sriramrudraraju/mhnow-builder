import { twMerge } from "tailwind-merge";

import { useSelectedArmor } from "../contexts/selectedArmor";
import helm from "../assets/armor/helm.svg";
import chest from "../assets/armor/chest.svg";
import gloves from "../assets/armor/gloves.svg";
import belt from "../assets/armor/belt.svg";
import legs from "../assets/armor/legs.svg";

import { type ArmorSet as ArmorSetType } from "../data/types";

interface ArmorSetProps {
  armorSet: ArmorSetType;
}

export const ArmorSet = ({ armorSet }: ArmorSetProps) => {
  const { setSelectedArmor } = useSelectedArmor();
  return (
    <div className={twMerge("flex justify-between items-center px-8")}>
      <div className={twMerge("w-[100px]")}>{armorSet.name}</div>
      <div className={twMerge("w-[300px] flex justify-between items-center")}>
        <img
          src={helm}
          className={twMerge("h-[48px] w-[48px]")}
          onClick={() => setSelectedArmor(armorSet.armor.helm)}
        />
        <img
          src={chest}
          className={twMerge("h-[48px] w-[48px]")}
          onClick={() => setSelectedArmor(armorSet.armor.chest)}
        />
        <img
          src={gloves}
          className={twMerge("h-[48px] w-[48px]")}
          onClick={() => setSelectedArmor(armorSet.armor.gloves)}
        />
        <img
          src={belt}
          className={twMerge("h-[48px] w-[48px]")}
          onClick={() => setSelectedArmor(armorSet.armor.belt)}
        />
        <img
          src={legs}
          className={twMerge("h-[48px] w-[48px]")}
          onClick={() => setSelectedArmor(armorSet.armor.legs)}
        />
      </div>
    </div>
  );
};
