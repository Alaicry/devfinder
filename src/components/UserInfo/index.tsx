import React from "react";
import styles from "./UserInfo.module.scss";
import { LocalGithubUser } from "../../types";
import InfoItem, { InfoItemProps } from "../InfoItem";
import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/icon-website.svg";

interface UserInfoProps
	extends Pick<LocalGithubUser, "twitter" | "blog" | "company" | "location"> {}

const UserInfo: React.FC<UserInfoProps> = ({ blog, company, location, twitter }) => {
	const items: InfoItemProps[] = [
		{ icon: <LocationIcon />, text: location },
		{ icon: <WebsiteIcon />, text: blog, isLink: true },
		{ icon: <TwitterIcon />, text: twitter },
		{ icon: <CompanyIcon />, text: company },
	];

	return (
		<div className={styles.userInfo}>
			{items.map((item, index) => (
				<InfoItem {...item} key={index} />
			))}
		</div>
	);
};

export default UserInfo;
