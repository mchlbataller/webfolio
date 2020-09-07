import { Center, Left, Right } from "components/AppViews";
import { assessment, portal, projectDapo } from "assets/images";

import { Apps as AppsIcon } from "assets/icons";
import { Card } from "components";
import LazyLoad from "react-lazyload";
import React from "react";
import styled from "styled-components";
import { useDataStore } from "state/data";

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
	const userData = useDataStore((state) => state.userData);

	return (
		<Card height="1200px" title="My Apps" headerIcon={<AppsIcon />}>
				{userData && userData.apps.map(app => (
					app.view === "left" ?
						<Left appTitle={app.appTitle} 
							appDescription={app.appDescription}
							imgSrc={app.imageUrl}
							linkToApp={app.linkToApp}
							inTheWorks={app.intheWorks}
						/> : 
					app.view === "center" ?
						<Center appTitle={app.appTitle} 
							appDescription={app.appDescription}
							imgSrc={app.imageUrl}
							linkToApp={app.linkToApp}
							inTheWorks={app.intheWorks}
						/> : 
						<Right appTitle={app.appTitle} 
							appDescription={app.appDescription}
							imgSrc={app.imageUrl}
							linkToApp={app.linkToApp}
							inTheWorks={app.intheWorks}
						/>
				))}

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
		</Card>
	);
};
