import React, { CSSProperties, FC, ReactNode } from "react";
import cl from "./LogButton.module.scss";

interface ILogButton {
  onClick?: () => void;
  isShine?: boolean;
  className?: string;
  styles?: CSSProperties;
  children: ReactNode;
  disable?: boolean;
}
const LogButton: FC<ILogButton> = ({
  onClick = () => {},
  disable = false,
  className = "",
  styles = {},
  isShine = false,
  children,
}) => {
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button
      disabled={disable}
      data-shine={isShine ? "shine" : ""}
      onClick={clickHandler}
      style={styles}
      className={[cl.logButton, className].join(" ")}
    >
      {children}
    </button>
  );
};

export default LogButton;
