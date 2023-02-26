import React from "react";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import Button from "../Button";

interface SearchProps {
	hasError: boolean;
	onSubmitForm: (text: string) => void;
}

type FormFiels = {
	username: HTMLInputElement;
};

const Search: React.FC<SearchProps> = ({ hasError, onSubmitForm }) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFiels>) => {
		event.preventDefault();
		const searchText = event.currentTarget.username.value;
		if (searchText.trim()) {
			onSubmitForm(searchText);
			event.currentTarget.reset();
		}
	};

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div className={styles.search}>
				<label className={styles.label}>
					<SearchIcon />
				</label>
				<input
					type="search"
					className={styles.input}
					name="username"
					placeholder="Enter Github username..."
				/>
				{hasError && <div className={styles.error}>No result</div>}
				<Button>Search</Button>
			</div>
		</form>
	);
};

export default Search;
