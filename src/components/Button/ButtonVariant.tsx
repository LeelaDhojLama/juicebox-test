export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  primaryOutline = "primaryOutline",
  secondaryOutline = "secondaryOutline",
}

export const buttonStyles = {
  [ButtonVariant.primary]:
    "bg-[var(--primary-color)] text-[var(--text-color-black)] ",
  [ButtonVariant.primaryOutline]:
    "text-[var(--text-color-white)] border-2 border-gray-300",
  [ButtonVariant.secondary]:
    "text-[var(--text-color-black)] border-2 border-gray-300 bg-[var(--secondary-color)] shadow-glow",
  [ButtonVariant.secondaryOutline]:
    "text-[var(--text-color-white)] border-2 border-gray-300",
};
