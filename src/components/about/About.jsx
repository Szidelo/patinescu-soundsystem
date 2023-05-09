import React from "react";
import IMG from "../../assets/img1.png";
import './about.css'
import SVG1 from '../../assets/309753.svg'

const About = () => {
	return (
		<section id="about">
			<h1>About</h1>

      

			<div className="container about__container">
				<div className="about__container-left">
					<img src={IMG} alt="" className="img"/>
				</div>

				<div className="about__container-right">
        
					<h2>Some Title</h2>
          
					<article className="details">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
						dignissimos itaque facilis repellendus tempora dolorem rem! Culpa
						odio quibusdam vel officia similique ex? Ipsum quo quod sunt
						praesentium aliquam fugiat!
					</article>
          <img src={SVG1} alt="" className="svg"/>
				</div>
			</div>
		</section>
	);
};

export default About;
