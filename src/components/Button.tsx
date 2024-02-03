import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const Button = ({
  className,
  children,
  ...rest
}: ComponentProps<"button">) => {
  return (
    <button
      className={twMerge(
        " h-20 w-20 rounded-full  bg-opacity-20 text-center text-white outline-2 hover:outline active:scale-95",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
