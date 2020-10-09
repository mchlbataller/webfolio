import "fontsource-raleway/700.css";
import "fontsource-source-code-pro";
import "react-typist/dist/Typist.css";

import { blue, grey } from "@material-ui/core/colors";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Contact } from "./contact";
import React from "react";
import Typist from "react-typist";
import breakpoints from "styles/breakpoints";
import styled from "styled-components";
import { useDataStore } from "state/data";

const Particles = React.lazy(() => import("components/particles"));

const StyledSection = styled.main.attrs({
	className:
		"flex flex-col md:flex-row-reverse items-center relative md:px-16",
})`
	width: 100%;
	min-height: 90vh;
	background: #192835;
	border-radius: 0px 0px 18px 18px;
	margin-bottom: 15px;

	@media (${breakpoints.laptopL}) {
		padding: 0 10rem;
	}

	@media (max-width: 425px) {
		padding-top: 3rem;
	}

	& section {
		* {
			font-family: "Raleway", sans-serif;
		}

		h1.animate__fadeInUp {
			font-size: 2.125rem;
			@media (${breakpoints.tablet}) {
				font-size: 3rem;
			}
			@media (${breakpoints.laptopS}) {
				font-size: 4rem;
			}
			color: white;
			font-weight: 700;
			color: ${blue[100]};
			animation-delay: 500ms;
		}

		.subheader {
			color: ${grey[300]};
			font-size: 1.25rem;
			@media (${breakpoints.tablet}) {
				font-size: 1rem;
			}
			@media (${breakpoints.laptopS}) {
				font-size: 2rem;
			}
			animation-delay: 200ms;
		}
	}
`;

const IntroText = styled.section.attrs({
	className:
		"lg:text-xl mt-8 mb-12 lg:mb-24 animate__animated animate__fadeIn",
})`
	* {
		font-family: "Source Code Pro", "Roboto Mono", "SF Mono", "Courier New",
			Courier, monospace !important;
		color: ${grey[200]};
		font-weight: normal;
	}

	animation-delay: 1s;
`;

const classNames = {
	profileImage: `
        border-white rounded-full border-4
        w-64 md:w-1/2 lg:w-1/3 pointer-events-none
        overflow-hidden
        mx-auto mt-16 md:pt-0 z-0 
        relative flex-shrink-0 flex 
		bg-gray-200
		animate__animated animate__fadeIn
    `,
	headerText: `mt-8 text-2xl lg:text-5xl 
        text-white leading-tight font-bold
		animate__animated animate__fadeInUp`,
	animation: `animate__animated animate__fadeInUp`,
};

export const Header = (props) => {
	const data = useDataStore((state) => state.userData);
	const [imageIsLoaded, setImageLoadState] = React.useState(false);

	return (
		<StyledSection>
			<Particles />
			<section className={classNames.profileImage}>
				{!imageIsLoaded && (
					<div className="my-20 mx-auto">
						<CircularProgress />
					</div>
				)}
				<img
					src={data && data.header_profileURL}
					alt="Michael"
					className="object-contain"
					style={{ display: imageIsLoaded ? "block" : "none" }}
					onLoad={() => setImageLoadState(true)}
				/>
			</section>

			<section className="flex-col flex-grow mt-10 md:pt-24 pl-6 w-full">
				<p className={"subheader " + classNames.animation}>Hi, I am</p>
				<h1 className={classNames.animation}> Michael C. Bataller </h1>
				<IntroText>
					{data && <p>{data.header_intro}</p>}

					<Typist cursor={{ blink: true }}>
						<span>software engineer</span>
						<Typist.Backspace count={14} delay={1500} />
						<span>web designer</span>
						<Typist.Backspace count={17} delay={1500} />
						<span>problem solver</span>
						<Typist.Backspace count={12} delay={1500} />
						<span>web developer</span>
					</Typist>
				</IntroText>

				<Contact />
			</section>
		</StyledSection>
	);
};
