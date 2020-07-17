import { About, Apps, Contact, Skills } from "pages/LandingCards";

import { Particles } from "../components";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import michael from "../assets/Michael.png";
import styled from "styled-components";

const Heading = styled.section.attrs({
	className:
		"flex flex-col md:flex-row-reverse md:items-center relative md:px-16 xl:px-64",
})`
	width: 100%;
	height: 581px;
	background: #202a33;
	border-radius: 0px 0px 18px 18px;
	margin-bottom: 15px;
`;

const SubHeader = styled.section.attrs({
	className:
		"text-xl lg:text-2xl mt-8 mb-24 leading-tight pl-8 animate__animated animate__fadeInUp",
})`
	* {
		font-family: Open Sans !important;
		color: white;
		font-weight: normal;
	}

	animation-delay: 1s;
`;

const Landing = (props) => {
	return (
		<div className="block">
			<Heading>
				<Particles />
				<img
					src={michael}
					alt="Michael"
					className="mx-auto pt-16 md:pt-0 z-0 relative w-64 flex-shrink-0 flex md:w-1/2 lg:w-1/3"
				/>

				<div className="flex-col flex-grow md:pt-24">
					<p className="mt-8 pl-8 text-3xl lg:text-4xl text-white font-bold leading-tight animate__animated animate__fadeInUp">
						Hi,
						<br />I am{" "}
						<span className="text-blue-300">
							Michael C. Bataller
						</span>
					</p>

					<SubHeader>
						<p>I am a hard-working</p>
						<p>website designer/developer</p>
					</SubHeader>
				</div>
			</Heading>

			<About />
			<div className="flex flex-col flex-wrap items-start">
				<Skills />
				<Apps />
				<Contact />
			</div>
		</div>
	);
};

export default Landing;
