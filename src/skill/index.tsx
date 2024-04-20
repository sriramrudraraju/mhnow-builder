import { twMerge } from "tailwind-merge";

import { skillNames, skills } from "../data/skill";

interface SkillProps {
  name: keyof typeof skillNames;
  level: number;
}
export const Skill = ({ name, level }: SkillProps) => {
  const { effects } = skills[name];
  return (
    <div className={twMerge("flex")}>
      <div>icon</div>
      <div className={twMerge("flex flex-col")}>
        <div className={twMerge("px-[4px]")}>{name}</div>
        <div className={twMerge("px-[4px] flex flex-row w-[200px]")}>
          {effects.map((_, i) => (
            <div
              key={i}
              className={twMerge(
                `h-[24px] w-[24px] mx-[8px] ${
                  i < level ? "bg-yellow-500" : "bg-gray-500"
                }`
              )}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
