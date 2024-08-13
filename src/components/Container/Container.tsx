import { ReactNode } from "react";
import styles from "./Container.module.css";
interface ContainerPropTypes {
  children: ReactNode;
}

function Container({ children }: ContainerPropTypes) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
