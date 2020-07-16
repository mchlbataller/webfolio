import styled, { keyframes } from "styled-components";

import React from "react";

const progressBarAnimation = keyframes`
	0% { width: 0%; }
	100% { width: 100%; }
`;

const ProgressBarBox = styled.div.attrs({
	className: "mx-auto",
})`
	width: 11/12;
	height: 22px;

	background: #efefef;
	border: 1px solid #e3e3e3;
	box-sizing: border-box;
	border-radius: 6px;
`;

const ProgressBarMarker = styled.div`
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

const ProgressBarContainer = styled.div`
	width: ${(props) => props.rating * 10}%;
`;

const ProgressBar = (props) => {
	return (
		<Box>
			<p className="text-center mb-1">{props.label}</p>
			<ProgressBarBox className="relative">
				<p className="text-center text-sm text-white absolute z-10 left-0 right-0">
					{props.rating}/10
				</p>

				<ProgressBarContainer rating={props.rating}>
					<ProgressBarMarker
						className="absolute z-0 top-0"
						rating={props.rating}
					/>
				</ProgressBarContainer>
			</ProgressBarBox>
		</Box>
	);
};

export default ProgressBar;
