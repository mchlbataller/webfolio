import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ThemeContext } from "ThemeProvider";
import styled from "styled-components";

// Holds the centered rating text and
// the grey progress bar container
const ProgressBarContainer = styled.div.attrs({
	className: "mx-auto",
})`
	height: 22px;

	background: ${(props) => props.background};
	border: 0px solid #e3e3e3;
	box-sizing: border-box;
	border-radius: 6px;
	@media (min-width: 1024px) {
		width: 200%;
	}
	overflow: hidden;
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
	const theme = React.useContext(ThemeContext);

	const fillerStyles = {
		height: "100%",
		width: `${props.rating * 10}%`,
		backgroundColor: theme.progressBar.foreground,
		borderRadius: "inherit",
		textAlign: "right",
	};

	return (
		<Box className="lg:w-1/3">
			<p className="text-center text-sm sm:text-base lg:text-left mb-1 whitespace-no-wrap">
				{props.label}
			</p>
			<ProgressBarContainer background={theme.progressBar.background}>
				<ScrollAnimation
					animateIn="animate__slideInLeft"
					style={fillerStyles}
				>
					<span className="text-xs sm:text-sm text-white mr-5 font-medium font-regular">
						{props.rating}0%
					</span>
				</ScrollAnimation>
			</ProgressBarContainer>
		</Box>
	);
};

export default ProgressBar;
