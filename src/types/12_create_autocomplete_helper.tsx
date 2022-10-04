//Create autocomplete helper which allows for arbitrary values

// type IconSize = "sm" | "xs" | Omit<string, "xs" | "sm">;
type IconSize = LooseAutocomplete<"xs" | "sm">;

type LooseAutocomplete<T extends string> = T | Omit<string, T>;

interface IconProps {
  size: IconSize;
}

export const Icon = (props: IconProps) => {
  return <></>;
};

const Comp1 = () => {
  return (
    <>
      <Icon size="xs"></Icon>
      <Icon size="something"></Icon>
    </>
  );
};
