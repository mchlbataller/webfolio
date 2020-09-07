import { Computer, Computer2 } from "assets/icons";

import { Card } from "components";
import { ProgressBar } from "components";
import React from "react";
import { useDataStore } from "state/data";

const SoftSkills = [
	{ label: "Website Development Agility", rating: 8 },
	{ label: "Developing Websites", rating: 9 },
	{ label: "Website Design", rating: 9 },
	{ label: "Graphics", rating: 8 },
];

const HardSkills = [
	{ label: "JavaScript", rating: 8 },
	{ label: "React", rating: 8 },
	{ label: "PHP", rating: 8 },
	{ label: "Adobe Photoshop CC", rating: 9 },
];

export const Skills = (props) => {
	const userData = useDataStore(state => state.userData);

	return (
		<>
			<Card height="540px" title="Soft Skills" headerIcon={<Computer />}>
				{/* TODO: Transform to map */}
				{userData && userData.softskills.map((e) => (
					<ProgressBar rating={e.value} label={e.label} />
				))}
			</Card>

			<Card height="460px" title="Hard Skills" headerIcon={<Computer2 />}>
				{userData && userData.hardskills.map((element) => (
					<ProgressBar
						rating={element.rating}
						label={element.label}
					/>
				))}
			</Card>
		</>
	);
};
