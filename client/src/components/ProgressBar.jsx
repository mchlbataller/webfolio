import styled, { keyframes } from "styled-components";

import React from "react";

const progressBarAnimation = keyframes`
	0% { width: 0%; }
	100% { width: 100%; }
`;

// Holds the centered rating text and
// the grey progress bar container
const ProgressBarContainer = styled.div.attrs({
	className: "mx-auto",
})`
	width: 11/12;
	height: 22px;

	background: #efefef;
	border: 1px solid #e3e3e3;
	box-sizing: border-box;
	border-radius: 6px;
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
`;

const ProgressBar = (props) => {
	return (
		<Box>
			<p className="text-center lg:text-left mb-1">{props.label}</p>
			<ProgressBarContainer className="relative">
				<p className="text-center text-sm text-white absolute z-10 left-0 right-0">
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
