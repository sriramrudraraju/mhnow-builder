import { twMerge } from "tailwind-merge";

export const App = () => {
  return (
    <h1 className={twMerge("text-3xl font-bold underline")}>
      Monster Hunter Now Builder
    </h1>
  );
};
