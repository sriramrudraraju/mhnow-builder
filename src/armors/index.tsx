import { twMerge } from "tailwind-merge";

import { ArmorSet } from "./armorSet";
import { armorSets } from "../data";

export const Armors = () => {
  return (
    <div>
      <header className={twMerge("flex justify-center py-[16px]")}>
        <h3>Forge</h3>
      </header>
      <section>
        {armorSets.map((armorSet) => (
          <ArmorSet armorSet={armorSet} key={armorSet.name} />
        ))}
      </section>
    </div>
  );
};
