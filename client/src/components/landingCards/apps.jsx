import { Caption, Title } from "components/appViews/assets/styles";
import { Center, Left, Right } from "components/appViews";

import { Apps as AppsIcon } from "assets/icons";
import { Card } from "components";
import LazyLoad from "react-lazyload";
import React from "react";
import { assessment } from "assets/images";
import { useDataStore } from "state/data";

export const Apps = () => {
	const userData = useDataStore((state) => state.userData);

	const props = (app) => ({
		appTitle: app.appTitle,
		appDescription: app.appDescription,
		imgSrc: app.imageUrl,
		linkToApp: app.linkToApp,
		inTheWorks: app.intheWorks,
		firstApp: app.firstApp,
	});

	return (
		<Card height="1200px" title="My Projects" headerIcon={<AppsIcon />}>
			{userData &&
				userData.apps.map((app) =>
					app.view === "left" ? (
						<Left {...props(app)} />
					) : app.view === "center" ? (
						<Center {...props(app)} />
					) : (
						<Right {...props(app)} />
					)
				)}

			{/* Assessment App */}
			<div className="leading-tight text-center mt-16">
				<LazyLoad>
					<img
						src={assessment}
						alt="assessment"
						className="w-3/4 mx-auto"
					/>
				</LazyLoad>
				<Title>
					Xavier School Nuvali <br /> Assessment App
				</Title>
				<p className="text-xs text-gray-600">
					App is currently not available for viewing
				</p>
				<Caption className="mt-2 w-5/6 mx-auto">
					An app that enables the enrollees to select School Supplies,
					Books, and Tuition Fees then the app gives a printable PDF
					for later assessment. <br />
					Made with Laravel Framework and PHP.
				</Caption>
			</div>
		</Card>
	);
};
