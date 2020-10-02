import "aos/dist/aos.css"; // You can also use <link> for styles

import AOS from "aos";
import React from "react";
import { User as UserIcon } from "assets/icons";
import styled from "styled-components";
import { useDataStore } from "state/data";

AOS.init();

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
`;

export const About = () => {
	const data = useDataStore((state) => state.userData);
	return (
		<StyledSection>
			<UserIcon data-aos="fade-up" />
			<h1
				className="text-center text-lg lg:text-3xl font-bold text-blue-500"
				data-aos="fade-up"
			>
				{data?.about_header}
			</h1>
			<br />
			<div data-aos="fade-up">
				{data.about_text.map((text) => (
					<p className="mb-3 text-center text-gray-300 text-sm lg:text-base">
						{text}
					</p>
				))}
			</div>
		</StyledSection>
	);
};

export default About;
