import "animate.css/animate.min.css";
import "aos/dist/aos.css";

import { Apps, Header, Skills } from "components/landingCards";
import { Banner, Navbar } from "components";

import AOS from "aos";
import React from "react";

React.lazy(() => import("fontsource-raleway"));
React.lazy(() => import("fontsource-open-sans"));
const About = React.lazy(() => import("components/landingCards/about"));

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
	initClassName: "aos-init", // class applied after initialization
	animatedClassName: "aos-animate", // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// Scroll to element function
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 50);

const Landing = (props) => {
	/* Refs for Scrolling START */
	const [appsRef, skillsRef, contactRef, aboutRef] = [
		React.useRef(null),
		React.useRef(null),
		React.useRef(null),
		React.useRef(null),
	];
	/* Refs for Scrolling END */

	return (
		<main className="block">
			<Navbar
				app={() => scrollToRef(appsRef)}
				contact={() => scrollToRef(contactRef)}
				skills={() => scrollToRef(skillsRef)}
				top={() => window.scrollTo(0, 0)}
				about={() => scrollToRef(aboutRef)}
			/>

			<Header />

			<section ref={aboutRef} className="pt-10 w-full">
				<About />
			</section>

			<section className="flex flex-col flex-wrap items-start">
				<div ref={skillsRef} className="pt-10 w-full">
					<Skills />
				</div>
				<div ref={appsRef} className="py-20 w-full">
					<Apps />
				</div>
				<div ref={contactRef} className="pb-10 w-full"></div>
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
