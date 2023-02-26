import React from "react";
import "./ThemeSwitcher.scss";
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import { useLocaleStorage } from "../../utils/hooks/useLocalStorage";

const ThemeSwitcher: React.FC = () => {
	const currentTheme = window.matchMedia("(prefers-color-theme: dark)").matches;

	const [theme, setTheme] = useLocaleStorage("theme", currentTheme ? "dark" : "light");

	const toggleTheme = (): void => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	React.useEffect(() => {
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<div className="theme-switcher" onClick={toggleTheme}>
			<span className="theme-switcher__text">{theme}</span>
			{theme === "light" ? (
				<SunIcon className="theme-switcher__icon" />
			) : (
				<MoonIcon className="theme-switcher__icon" />
			)}
		</div>
	);
};

export default ThemeSwitcher;
