import { Caption, Link, Title } from "./styles";
import {defaultProps, propTypes} from './proptypes'

import LazyLoad from "react-lazyload";
import React from "react";

export const Right = ({
	titleTextColor,
	imgSrc,
	appTitle,
	linkToApp,
	appDescription,
	inTheWorks,
	firstApp
}) => (
	<div className={firstApp ?  "leading-tight" : "leading-tight mt-16" }>
		<div className="grid grid-cols-2 gap-2">
			<div>
				<LazyLoad>
					<img
						src={imgSrc}
						alt="url"
						className="w-1/2 mx-auto border border-transparent rounded-lg shadow-lg"
					/>
				</LazyLoad>
			</div>
			<div>
				<Title>{appTitle}</Title>
				{!linkToApp ? (
					<p className="text-xs text-gray-600">
						App is currently not available for viewing
					</p>
				) : (
					<Link onClick={() => window.open("https://" + linkToApp)}>
						{linkToApp}
					</Link>
				)}
				<Caption className="mt-2 mx-auto">
					{appDescription.split("\\n").map((e) => (
						<p className="font-regular text-gray-400">{e === "" ? <br /> : e}</p>
					))}
				</Caption>
			</div>
		</div>
	</div>
);
Right.propTypes = {
	propTypes
};

Right.defaultProps = {
	defaultProps
};
