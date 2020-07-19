import styled, { keyframes } from "styled-components";

import React from "react";

const progressBarAnimation = keyframes`
	0% { width: 0%; }
	100% { width: 100%; }
`;

// Holds the centered rating text and
// the grey progress bar container
const ProgressBarContainer = styled.div.attrs({
	className: "mx-auto relative",
})`
	height: 22px;

	background: #efefef;
	border: 1px solid #e3e3e3;
	box-sizing: border-box;
	border-radius: 6px;
	@media (min-width: 1024px) {
		width: 200%;
	}
`;

const ProgressBarInner = styled.div`
	height: 22px;
	width: ${(props) => props.rating * 10}%;
	max-width: ${(props) => props.rating * 10}%;
	background: #00529e;
	border-radius: 6px;
	animation: ${progressBarAnimation} 4s both;
`;

const Box = styled.div`
	p {
		font-family: "Open Sans", sans-serif;
	}

	margin-bottom: 16px;
	@media (min-width: 1024px) {
		padding-left: 20px;
	}
`;

const ProgressBar = (props) => {
	return (
		<Box className="lg:w-1/3">
			<p className="text-center lg:text-left mb-1 whitespace-no-wrap">
				{props.label}
			</p>
			<ProgressBarContainer className="">
				<p className="text-center text-sm text-white relative z-10 left-0 right-0">
					{props.rating}/10
				</p>
				<ProgressBarInner
					className="absolute z-0 top-0"
					rating={props.rating}
				/>
			</ProgressBarContainer>
		</Box>
	);
};

export default ProgressBar;
