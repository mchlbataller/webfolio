import { Email, FBLogo, Linkedin, Phone, Twitter } from "../assets/icons";
import { assessment, portal, projectDapo } from "../assets/images";

import { ProgressBar } from "../components";
import React from "react";
import Typist from "react-typist";
import facebook from "../assets/icons/facebook.png";
import michael from "../assets/Michael.png";
import styled from "styled-components";

const TopGradient = styled.div`
	position: absolute;
	width: 100%;
	height: 209px;
	left: 0px;
	top: 0px;
	z-index: 0;
	background: linear-gradient(
		179.85deg,
		#2998ff 6.42%,
		rgba(255, 255, 255, 0) 99.77%
	);
`;

const Card = styled.div.attrs({
	className: "mx-auto",
})`
	width: 100%;
	height: ${(props) => props.height || "500px"};
	padding-left: 20px;
	padding-right: 20px;

	background: #fafafa;
	border: 1px solid rgba(0, 0, 0, 0.08);
	box-sizing: border-box;
	border-radius: 20px;
	margin-bottom: 2rem;
`;

const AboutContent = styled.div`
	margin-top: 30px;
	p {
		font-family: "Open Sans", sans-serif;
		font-weight: 300;
		font-size: 18px;
		padding-left: 10px;
		padding-right: 10px;
		margin-bottom: 8px;
	}
`;

const CardHeader = styled.p.attrs({
	className: "text-center font-semibold text-2xl mt-20",
})``;

const HardSkills = [
	{ label: "JavaScript", rating: 7 },
	{ label: "React", rating: 8 },
	{ label: "PHP", rating: 8 },
	{ label: "Adobe Photoshop CC", rating: 9 },
];

const Landing = (props) => {
	return (
		<div className="block lg:hidden">
			<TopGradient />

			<img
				src={michael}
				alt="Michael"
				className="mx-auto pt-10 z-0 relative"
			/>

			<p style={{ fontSize: "24px" }} className="mt-10 pl-5">
				Hi,
				<br />I am Michael C. Bataller
			</p>

			<div className="text-3xl font-semibold mt-12 mb-24 leading-tight pl-5">
				<Typist>
					<span> I am a hard-working </span>
					<Typist.Backspace count={13} delay={1000} />
					<span> nice </span>
					<Typist.Backspace count={5} delay={1000} />
					<span>passionate </span>
				</Typist>
				<p>developer</p>
			</div>

			<Card height="426px">
				<CardHeader>About Me</CardHeader>
				<AboutContent>
					<p className="text-center">
						A student acquiring a bachelor’s degree in Computer
						Engineering, currently on its 3rd year.
					</p>
					<p className="text-center">
						My passion is developing websites and web apps, and it
						made me efficient in making these.
					</p>
				</AboutContent>
			</Card>

			<Card height="540px">
				<CardHeader>Soft Skills</CardHeader>
				<br />
				{/* TODO: Transform to map */}
				<ProgressBar rating="8" label="Developing Websites" />
				<ProgressBar rating="8" label="Agility in Development" />
				<ProgressBar rating="8" label="Graphic Design" />
				<ProgressBar rating="7" label="Working with Teams" />
				<ProgressBar rating="7" label="Socializing" />
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
