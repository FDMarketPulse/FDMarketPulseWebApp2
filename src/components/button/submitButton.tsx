import { Button } from "antd";
import React, { FC, MouseEventHandler } from "react";
import styles from "./styles.module.less";

interface CustomButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLElement>;
  disable: boolean // Added this line
}

const SubmitButton: FC<CustomButtonProps> = ({ text, onClick, disable = false }) =>  { // Added disabled here, with a default value of false

  return (
    <Button
      className={styles.customButton}
      size={"large"}
      block
      hoverable={false}
      onClick={onClick}
      disabled={disable}  // Added disabled property here
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
