import "assets/fonts.css"

import { Caption, Title } from "./assets/styles";
import {defaultProps, propTypes} from './assets/proptypes'

import LazyLoad from "react-lazyload";
import LinkToApp from "./assets/LinkToApp";
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
				<LinkToApp linkToApp={linkToApp} />

				<br />
				<Caption>
					{appDescription.split("\\n").map((e, key) => (
						<p className="font-regular text-gray-400" key={key}>{e === "" ? <br /> : e}</p>
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
