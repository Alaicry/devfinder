import React from "react";
import "./Header.scss";
import ThemeSwitcher from "../ThemeSwitcher";

const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="logo">devfinder</div>
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
