import { ArmorSet } from "./types";
import { Armors } from "./armor";

export const armorSets: ArmorSet[] = [
  {
    name: "Leather",
    armor: {
      helm: Armors["Leather Headgear"],
      chest: Armors["Leather Mail"],
      gloves: Armors["Leather Gloves"],
      belt: Armors["Leather Belt"],
      legs: Armors["Leather Trousers"],
    },
  },
  {
    name: "Jagras",
    armor: {
      helm: Armors["Jagras Helm"],
      chest: Armors["Jagras Mail"],
      gloves: Armors["Jagras Vambraces"],
      belt: Armors["Jagras Coil"],
      legs: Armors["Jagras Greaves"],
    },
  },
];
