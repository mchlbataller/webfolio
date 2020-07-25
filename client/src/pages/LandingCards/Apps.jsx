import { assessment, portal, projectDapo } from "assets/images";

import { Apps as AppsIcon } from "assets/icons";
import { Card } from "components";
import React from "react";

export const Apps = (props) => {
	return (
		<>
			<Card height="1200px" title="My Apps" headerIcon={<AppsIcon />}>
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
							<p className="text-xl font-light">
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
		</>
	);
};
