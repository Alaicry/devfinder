import React from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

type Props = {};

const App = (props: Props) => {
	return (
		<Container>
			<Header />
		</Container>
	);
};

export default App;
