import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { GithubError, GithubUser, LocalGithubUser } from "./types";
import { BASE_URL } from "./utils/constants";
import { extractLocalUser } from "./utils/operators/extractLocalUser";
import { isGithubUser } from "./utils/operators/typeGuards";

const App = () => {
	const [user, setUser] = React.useState<LocalGithubUser | null>(null);

	const fetchUser = async (username: string) => {
		const url = BASE_URL + username;
		const response = await fetch(url);
		const user = (await response.json()) as GithubUser | GithubError;
		if (isGithubUser(user)) {
			setUser(extractLocalUser(user));
		} else {
			setUser(null);
		}
	};

	return (
		<React.Fragment>
			<Header />
			<Search hasError={!user} onSubmitForm={fetchUser} />
			{user && <UserCard {...user} />}
		</React.Fragment>
	);
};

export default App;
