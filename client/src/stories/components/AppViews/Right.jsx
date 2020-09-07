import "index.css";
import "./fonts.css";

import { Caption, Link, Title } from "./styles";

import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import React from "react";

export const Right = ({
	titleTextColor,
	imgSrc,
	appTitle,
	linkToApp,
	appDescription,
	inTheWorks,
}) => (
	<div className="leading-tight mt-16">
		<div className="grid grid-cols-2 gap-2">
			<div>
				<LazyLoad>
					<img
						src={imgSrc}
						alt="url"
						className="w-full mx-auto border rounded-lg shadow-lg"
					/>
				</LazyLoad>
			</div>
			<div>
				<Title>Project DAPO App</Title>
				{!linkToApp ? (
					<p className="text-xs text-gray-600">
						App is currently not available for viewing
					</p>
				) : (
					<Link onClick={() => window.open("https://" + linkToApp)}>
						{linkToApp}
					</Link>
				)}
				<Caption className="mt-2 mx-auto">{appDescription}</Caption>
			</div>
		</div>
	</div>
);
Right.propTypes = {
	/**
	 * Title Text Color
	 */
	titleTextColor: PropTypes.string,
	/**
	 * URL of image to display
	 */
	imgSrc: PropTypes.string.isRequired,
	/**
	 * Title of the app
	 */
	appTitle: PropTypes.string.isRequired,
	/**
	 * Link to app
	 */
	linkToApp: PropTypes.string,
	/**
	 * Description of the app
	 */
	appDescription: PropTypes.string.isRequired,
};

Right.defaultProps = {
	titleTextColor: "white",
	imgSrc: "img is blank",
	appTitle: "App Title Goes Here",
	linkToApp: null,
	appDescription: "Description goes here.",
};
