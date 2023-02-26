import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	children: React.ReactNode;
	onClickFunction?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, onClickFunction }) => {
	return (
		<button className={styles.button} onClick={onClickFunction}>
			{children}
		</button>
	);
};

export default Button;
