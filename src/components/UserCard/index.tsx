import React from "react";
import "./UserCard.scss";
import UserStat from "../UserStat";
import { LocalGithubUser } from "../../types";
import UserTitle from "../UserTitle";
import UserInfo from "../UserInfo";

interface UserCardProps extends LocalGithubUser {}

const UserCard: React.FC<UserCardProps> = (props) => {
	return (
		<div className="card">
			<img className="card__avatar" src={props.avatar} alt={props.login} />
			<UserTitle created={props.created} name={props.name} login={props.login} />
			<p className={`card__bio${props.bio ? "" : ` empty`}`}>{props.bio || "This profile has no bio"}</p>
			<UserStat repos={props.repos} followers={props.followers} following={props.following} />
			<UserInfo
				blog={props.blog}
				company={props.company}
				location={props.location}
				twitter={props.twitter}
			/>
		</div>
	);
};

export default UserCard;
