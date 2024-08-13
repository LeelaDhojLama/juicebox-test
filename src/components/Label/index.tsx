import { ReactNode } from "react";
import styles from "./Label.module.css";
import { labelStyles, LabelVariant } from "./LabelVariant";

interface LabelProps {
  children: ReactNode;
  variant: LabelVariant;
}

const Label: React.FC<LabelProps> = ({ children, variant }) => {
  return <div className={`${labelStyles[variant]}`}>{children}</div>;
};

export default Label;
