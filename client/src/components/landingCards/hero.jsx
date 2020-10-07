import "fontsource-raleway/700.css";

import { blue, grey } from "@material-ui/core/colors";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Contact } from "./contact";
import React from "react";
import Typist from "react-typist";
import styled from "styled-components";
import { useDataStore } from "state/data";

const Particles = React.lazy(() => import("components/particles"));

const Heading = styled.main.attrs({
	className:
		"flex flex-col md:flex-row-reverse items-center relative md:px-16 xl:px-64",
})`
	width: 100%;
	min-height: 90vh;
	background: #192835;
	border-radius: 0px 0px 18px 18px;
	margin-bottom: 15px;

	@media (max-width: 425px) {
		padding-top: 3rem;
	}

	& section {
		* {
			font-family: "Raleway", sans-serif;
		}

		h1.animate__fadeInUp {
			font-size: 4rem;
			color: white;
			font-weight: 700;
			color: ${blue[100]};
			animation-delay: 500ms;
		}

		.subheader {
			color: ${grey[300]};
			font-size: 2rem;
			animation-delay: 200ms;
		}
	}
`;

const SubHeader = styled.section.attrs({
	className:
		"lg:text-xl mt-8 mb-12 lg:mb-24 animate__animated animate__fadeIn",
})`
	* {
		font-family: "Roboto Mono", "SF Mono", "Courier New", Courier, monospace !important;
		color: #94b8d8;
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
		<Heading>
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

			<section className="flex-col flex-grow md:pt-24 pl-8 w-full">
				<p className={"subheader" + " " + classNames.animation}>
					Hi, I am
				</p>
				<h1 className={classNames.animation}> Michael C. Bataller </h1>
				<SubHeader>
					{data && <p>{data.header_intro}</p>}

					{data && (
						<Typist cursor={{ show: false }}>
							{data.header_description.map((text, key) => (
								<div key={key}>
									<span>{text}</span>
									<Typist.Backspace
										count={text.length}
										delay={1500}
									/>
								</div>
							))}

							<span>{data.header_descriptionFinal}</span>
						</Typist>
					)}
				</SubHeader>

				<Contact />
			</section>
		</Heading>
	);
};
