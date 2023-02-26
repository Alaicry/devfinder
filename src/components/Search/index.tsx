import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import "./Search.scss";


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
		<form className="form" onSubmit={handleSubmit} autoComplete="off">
			<div className="form__container">
				<label className="label">
					<SearchIcon />
				</label>
				<input
					type="search"
					className="input"
					name="username"
					placeholder="Enter Github username..."
				/>
				{hasError && <div className="error">No result</div>}
				<button className="form__button" type="submit">
					Search
				</button>
			</div>
		</form>
	);
};

export default Search;
