import React from "react";
import "./UserInfo.scss";
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
		{ icon: <LocationIcon className="icon" />, text: location },
		{ icon: <WebsiteIcon className="icon" />, text: blog, isLink: true },
		{ icon: <TwitterIcon className="icon" />, text: twitter },
		{ icon: <CompanyIcon className="icon" />, text: company },
	];

	return (
		<div className="user-info">
			{items.map((item, index) => (
				<InfoItem {...item} key={index} />
			))}
		</div>
	);
};

export default UserInfo;
