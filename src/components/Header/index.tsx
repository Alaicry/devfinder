import React from "react";
import styles from "./Header.module.scss";
import ThemeSwitcher from "../ThemeSwitcher";
import Button from "../Button";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>devfinder</div>
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
