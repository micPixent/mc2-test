export const classNameByVariant = (variant: string) => {
  if (variant === "text") {
    return "border border-transparent text-black bg-transparent hover:underline";
  }

  if (variant === "outlined") {
    return "border-primary-500 border-2 text-primary-500 bg-transparent";
  }

  return "border border-primary-500 text-white bg-primary-500";
};
