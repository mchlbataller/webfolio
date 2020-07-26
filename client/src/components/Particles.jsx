import Particles from "react-tsparticles";
import React from "react";

const particlesConfig = {
	fpsLimit: 60,
	particles: {
		number: {
			value: 160,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: "#ffffff",
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000",
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 4,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "repulse",
			},
			onclick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 48.724632738080714,
				size: 69.02656304561432,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 129.93235396821524,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
};

export const ParticlesComponent = (props) => {
	return (
		<Particles
			className="absolute top-0 h-64 w-full md:right-0 md:w-1/3 md:h-full"
			id="tsparticles"
			options={particlesConfig}
		/>
	);
};
