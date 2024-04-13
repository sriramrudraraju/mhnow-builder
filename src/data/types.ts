/**
 * @property {number} level - skill level
 * @example
 * // 1
 * @property {string} description - affect at this level
 * @example
 * // Increases attack power by 20.
 */
export type SkillEffect = {
  level: number;
  description: string;
};

/**
 * @property {string} name - skill name
 * @example
 * // Attack Boost
 * @property {string} description - skill description
 * @example
 * // Increases Attack Power.
 * @property {array} effects - skill effects
 * @example
 * // [{ level: 1, description: "Increases attack power by 20."}]
 */
export type Skill = {
  name: string;
  description: string;
  effects: SkillEffect[];
};

/**
 * @property {string} skillName - skill name
 * @example
 * // Attack Boost
 * @property {number} grade - level at which skill unlocks
 * @example
 * // 4.
 */
export type EquipmentSkill = {
  skillName: string;
  grade: number;
};

export type ArmorType = "helm" | "chest" | "gloves" | "belt" | "legs";

/**
 * @property {string} name - Armor name
 * @example
 * // Leather Headgear
 * @property {array} defense - [min max] defenses
 * @example
 * // [20, 182].
 * @property {array} equipementSkills - array of skills
 * @example
 * // [{ skillName: 'Attack Boost', grade: 4}].
 */
export type Armor = {
  name: string;
  type: ArmorType;
  defense: [number, number];
  equipementSkills: EquipmentSkill[];
};

/**
 * @property {string} name - Monster name
 * @example
 * // Jagras
 * @property {object} armor - armor parts
 * @example
 * // { helm: ..., chest: ..., gloves: ..., belt: ..., legs: ...}.
 */
export type ArmorSet = {
  name: string;
  armor: {
    [key in ArmorType]: Armor;
  };
};
