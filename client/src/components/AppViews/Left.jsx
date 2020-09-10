import { Caption, Link, Title } from "./styles";
import {defaultProps, propTypes} from './proptypes'

import LazyLoad from "react-lazyload";
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
	firstApp
}) => (
	<div>
		<div className="grid grid-cols-2 gap-2">
			<div className={firstApp ? "leading-tight" : "leading-tight mt-16" }>
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
				<Caption>
					{appDescription.split("\\n").map((e) => (
						<p>{e === "" ? <br /> : e}</p>
					))}
				</Caption>
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
	propTypes
};

Left.defaultProps = {
	defaultProps
};
