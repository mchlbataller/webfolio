import { Apps, Header, Skills } from "components/landingCards";

import { Banner } from "components";
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
				<div ref={props.appRef} className="py-20 w-full">
					<Apps />
				</div>
				<div ref={props.contactRef} className="pb-10 w-full"></div>
			</section>
			<Banner
				autoHideDuration={10000}
				forFirstVisitsOnly
				type="info"
				message="Welcome back to the 
				2nd iteration of my website!"
			/>
			<Banner
				autoHideDuration={10000}
				forFirstVisitsOnly
				message="This site uses analytics. 
							By using our site, you agree to the 
							collection of anonymous data to 
							analyze web traffic and optimize 
							your experience. "
				type="info"
				style={{ marginBottom: "60px" }}
			/>
		</main>
	);
};

export default Landing;
