import React from "react";
import style from "./style.module.less";

interface IProps {
  icon?: React.ReactElement | React.ReactDOM;
  children: React.ReactElement | React.ReactDOM | string;
  [ohter: string]: any;
}

const CircleButton: React.FunctionComponent<IProps> = ({
  icon,
  children,
  ...props
}) => {
  return (
    <div className={style.button_outter}>
      <div className={style.button_bg}>
        <div className={style.button_inner}>{icon}</div>
      </div>
      <div className={style.button_name}>{children}</div>
    </div>
  );
};

export default CircleButton;
