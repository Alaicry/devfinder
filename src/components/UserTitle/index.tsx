import React from "react";
import "./UserTitle.scss";
import { LocalGithubUser } from "../../types";

interface UserTitleProps extends Pick<LocalGithubUser, "name" | "login" | "created"> {}

const localDate = new Intl.DateTimeFormat("en-GB", {
	day: "numeric",
	month: "short",
	year: "numeric",
});

const UserTitle: React.FC<UserTitleProps> = ({ name, created, login }) => {
	const joinedDate = localDate.format(new Date(created));
	return (
		<div className="user-title">
			<h2 className="user-title__name">{name}</h2>
			<h3 className="user-title__login">{login}</h3>
			<span className="user-title__date">{joinedDate}</span>
		</div>
	);
};

export default UserTitle;
