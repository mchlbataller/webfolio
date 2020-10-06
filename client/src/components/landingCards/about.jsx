import React from "react";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";
import styled from "styled-components";
import { useDataStore } from "state/data";

const StyledSection = styled.section.attrs({
	className:
		"flex items-center justify-center flex-col w-full px-5 lg:px-0 lg:w-3/4 mx-auto",
})`
	min-height: 80vh;
	font-family: "Open Sans", sans-serif;

	& svg {
		width: 70px;
		fill: #9adbff;
	}

	& h1 {
		font-family: "Raleway", sans-serif;
	}
`;

export const About = () => {
	const data = useDataStore((state) => state.userData);
	return (
		<StyledSection>
			<div data-aos="fade-up">
				<UserIcon />
			</div>
			<h1
				className="text-center text-lg lg:text-5xl font-extrabold text-blue-400"
				data-aos="fade-up"
			>
				{data?.about_header}
			</h1>
			<br />
			<div data-aos="fade-up" className="lg:w-2/3 leading-tight">
				{data.about_text.map((text) => (
					<p className="mb-3 text-center text-gray-300 text-sm lg:text-lg">
						{text}
					</p>
				))}

				<hr
					className="text-center w-1/4 bg-white mt-32 mx-auto"
					data-aos="flip-right"
				/>
			</div>
		</StyledSection>
	);
};

export default About;
