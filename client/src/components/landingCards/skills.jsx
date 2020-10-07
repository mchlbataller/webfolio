import { Computer, Computer2 } from "assets/icons";

import { Card } from "components";
import { ProgressBar } from "components";
import React from "react";
import { useDataStore } from "state/data";

export const Skills = (props) => {
	const userData = useDataStore((state) => state.userData);

	return (
		<section data-aos="fade-up" data-aos-once="true">
			<h1
				className="text-center text-3xl lg:text-5xl font-extrabold text-blue-400"
				data-aos="fade-up"
				style={{ fontFamily: "'Raleway', sans-serif" }}
			>
				Skills
			</h1>
			<p
				className="px-10 lg:text-lg text-center text-gray-400"
				data-aos="fade-in"
				data-aos-delay="500"
			>
				These skills are helping me in accomplishing tasks, including my
				goals in life.{" "}
			</p>
			<br />
			<br />
			<br />
			<Card height="540px" title="Soft Skills" headerIcon={<Computer />}>
				{/* TODO: Transform to map */}
				{userData &&
					userData.softskills.map((e) => (
						<ProgressBar rating={e.value} label={e.label} />
					))}
			</Card>

			<Card height="460px" title="Hard Skills" headerIcon={<Computer2 />}>
				{userData &&
					userData.hardskills.map((element) => (
						<ProgressBar
							rating={element.rating}
							label={element.label}
						/>
					))}
			</Card>
		</section>
	);
};
