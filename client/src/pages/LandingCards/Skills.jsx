import { Computer, Computer2 } from "assets/icons";

import { Card } from "components";
import { ProgressBar } from "components";
import React from "react";

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

export const Skills = (props) => (
	<>
		<Card height="540px" title="Soft Skills" headerIcon={<Computer />}>
			{/* TODO: Transform to map */}
			{SoftSkills.map((e) => (
				<ProgressBar rating={e.rating} label={e.label} />
			))}
		</Card>

		<Card height="460px" title="Hard Skills" headerIcon={<Computer2 />}>
			{HardSkills.map((element) => (
				<ProgressBar rating={element.rating} label={element.label} />
			))}
		</Card>
	</>
);
