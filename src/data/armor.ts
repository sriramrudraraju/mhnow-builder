import { Armor } from "./types";

export const Armors: Record<string, Armor> = {
  "Leather Headgear": {
    name: "Leather Headgear",
    type: "helm",
    defense: [20, 182],
    equipementSkills: [
      {
        skillName: "Critical Eye",
        grade: 2,
      },
      {
        skillName: "Ice Resistance",
        grade: 4,
      },
    ],
  },
  "Leather Mail": {
    name: "Leather Mail",
    type: "chest",
    defense: [20, 182],
    equipementSkills: [
      {
        skillName: "Attack Boost",
        grade: 2,
      },
      {
        skillName: "Fire Resistance",
        grade: 4,
      },
    ],
  },
  "Leather Gloves": {
    name: "Leather Gloves",
    type: "gloves",
    defense: [20, 182],
    equipementSkills: [
      {
        skillName: "Defense Boost",
        grade: 2,
      },
      {
        skillName: "Thunder Resistance",
        grade: 4,
      },
    ],
  },
  "Leather Belt": {
    name: "Leather Belt",
    type: "belt",
    defense: [20, 182],
    equipementSkills: [
      {
        skillName: "Health Boost",
        grade: 2,
      },
      {
        skillName: "Water Resistance",
        grade: 4,
      },
    ],
  },
  "Leather Trousers": {
    name: "Leather Trousers",
    type: "legs",
    defense: [20, 182],
    equipementSkills: [
      {
        skillName: "Poison Resistance",
        grade: 2,
      },
      {
        skillName: "Paralysis Resistance",
        grade: 4,
      },
    ],
  },
  "Jagras Helm": {
    name: "Jagras Helm",
    type: "helm",
    defense: [20, 182],
    equipementSkills: [
      {
        skillName: "Firm Foothold",
        grade: 2,
      },
      {
        skillName: "Firm Foothold",
        grade: 6,
      },
    ],
  },
  "Jagras Mail": {
    name: "Jagras Mail",
    type: "chest",
    defense: [20, 182],
    equipementSkills: [
      {
        skillName: "Rising Tide",
        grade: 2,
      },
      {
        skillName: "Rising Tide",
        grade: 6,
      },
    ],
  },
  "Jagras Vambraces": {
    name: "Jagras Vambraces",
    type: "gloves",
    defense: [20, 182],
    equipementSkills: [
      {
        skillName: "Firm Foothold",
        grade: 2,
      },
      {
        skillName: "Water Attack",
        grade: 4,
      },
    ],
  },
  "Jagras Coil": {
    name: "Jagras Coil",
    type: "belt",
    defense: [20, 182],
    equipementSkills: [
      {
        skillName: "Fortify",
        grade: 2,
      },
      {
        skillName: "Rising Tide",
        grade: 4,
      },
      {
        skillName: "Fortify",
        grade: 6,
      },
    ],
  },
  "Jagras Greaves": {
    name: "Jagras Greaves",
    type: "legs",
    defense: [20, 182],
    equipementSkills: [
      {
        skillName: "Water Attack",
        grade: 2,
      },
      {
        skillName: "Water Attack",
        grade: 6,
      },
    ],
  },
};
