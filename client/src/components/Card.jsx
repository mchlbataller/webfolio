import React from "react";
import styled from "styled-components";

export const CardContainer = styled.div.attrs({
	className: "mx-auto",
})`
	width: 90%;

	margin-bottom: 2rem;
	background: #ffffff;
	border: 1px solid rgba(31, 31, 31, 0.08);
	box-sizing: border-box;
	box-shadow: 5px 9px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
`;

export const CardHeader = styled.p.attrs({
	className: "text-center font-semibold text-2xl mt-20",
})``;

const CardHeaderContainer = styled.div.attrs({
	className: "align-text-bottom flex pt-10 pl-8",
})`
	height: 80px;
	background: #3c5257;
	border: 1px solid rgba(0, 0, 0, 0.08);
	box-sizing: border-box;
	border-radius: 20px 20px 0px 0px;
`;

export const Card = (props) => {
	return (
		<CardContainer>
			<CardHeaderContainer>
				{props.headerIcon}
				<p className="text-white text-2xl font-bold ml-4 mb-1">
					{props.title}
				</p>
			</CardHeaderContainer>
			<section className="px-6 py-10">{props.children}</section>
		</CardContainer>
	);
};
