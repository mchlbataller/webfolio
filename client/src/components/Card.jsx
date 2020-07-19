import React from "react";
import { ThemeContext } from "ThemeProvider";
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

	@media (min-width: 1024px) {
		border-radius: 5px 0px 0px 5px;
		height: 100%;
		width: 27%;
		position: absolute;
		padding-left: 2.5rem;
		padding-right: 2.5rem;
	}
`;

const CardContent = styled.section`
	color: ${(props) => props.color};
	width: 100%;
	@media (min-width: 1024px) {
		margin-left: 27%;
	}
`;

export const Card = (props) => {
	const theme = React.useContext(ThemeContext);

	return (
		<CardContainer
			mdWidth={props.mdWidth}
			background={theme.card.body}
			className="mx-auto lg:flex lg:flex-row lg:relative"
		>
			<CardHeaderContainer
				background={theme.card.header}
				className="align-text-bottom flex lg:flex-col pt-10 pl-8 w-full"
			>
				{props.headerIcon}
				<p
					className="text-2xl font-bold ml-4 lg:ml-0 mb-1"
					style={{ color: theme.card.headerTitle }}
				>
					{props.title}
				</p>
			</CardHeaderContainer>
			<CardContent className="px-10 py-10" color={theme.card.content}>
				{props.children}
			</CardContent>
		</CardContainer>
	);
};
