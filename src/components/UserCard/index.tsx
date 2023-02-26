import React from "react";
import styles from "./UserCard.module.scss";
import UserStat from "../UserStat";
import { LocalGithubUser } from "../../types";
import UserTitle from "../UserTitle";
import InfoItem from "../InfoItem";
import UserInfo from "../UserInfo";

interface UserCardProps extends LocalGithubUser {}

const UserCard: React.FC<UserCardProps> = (props) => {
	return (
		<div className={styles.userCard}>
			<img src={props.avatar} alt={props.login} className={styles.avatar} />
			<UserTitle created={props.created} name={props.name} login={props.login} />
			<p className={`${styles.bio}${props.bio ? "" : ` ${styles.empty}`}`}>
				{props.bio || "This profile has no bio"}
			</p>
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
