

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Shape1 from '../Assets/hero/Clay_Black0003.png';
import Shape2 from '../Assets/hero/Clay_Black0004.png';
import Shape3 from '../Assets/hero/Clay_Black0005.png';
import Shape4 from '../Assets/hero/Clay_Black0006.png';
import Shape5 from '../Assets/hero/Clay_Black0007.png';

const Hero = () => {
	const calculateTimeLeft = () => {
		const difference = +new Date("2024-03-02") - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	const timerComponents = Object.keys(timeLeft).map((interval) => {
		return (
			<div className="flex justify-center items-center flex-col rounded-full  bg-tertiary bg-[#414141] w-30 h-30 md:w-36 md:h-36" key={interval}>
				<div className="text-4xl md:text-6xl text-white text-center">{timeLeft[interval as keyof typeof timeLeft]}</div>
				<div className="text-xs md:text-base text-white text-center">{interval.toUpperCase()}</div>
			</div>
		);
	});

	return (
		<section className="sm:mb-32 w-full mb-8 flex flex-col relative" id="hero" aria-label="hero">

			<div className="container 2xl:max-w-[1280px] w-full mx-auto max-xl:px-6 flex justify-center items-center flex-col lg:min-h-[800px] min-h-[600px] relative z-10">
				<div style={{ opacity: 1, transform: 'none' }} className="relative z-10">
					<div className="flex justify-center items-center gap-2 md:gap-8">
						{timerComponents}
					</div>
				</div>
				<div className="flex justify-center items-center flex-col pt-2 relative z-10">
					<h1 className="text-gray-700 text-8xl mt-4 text-center" style={{ opacity: 1, transform: 'none' }}>City Hackathon</h1>
					<h1 className=" text-gray-700  text-xl text-center" style={{ opacity: 1, transform: 'none' }}>2024</h1>
				</div>
				<div className="z-0 absolute top--15 left-0">
					<Image src={Shape1} alt="hello" />
					<Image src={Shape2} alt="hello" />
				</div>
				<div className="z-0 absolute top--10 right-0">
					<Image src={Shape3} alt="hello" />
					<Image src={Shape5} alt="hello" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
