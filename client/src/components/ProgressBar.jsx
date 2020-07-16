import React from "react";
import styled from "styled-components";

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
	width: ${(props) => props.rating}0%;
	height: 22px;

	background: #00529e;
	border-radius: 6px;
`;

const ProgressBarContainer = styled.div`
	p {
		font-family: "Open Sans", sans-serif;
	}

	margin-bottom: 16px;
`;

const ProgressBar = (props) => {
	return (
		<ProgressBarContainer>
			<p className="text-center mb-1">{props.label}</p>
			<ProgressBarBox className="relative">
				<p className="text-center text-sm text-white absolute z-10 left-0 right-0">
					{props.rating}/10
				</p>

				<ProgressBarMarker
					rating={props.rating}
					className="absolute z-0 top-0"
				/>
			</ProgressBarBox>
		</ProgressBarContainer>
	);
};

export default ProgressBar;
