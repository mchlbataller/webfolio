import "index.css";

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const CardContainer = styled.div`
	width: 90%;
	margin-bottom: 2rem;
	background: ${(props) => props.background || "#FF0000"};
	box-sizing: border-box;
	box-shadow: 5px 9px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;

	@media (min-width: 760px) {
		width: ${(props) => props.mdWidth || 48}%;
	}
	@media (min-width: 1024px) {
		width: ${(props) => props.lgWidth || props.mdWidth || 65}%;
		border-radius: 5px;
		position: relative;
	}
`;

export const CardHeader = styled.p.attrs({
	className: "text-center font-semibold text-2xl mt-20",
})``;

const CardHeaderContainer = styled.div.attrs({})`
	height: 80px;
	background: ${(props) => props.background || "#FF0000"};
	border: 1px solid rgba(0, 0, 0, 0.08);
	box-sizing: border-box;
	border-radius: 20px 20px 0px 0px;
	min-width: 250px;

	@media (min-width: 1024px) {
		border-radius: 5px 0px 0px 5px;
		height: 100%;
		width: 30%;
		position: absolute;
		padding-left: 2.5rem;
		padding-right: 2.5rem;
	}
`;

const CardContent = styled.section`
	color: ${(props) => props.color};
	width: 100%;
	@media (min-width: 1024px) {
		margin-left: 35%;
	}
`;

export const Card = ({
	mdWidth,
	backgroundColor,
	className,
	headerBackgroundColor,
	headerIcon,
	headerTitleColor,
	title,
	contentColor,
	children,
}) => {
	return (
		<CardContainer
			mdWidth={mdWidth}
			background={backgroundColor}
			className={"mx-auto lg:flex lg:flex-row lg:relative " + className}
		>
			<CardHeaderContainer
				background={headerBackgroundColor}
				className="align-text-bottom flex lg:flex-col pt-10 pl-5 sm:pl-8 w-full"
			>
				{headerIcon}
				<p
					className="text-xl lg:text-2xl font-bold ml-4 lg:ml-0 mb-1"
					style={{ color: headerTitleColor }}
				>
					{title}
				</p>
			</CardHeaderContainer>
			<CardContent className="px-5 sm:px-10 py-10" color={contentColor}>
				{children}
			</CardContent>
		</CardContainer>
	);
};

Card.propTypes = {
	/**
	 * Width when the viewport is on Laptop
	 */
	mdWidth: PropTypes.string,
	/**
	 * Title of the Card
	 */
	title: PropTypes.string,
	/**
	 * Card contents
	 */
	children: PropTypes.element,
	/**
	 * Icon of the header
	 */
	headerIcon: PropTypes.element,
	headerBackgroundColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	headerTitleColor: PropTypes.string,
	contentColor: PropTypes.string,
	/**
	 * Class Name for styling
	 */
	className: PropTypes.string,
};

// Dark theme
Card.defaultProps = {
	headerBackgroundColor: "#192835",
	backgroundColor: "#243544",
	headerTitleColor: "#9ADBFF",
	contentColor: "#F3F3F3",
};
