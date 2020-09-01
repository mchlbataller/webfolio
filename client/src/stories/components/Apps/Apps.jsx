import "index.css";

import { assessment, projectDapo } from "assets/images";

import { Apps as AppsIcon } from "assets/icons";
import { Card } from "./Card";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Caption = styled.p.attrs({
	className: "text-xs sm:text-sm font-regular text-gray-400",
})``;

const Title = styled.h1.attrs({
	className: "sm:text-xl font-medium",
})``;

const Link = styled.p.attrs({
	className: "text-blue-400 text-xs cursor-pointer",
})``;

export const Apps = (props) => {
	return (
		<Card height="1200px" title="My Apps" headerIcon={<AppsIcon />}>
			{/* Project DAPO App */}
			<div className="leading-tight mt-16">
				<div className="grid grid-cols-2 gap-2">
					<div>
						<LazyLoad>
							<img src={projectDapo} alt="projectDapo" />
						</LazyLoad>
					</div>
					<div>
						<Title>Project DAPO App</Title>
						<Link
							onClick={(e) =>
								window.open("https://dapo.bnshosting.net")
							}
						>
							dapo.bnshosting.net
						</Link>
						<Caption className="mt-2 mx-auto">
							A web system that displays the project’s homepage
							and tracks the collected data.
						</Caption>
					</div>
				</div>
			</div>
		</Card>
	);
};

Apps.propTypes = {
	/**
	 * String
	 */
	inTheWorksssss: PropTypes.string,
};

Apps.defaultProps = {
	inTheWorksssss: true,
};
