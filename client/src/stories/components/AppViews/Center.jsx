import "index.css";
import "./fonts.css";

import { Caption, Link, Title } from "./styles";

import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import React from "react";

/**
 * Centered view of apps
 */
export const Center = ({
	titleTextColor,
	imgSrc,
	appTitle,
	linkToApp,
	appDescription,
}) => (
	<div className="leading-tight text-center mt-16">
		<LazyLoad>
			<img
				src={imgSrc}
				alt="url"
				className="w-3/4 mx-auto border rounded-lg shadow-lg"
			/>
		</LazyLoad>
		<Title className="mt-3" style={{ color: titleTextColor }}>
			{appTitle}
		</Title>
		{!linkToApp ? (
			<p className="text-xs text-gray-600">
				App is currently not available for viewing
			</p>
		) : (
			<Link onClick={() => window.open("https://" + linkToApp)}>
				{linkToApp}
			</Link>
		)}
		<Caption className="mt-2 w-5/6 mx-auto">{appDescription}</Caption>
	</div>
);

Center.propTypes = {
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

Center.defaultProps = {
	titleTextColor: "white",
	imgSrc: "img is blank",
	appTitle: "App Title Goes Here",
	linkToApp: null,
	appDescription: "Description goes here.",
};
