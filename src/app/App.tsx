import { twMerge } from "tailwind-merge";

import { Armors } from "../armors";
import { Preview } from "../preview";

export const App = () => {
  return (
    <>
      <header className={twMerge("w-full flex justify-center")}>
        <h1 className={twMerge("text-3xl font-bold p-8")}>
          Monster Hunter Now Builder
        </h1>
      </header>
      <section
        className={twMerge("w-full flex flex-wrap justify-around align-middle")}
      >
        <div className={twMerge("flex-auto w-[400px]")}>
          <Armors />
        </div>
        <div className={twMerge("flex-auto w-[200px]")}>
          <Preview />
        </div>
        {/* <div className={twMerge("flex-auto w-[200px]")}>Skills</div> */}
      </section>
    </>
  );
};
