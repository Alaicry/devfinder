import React from "react";
import styles from "./Header.module.scss";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				devfinder
			</div>
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
