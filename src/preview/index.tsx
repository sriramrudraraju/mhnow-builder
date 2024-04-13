import { twMerge } from "tailwind-merge";

import { useSelectedArmor } from "../contexts/selectedArmor";

export const Preview = () => {
  const { selectedArmor } = useSelectedArmor();
  return (
    <div>
      <header className={twMerge("flex justify-center py-[16px]")}>
        <h3>Preview</h3>
      </header>

      {selectedArmor && (
        <section className={twMerge("flex items-center flex-col py-[16px]")}>
          <div
            className={twMerge(
              "h-[128px] w-[128px] bg-gray-50 flex justify-center items-center",
            )}
          >
            <span>Icon</span>
          </div>
          <div className={twMerge("font-bold py-[16px]")}>
            {selectedArmor.name}
          </div>
          <div className={twMerge("py-[4px]")}>
            Defense:{" "}
            {`${selectedArmor.defense[0]} - ${selectedArmor.defense[1]}`}
          </div>
          <div className={twMerge("py-[4px]")}>
            {selectedArmor.equipementSkills.map((es) => (
              <div key={`${es.skillName} ${es.grade}`}>
                {`${es.skillName} (grade ${es.grade})`}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
