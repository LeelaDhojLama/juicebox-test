export const enum LabelVariant {
  heading1 = "heading1",
  heading2 = "heading2",
  heading3 = "heading3",
}

export const labelStyles = {
  [LabelVariant.heading1]: "font-bagoss text-xl font-normal leading-small",
  [LabelVariant.heading2]: "font-bagoss text-lg font-light leading-small",
  [LabelVariant.heading3]:
    "font-bagoss text-md font-light leading-small tracking-wider",
};
