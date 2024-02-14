import React, {useEffect, useRef, useState} from "react"
import Image from "next/legacy/image"


const team = [
	{
		name: "1",
		title: "Job Title",
		social: "",
		avatar: {
			src: "https://source.unsplash.com/IF9TK5Uy-KI",
			width: 480,
			height: 560,
		},
	},
	{
		name: "2",
		title: "Job Title",
		social: "",
		avatar: {
			src: "https://source.unsplash.com/IF9TK5Uy-KI",
			width: 480,
			height: 560,
		},
	},
	{
		name: "3",
		title: "Job Title",
		social: "",
		avatar: {
			src: "https://source.unsplash.com/iEEBWgY_6lA",
			width: 580,
			height: 580,
		},
	},
	{
		name: "4",
		title: "Job title",
		social: "",
		avatar: {
			src: "https://source.unsplash.com/ZHvM3XIOHoE",
			width: 580,
			height: 580,
		},
	},
	{
		name: "5",
		title: "Job title",
		social: "",
		avatar: {
			src: "https://source.unsplash.com/ZHvM3XIOHoE",
			width: 580,
			height: 580,
		},
	},
	{
		name: "6",
		title: "Job title",
		social: "",
		avatar: {
			src: "https://source.unsplash.com/ZHvM3XIOHoE",
			width: 580,
			height: 580,
		},
	},
	{
		name: "7",
		title: "Job title",
		social: "",
		avatar: {
			src: "https://source.unsplash.com/ZHvM3XIOHoE",
			width: 580,
			height: 580,
		},
	},
	{
		name: "8",
		title: "Job title",
		social: "",
		avatar: {
			src: "https://source.unsplash.com/ZHvM3XIOHoE",
			width: 580,
			height: 580,
		},
	},
];

export default function Team() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [pause, setPause] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);

	const nextIndex = () => {
		setCurrentIndex((prevIndex) => prevIndex + 1 >= team.length ? 0 : prevIndex + 1);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!pause) {
				nextIndex();
			}
		}, 1200);

		return () => clearInterval(interval);
	}, [pause]);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.style.transform = `translateX(-${currentIndex * (100 / team.length)}%)`;
		}
	}, [currentIndex]);

	return (
		<div className="mx-auto bg-secondary-50 text-text-950 py-24 sm:py-32 px-4 lg:px-12 max-w-full" onMouseOver={() => setPause(true)} onMouseLeave={() => setPause(false)}>
			<h2 className="mx-auto text-3xl sm:text-4xl font-bold tracking-tight text-center pt-8 pb-12 px-12 max-w-2xl">Our Team</h2>
			<div className="flex justify-center items-center">
				<div className="relative overflow-hidden">
					<div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"></div>
					<div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"></div>
					<div className="flex transition-transform duration-500 ease-in-out" ref={carouselRef}>
						{team.map((member, index) => (
							<div key={index} className="flex-shrink-0 w-64 px-4">
								<Image src={member.avatar.src} alt={member.name} width={member.avatar.width} height={member.avatar.height} className="rounded-lg shadow-md" />
								<h2 className="mt-6 text-xl leading-7 font-semibold text-gray-900">{member.name}</h2>
								<p className="mt-2 text-base leading-6 text-gray-500">{member.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>

		// 	<div className="mx-auto max-w-4xl mt-16">
		// 		<h2 className="font-bold text-3xl text-gray-800 mb-4">
		// 			Empowering the next generation of developers
		// 		</h2>
		// 		<p className="text-lg leading-relaxed text-slate-500 mb-8">
		// 			Through the Hackathon we want to build a community of developers and designers that will help each other grow and learn. We want to create a space where people can learn from each other and build amazing projects together.
		// 		</p>
		//
		// 		<h3 className="font-bold text-2xl text-gray-800 mb-4">
		// 			Meet Our Team
		// 		</h3>
		// 		<div className="grid md:grid-cols-3 gap-10">
		// 			{team.map((item) => (
		// 				<div key={item.name} className="group">
		// 					<div className="w-full aspect-square">
		// 						<Image
		// 							src={item.avatar.src}
		// 							alt="Team"
		// 							width={item.avatar.width}
		// 							height={item.avatar.height}
		// 							className="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
		// 						/>
		// 					</div>
		//
		// 					<div className="mt-4 text-center">
		// 						<h4 className="font-semibold text-lg text-gray-800">
		// 							{item.name}
		// 						</h4>
		// 						<p className="text-sm text-slate-500">{item.title}</p>
		// 					</div>
		// 				</div>
		// 			))}
		// 		</div>
		// 	</div>
		// </div>
	);
}
