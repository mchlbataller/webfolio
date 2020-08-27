import { About, Apps, Contact, Skills } from "pages/LandingCards";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Particles } from "components";
import React from "react";
import styled from "styled-components";
import { useDataStore } from "state/data";

const Heading = styled.section.attrs({
	className:
		"flex flex-col md:flex-row-reverse md:items-center relative md:px-16 xl:px-64",
})`
	width: 100%;
	min-height: 621px;
	background: #192835;
	border-radius: 0px 0px 18px 18px;
	margin-bottom: 15px;
`;

const SubHeader = styled.section.attrs({
	className:
		"lg:text-xl mt-8 mb-12 lg:mb-24 animate__animated animate__fadeInLeft",
})`
	* {
		font-family: Open Sans !important;
		color: white;
		font-weight: normal;
	}

	animation-delay: 1s;
`;

const Landing = (props) => {
	const data = useDataStore((state) => state.userData);
	const [imageIsLoaded, setImageLoadState] = React.useState(false);
	return (
		<div className="block">
			<Heading>
				<Particles />
				<div
					className="
						border-white rounded-full border-4
						w-64 md:w-1/2 lg:w-1/3 pointer-events-none
						overflow-hidden
						mx-auto mt-16 md:pt-0 z-0 
						relative flex-shrink-0 flex 
						bg-gray-200
						"
				>
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
				</div>

				<div className="flex-col flex-grow md:pt-24 pl-8">
					<p className="mt-8 text-2xl lg:text-4xl text-white font-bold leading-tight animate__animated animate__fadeInLeft">
						{data && data.header_greeting}
						<br />I am{" "}
						<span className="text-blue-300">
							Michael C. Bataller
						</span>
					</p>

					<SubHeader>
						{data &&
							data.header_description &&
							data.header_description.map((text) => (
								<p>{text}</p>
							))}
					</SubHeader>

					<Contact />
				</div>
			</Heading>

			<div ref={props.aboutRef} className="pt-10 w-full">
				<About />
			</div>
			<div className="flex flex-col flex-wrap items-start">
				<div ref={props.skillsRef} className="pt-10 w-full">
					<Skills />
				</div>
				<div ref={props.appRef} className="py-10 w-full">
					<Apps />
				</div>
				<div ref={props.contactRef} className="pb-10 w-full"></div>
			</div>
		</div>
	);
};

export default Landing;
