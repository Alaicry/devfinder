import React from "react";
import "./InfoItem.scss";

export interface InfoItemProps {
	icon: React.ReactNode;
	text?: string | null;
	isLink?: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, text, isLink }) => {
	const currentText = text || "Not available";
	let currentHref: string = "";
	if (isLink) {
		currentHref = text && text.startsWith("http") ? text : `https://${text}`;
	}
	return (
		<div className={`info-item${text ? "" : ` empty`}`}>
			{icon}
			<div className="info-item__content">
				{isLink && text ? (
					<a href={currentHref} className="link" target="_blank" rel="noreferrer">
						{currentText}
					</a>
				) : (
					currentText
				)}
			</div>
		</div>
	);
};

export default InfoItem;
