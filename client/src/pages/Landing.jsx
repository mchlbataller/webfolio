import { Apps, Header, Skills } from "components/landingCards";

import React from "react";

const About = React.lazy(() => import("components/landingCards/about"));

const Landing = (props) => {
	return (
		<main className="block">
			<Header />

			<section ref={props.aboutRef} className="pt-10 w-full">
				<About />
			</section>

			<section className="flex flex-col flex-wrap items-start">
				<div ref={props.skillsRef} className="pt-10 w-full">
					<Skills />
				</div>
				<div ref={props.appRef} className="py-10 w-full">
					<Apps />
				</div>
				<div ref={props.contactRef} className="pb-10 w-full"></div>
			</section>
		</main>
	);
};

export default Landing;
