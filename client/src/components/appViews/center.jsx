import { Caption, Title } from "./assets/styles";
import { defaultProps, propTypes } from "./assets/propTypes";

import LazyLoad from "react-lazyload";
import LinkToApp from "./assets/appUrl";
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
	firstApp,
}) => (
	<div
		className={
			firstApp
				? "leading-tight text-center"
				: "leading-tight text-center mt-16"
		}
	>
		<LazyLoad>
			<img
				src={imgSrc}
				alt="url"
				className="w-3/4 mx-auto border border-transparent rounded-lg shadow-lg"
			/>
		</LazyLoad>
		<Title className="mt-5" style={{ color: titleTextColor }}>
			{appTitle}
		</Title>
		<LinkToApp linkToApp={linkToApp} />
		<Caption className="mt-2 w-5/6 mx-auto">
			{appDescription.split("\\n").map((e, key) => (
				<p className="font-regular text-gray-400" key={key}>
					{e === "" ? <br /> : e}
				</p>
			))}
		</Caption>
	</div>
);

Center.propTypes = {
	propTypes,
};

Center.defaultProps = {
	defaultProps,
};
