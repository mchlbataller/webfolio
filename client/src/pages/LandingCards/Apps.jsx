import { assessment, portal, projectDapo } from "assets/images";

import { Apps as AppsIcon } from "assets/icons";
import { Card } from "components";
import LazyLoad from "react-lazyload";
import React from "react";
import styled from "styled-components";

const Caption = styled.p.attrs({
	className: "text-xs sm:text-sm font-regular text-gray-400",
})``;

const Title = styled.h1.attrs({
	className: "sm:text-xl font-medium",
})``;

const Link = styled.p.attrs({
	className: "text-blue-400 text-xs cursor-pointer",
})``;

export const Apps = (props) => {
	return (
		<Card height="1200px" title="My Apps" headerIcon={<AppsIcon />}>
			{/* Web Portal App */}
			<div>
				<div className="grid grid-cols-2 gap-2">
					<div className="leading-tight">
						<p className="text-xs md:text-base text-gray-400">
							In the works:
						</p>
						<Title> Web Portal App</Title>
						<Link
							onClick={(e) =>
								window.open("https://portal.lynx-web.systems")
							}
						>
							portal.lynx-web.systems
						</Link>
						<br />
						<Caption>
							A web app that displays all of your subscribed apps.
							<br />
							<br />
							People won’t have to remember the web apps by mind
							and type ‘facebook.com’ or ‘youtube.com’ in the
							browser again.
						</Caption>
					</div>
					<div>
						<LazyLoad>
							<img src={portal} alt="portal" width="100%" />
						</LazyLoad>
					</div>
				</div>
			</div>

			{/* Assessment App */}
			<div className="leading-tight text-center mt-16">
				<LazyLoad>
					<img
						src={assessment}
						alt="assessment"
						className="w-3/4 mx-auto"
					/>
				</LazyLoad>
				<Title className="mt-3">
					Xavier School Nuvali <br /> Assessment App
				</Title>
				<p className="text-xs text-gray-600">
					App is currently not available for viewing
				</p>
				<Caption className="mt-2 w-5/6 mx-auto">
					An app that enables the enrollees to select School Supplies,
					Books, and Tuition Fees then the app gives a printable PDF
					for later assessment.
				</Caption>
			</div>

			{/* Project DAPO App */}
			<div className="leading-tight mt-16">
				<div className="grid grid-cols-2 gap-2">
					<div>
						<LazyLoad>
							<img src={projectDapo} alt="projectDapo" />
						</LazyLoad>
					</div>
					<div>
						<Title>Project DAPO App</Title>
						<Link
							onClick={(e) =>
								window.open("https://dapo.bnshosting.net")
							}
						>
							dapo.bnshosting.net
						</Link>
						<Caption className="mt-2 mx-auto">
							A web system that displays the project’s homepage
							and tracks the collected data.
						</Caption>
					</div>
				</div>
			</div>
		</Card>
	);
};
