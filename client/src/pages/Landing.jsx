import { Card, CardHeader } from "../components";
import { Email, FBLogo, Linkedin, Phone, Twitter } from "../assets/icons";
import { Particles, ProgressBar } from "../components";
import { assessment, portal, projectDapo } from "../assets/images";

import React from "react";
import Typist from "react-typist";
import facebook from "../assets/icons/facebook.png";
import michael from "../assets/Michael.png";
import styled from "styled-components";

const AboutContent = styled.div`
	p {
		font-family: "Open Sans", sans-serif;
		font-weight: 300;
		padding-left: 10px;
		padding-right: 10px;
		margin-bottom: 8px;
	}
`;

const SoftSkills = [
	{ label: "Website Development Agility", rating: 8 },
	{ label: "Developing Websites", rating: 9 },
	{ label: "Website Design", rating: 9 },
	{ label: "Graphics", rating: 8 },
];

const HardSkills = [
	{ label: "JavaScript", rating: 7 },
	{ label: "React", rating: 8 },
	{ label: "PHP", rating: 8 },
	{ label: "Adobe Photoshop CC", rating: 9 },
];

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

			<Card height="426px" title="About Me">
				<AboutContent>
					<p>
						A student acquiring a bachelor’s degree in Computer
						Engineering, currently on its 3rd year. <br />
						<br />
						My passion is developing websites and web apps, and it
						made me efficient in making these.
					</p>
				</AboutContent>
			</Card>

			<Card height="540px" title="Soft Skills">
				<br />
				{/* TODO: Transform to map */}
				{SoftSkills.map((e) => (
					<ProgressBar rating={e.rating} label={e.label} />
				))}
			</Card>

			<Card height="460px">
				<CardHeader>Hard Skills</CardHeader>
				<br />
				{HardSkills.map((element) => (
					<ProgressBar
						rating={element.rating}
						label={element.label}
					/>
				))}
			</Card>

			<Card height="1200px">
				<CardHeader>My Apps</CardHeader>
				<br />
				<br />
				{/* Web Portal App */}
				<div>
					<div className="grid grid-cols-2 gap-2">
						<div className="leading-tight">
							<p>In the works:</p>
							<p className="text-xl font-light">Web Portal App</p>
							<p
								className="text-blue-600 text-xs cursor-pointer"
								onClick={(e) =>
									window.open(
										"https://portal.lynx-web.systems"
									)
								}
							>
								portal.lynx-web.systems
							</p>
							<br />
							<p className="text-sm font-regular">
								A web app that displays all of your subscribed
								apps.
								<br />
								<br />
								People won’t have to remember the web apps by
								mind and type ‘facebook.com’ or ‘youtube.com’ in
								the browser again.
							</p>
						</div>
						<div>
							<img src={portal} alt="portal" width="100%" />
						</div>
					</div>
				</div>

				{/* Assessment App */}
				<div className="leading-tight text-center mt-16">
					<img
						src={assessment}
						alt="assessment"
						className="w-3/4 mx-auto"
					/>
					<p className="text-xl font-light mt-3">
						Xavier School Nuvali <br /> Assessment App
					</p>
					<p className="text-xs">
						App is currently not available for viewing
					</p>
					<p className="text-sm mt-2 w-5/6 mx-auto font-regular">
						An app that enables the enrollees to select School
						Supplies, Books, and Tuition Fees then the app gives a
						printable PDF for later assessment.
					</p>
				</div>

				{/* Project DAPO App */}
				<div className="leading-tight mt-16">
					<div className="grid grid-cols-2 gap-2">
						<div>
							<img src={projectDapo} alt="projectDapo" />
						</div>
						<div>
							<br />
							<br />
							<p className="text-xl font-light mt-3">
								Project DAPO App
							</p>
							<p
								className="text-blue-600 text-xs cursor-pointer"
								onClick={(e) =>
									window.open("https://dapo.bnshosting.net")
								}
							>
								dapo.bnshosting.net
							</p>
							<p className="text-sm mt-2 mx-auto font-regular">
								A web system that displays the project’s
								homepage and tracks the collected data.
							</p>
						</div>
					</div>
				</div>
			</Card>

			<Card>
				<CardHeader>Let's talk!</CardHeader>
				<div className="mx-auto w-full mt-10 pl-5 md:pl-10">
					<div className="flex items-center">
						<Email width="35px" />
						<p className="ml-5">mchlbataller@gmail.com</p>
					</div>

					<div className="flex items-center mt-5">
						<Phone />
						<p className="ml-5">+639101840284</p>
					</div>

					<div className="flex items-center mt-5">
						<img src={facebook} alt="facebook" width="35px" />
						<p
							className="ml-5 text-sm text-blue-600"
							onClick={(e) =>
								window.open(
									"https://www.facebook.com/mchlbataller"
								)
							}
						>
							facebook.com/mchlbataller
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Landing;
