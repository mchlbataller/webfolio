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

	background-color: ${(props) => props.background};
	@media (min-width: 1024px) {
		width: 200%;
	}
	border-radius: 5px;
	-webkit-perspective: 1000;
	-webkit-backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);
	outline: none;
	border: none;
	text-decoration: none;

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

export const ProgressBar = (rating, label) => {
	const theme = React.useContext(ThemeContext);

	const fillerStyles = {
		height: "100%",
		width: `${rating * 10}%`,
		backgroundColor: theme.progressBar.foreground,
		borderRadius: "2px",
		textAlign: "right",
	};

	return (
		<Box className="lg:w-1/3">
			{console.log(window.scrollY)}
			<p className="text-center text-sm sm:text-base lg:text-left mb-1 whitespace-no-wrap">
				{label}
			</p>
			<ProgressBarContainer background={theme.progressBar.background}>
				<ScrollAnimation
					animateIn="animate__slideInLeft"
					style={fillerStyles}
				>
					<span className="text-xs sm:text-sm text-white mr-5 font-medium font-regular">
						{rating}0%
					</span>
				</ScrollAnimation>
			</ProgressBarContainer>
		</Box>
	);
};
