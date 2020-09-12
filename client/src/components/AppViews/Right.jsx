import "assets/fonts.css"

import { Caption, Title } from "./assets/styles";
import {defaultProps, propTypes} from './assets/proptypes'

import LazyLoad from "react-lazyload";
import LinkToApp from './assets/LinkToApp'
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
				<LinkToApp linkToApp={linkToApp} />
				<Caption className="mt-2 mx-auto">
					{appDescription.split("\\n").map((e, key) => (
						<p className="font-regular text-gray-400" key={key}>{e === "" ? <br /> : e}</p>
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
