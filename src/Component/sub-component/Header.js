import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assests/icon.svg";

function Header() {
	const setIcon = (currIcon) => {
		var useTag = `<use xlink:href="${icon}#${currIcon}" />`;
		return <svg dangerouslySetInnerHTML={{ __html: useTag }} />;
	};
	return (
		<header className="header__primary">
			<span className="icon-bg-container icon-left">{setIcon("menu")}</span>
			<h1>
				<Link to="/">
					The Movie <span className="highlight-text">Hub</span>
				</Link>
			</h1>
			<span className="notification-icon icon-bg-container icon-right">
				{setIcon("notification")}
			</span>
			<div className="search-bar-container">
				<input placeholder="search" type="text" className="search-bar" />
				<span>{setIcon("search")}</span>
			</div>
		</header>
	);
}

export default Header;
