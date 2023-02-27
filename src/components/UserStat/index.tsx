import React from "react";
import "./UserStat.scss";
import { LocalGithubUser } from "../../types";

export interface UserStatProps extends Pick<LocalGithubUser, "repos" | "followers" | "following"> {}

const UserStat: React.FC<UserStatProps> = ({ repos, followers, following }) => {
	return (
		<div className="card-stats">
			<div className="stat">
				<div className="stat__title">Repos</div>
				<div className="stat__number">{repos}</div>
			</div>
			<div className="stat">
				<div className="stat__title">Following</div>
				<div className="stat__number">{following}</div>
			</div>
			<div className="stat">
				<div className="stat__title">Followers</div>
				<div className="stat__number">{followers}</div>
			</div>
		</div>
	);
};

export default UserStat;
