import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
	return (
		<Container>
			<Header />
			<Search hasError onSubmitForm={() => {}} />
		</Container>
	);
};

export default App;
