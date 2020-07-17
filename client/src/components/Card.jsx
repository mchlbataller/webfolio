import React from "react";
import { ThemeContext } from "ThemeProvider";
import styled from "styled-components";

export const CardContainer = styled.div.attrs({
	className: "mx-auto",
})`
	width: 90%;

	@media (min-width: 760px) {
		width: ${(props) => props.mdWidth || 48}%;
	}
	@media (min-width: 1024px) {
		width: ${(props) => props.lgWidth || props.mdWidth || 40}%;
	}

	margin-bottom: 2rem;
	background: ${(props) => props.background || "#FFFFFF"};
	box-sizing: border-box;
	box-shadow: 5px 9px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
`;

export const CardHeader = styled.p.attrs({
	className: "text-center font-semibold text-2xl mt-20",
})``;

const CardHeaderContainer = styled.div.attrs({
	className: "align-text-bottom flex pt-10 pl-8 w-full",
})`
	height: 80px;
	background: ${(props) => props.background};
	border: 1px solid rgba(0, 0, 0, 0.08);
	box-sizing: border-box;
	border-radius: 20px 20px 0px 0px;
`;

export const Card = (props) => {
	const theme = React.useContext(ThemeContext);

	return (
		<CardContainer mdWidth={props.mdWidth} background={theme.card.cardBody}>
			<CardHeaderContainer background={theme.card.header}>
				{props.headerIcon}
				<p
					className="text-2xl font-bold ml-4 mb-1"
					style={{ color: theme.card.headerTitle }}
				>
					{props.title}
				</p>
			</CardHeaderContainer>
			<section
				className="px-6 py-10"
				style={{ color: theme.card.content }}
			>
				{props.children}
			</section>
		</CardContainer>
	);
};
