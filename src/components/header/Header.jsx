import React from "react";
import "./header.css";
import CTA from "./CTA";
import Logo from "../../assets/img2.png";
import { useSpring, animated } from "@react-spring/web";

const Header = () => {
	const springs = useSpring({
		from: { x: -1000, opacity: 0 },
		to: { x: 100, opacity: 1 },
		config: {
			duration: 600, // 1.5 seconds
			delay: 500, // 0.5 seconds
		},
	});
	return (
		<animated.div
			id="header"
			style={{
				...springs,
			}}
		>
			<div className="container header__container">
				<div className="header__container-left">
					<h2>Welcome to</h2>
					<h1 className="title">Patinescu SoundSystem</h1>
					<h4>
						"Light is a wave of electric and magnetic field...Sound is a wave of
						air pressure. According to Quantum Mechanics, all the particles in
						the universe have the proprieties of waves, including all the
						particles that we ourselves are made from. Therefore, to understand
						light, sound, and the very nature of reality, it is necesary to
						understand waves..." E.Khutoriansky
					</h4>
					<CTA />
				</div>
				<div className="header__container-right">
					<img src={Logo} alt="" className="logo" />
				</div>
			</div>
		</animated.div>
	);
};

export default Header;
