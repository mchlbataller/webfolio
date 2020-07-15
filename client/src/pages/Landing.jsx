import { About, Apps, Contact, Skills } from "pages/LandingCards";

import { Particles } from "../components";
import React from "react";
import michael from "../assets/Michael.png";
import styled from "styled-components";

const Heading = styled.section`
	width: 100%;
	height: 581px;

	background: #202a33;
	border-radius: 0px 0px 18px 18px;
	margin-bottom: 15px;
`;

const SubHeader = styled.section.attrs({
	className: "text-xl mt-8 mb-24 leading-tight pl-8 fade-in-bottom",
})`
	* {
		font-family: Open Sans !important;
		color: white;
		font-weight: normal;
	}

	animation-delay: 0.6s;
`;

const Landing = (props) => {
	return (
		<div className="block lg:hidden">
			<Heading>
				<Particles />
				<img
					src={michael}
					alt="Michael"
					className="mx-auto pt-16 z-0 relative w-3/5"
				/>

				<p
					style={{ fontSize: "20pt" }}
					className="mt-8 pl-8 text-white font-bold leading-tight fade-in-bottom"
				>
					Hi,
					<br />I am{" "}
					<span className="text-blue-300">Michael C. Bataller</span>
				</p>

				<SubHeader>
					<p>I am a hard-working</p>
					<p>developer</p>
				</SubHeader>
			</Heading>

			<About />
			<Skills />
			<Apps />
			<Contact />
		</div>
	);
};

export default Landing;
