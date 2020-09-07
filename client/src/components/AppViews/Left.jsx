import "index.css";
import "./fonts.css";

import { Caption, Link, Title } from "./styles";

import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import React from "react";

/**
 * Test
 */
export const Left = ({
	titleTextColor,
	imgSrc,
	appTitle,
	linkToApp,
	appDescription,
	inTheWorks,
}) => (
	<div>
		<div className="grid grid-cols-2 gap-2">
			<div className="leading-tight">
				{inTheWorks && (
					<p className="text-xs md:text-base text-gray-400">
						In the works:{" "}
					</p>
				)}
				<Title style={{ color: titleTextColor }}> {appTitle}</Title>
				{!linkToApp ? (
					<p className="text-xs text-gray-600">
						App is currently not available for viewing
					</p>
				) : (
					<Link onClick={() => window.open("https://" + linkToApp)}>
						{linkToApp}
					</Link>
				)}

				<br />
				<Caption>{appDescription}</Caption>
			</div>
			<div>
				<LazyLoad>
					<img
						src={imgSrc}
						alt="url"
						className="w-full mx-auto border rounded-lg shadow-lg"
					/>
				</LazyLoad>
			</div>
		</div>
	</div>
);

Left.propTypes = {
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

Left.defaultProps = {
	titleTextColor: "white",
	imgSrc: "img is blank",
	appTitle: "App Title Goes Here",
	linkToApp: null,
	appDescription: "Description goes here.",
};
