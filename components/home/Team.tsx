import Link from "next/link"
import Image from "next/image"
import React, {ReactElement, useRef} from "react"
import {Discord, EnvelopeFill, Github, Globe, Instagram, Linkedin, Tiktok, Twitter} from "react-bootstrap-icons"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Team = () => {
	// const members: { src: string; alt: string }[] = [];
	// TODO: To be changed to use database
	const members = [
		{
			name: "Name Goes Here",
			title: "Job Title",
			socials: {
				instagram: "https://www.instagram.com/",
				twitter: "https://www.twitter.com/",
				linkedin: "https://www.linkedin.com/",
				github: "https://www.github.com/",
				tiktok: "https://www.tiktok.com/",
				discord: "https://www.discord.com/",
				email: "mailto:",
				website: "https://www.example.com/"
			},
			avatar: {
				src: '/CSSLogo.svg',
				alt: 'Placeholder Logo 1',
				width: 480,
				height: 560,
			}
		},
		{
			name: "2",
			title: "Job Title",
			socials: {
				twitter: "https://www.twitter.com/",
				instagram: "https://www.instagram.com/",
				linkedin: "https://www.linkedin.com/",
				github: "https://www.github.com/",
				website: "https://www.example.com/"
			},
			avatar: {
				src: '/CSSLogo.svg',
				alt: 'Placeholder Logo 1',
				width: 480,
				height: 560,
			}
		},
		{
			name: "3",
			title: "Job Title",
			socials: {
				instagram: "https://www.instagram.com/",
				twitter: "https://www.twitter.com/",
				linkedin: "https://www.linkedin.com/",
				github: "https://www.github.com/",
				tiktok: "https://www.tiktok.com/",
				website: "https://www.example.com/"
			},
			avatar: {
				src: '/CSSLogo.svg',
				alt: 'Placeholder Logo 1',
				width: 480,
				height: 560,
			}
		},
		// {
		// 	name: "4",
		// 	title: "Job Title",
		// 	socials: {
		// 		instagram: "https://www.instagram.com/",
		// 		twitter: "https://www.twitter.com/",
		// 		linkedin: "https://www.linkedin.com/",
		// 		github: "https://www.github.com/",
		// 		website: "https://www.example.com/"
		// 	},
		// 	avatar: {
		// 		src: '/CSSLogo.svg',
		// 		alt: 'Placeholder Logo 1',
		// 		width: 480,
		// 		height: 560,
		// 	}
		// },
		// {
		// 	name: "5",
		// 	title: "Job Title",
		// 	socials: {
		// 		instagram: "https://www.instagram.com/",
		// 		twitter: "https://www.twitter.com/",
		// 		linkedin: "https://www.linkedin.com/",
		// 		github: "https://www.github.com/",
		// 		website: "https://www.example.com/"
		// 	},
		// 	avatar: {
		// 		src: '/CSSLogo.svg',
		// 		alt: 'Placeholder Logo 1',
		// 		width: 480,
		// 		height: 560,
		// 	}
		// }
	];

	const sliderRef = useRef<Slider>(null); // Reference for slider control

	interface SocialLinks {
		instagram?: string;
		twitter?: string;
		linkedin?: string;
		github?: string;
		tiktok?: string;
		discord?: string;
		email?: string;
		website?: string;
	}

	interface SocialIcons {
		[key: string]: ReactElement;
	}

	const socialIcons : SocialIcons  = {
		instagram: <Instagram/>,
		twitter: <Twitter/>,
		linkedin: <Linkedin/>,
		github: <Github/>,
		tiktok: <Tiktok/>,
		discord: <Discord/>,
		email: <EnvelopeFill/>,
		website: <Globe/>
	};

	const slidesToShow = 3;
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: Math.min(slidesToShow, members.length),
		slidesToScroll: 1,
		autoplay: members.length > slidesToShow,
		autoplaySpeed: 2500,
		arrows: false,
		draggable: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: Math.min(2, members.length),
					autoplay: members.length > 2,
					autoplaySpeed: 2000
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: Math.min(1, members.length),
					autoplay: members.length > 1,
					autoplaySpeed: 1500
				}
			}
		]
	};

	return (
		<div className="pt-12 sm:pt-16">
			<div className="mx-auto bg-secondary-50 text-text-950 py-24 sm:py-32 px-4 lg:px-12 max-w-full">
				{/*TODO: Address issue with scaling for lower quantity of members*/}
				<div className="container mx-auto px-4">
					<h2 className="mx-auto text-3xl sm:text-4xl font-bold tracking-tight text-center pt-8 pb-12 px-12 max-w-2xl">Our Team</h2>

					<Slider {...settings} ref={sliderRef}>
						{members.map((member, index) => (
							// TODO: Fix production error
							// !171:8  Error: Missing "key" prop for element in iterator  react/jsx-key
							<div className="mb-6 lg:mb-0 px-6">
								<div className="block rounded-2xl bg-background-700">
									<div className="relative overflow-hidden bg-cover bg-no-repeat">
										<Image src={member.avatar.src} alt={member.avatar.alt} width={member.avatar.width} height={member.avatar.height} className="w-full rounded-t-2xl"/>
										<svg className="absolute text-primary-500 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
											<path
												d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
											</path>
										</svg>
									</div>
									<div className="text-center rounded-b-2xl bg-background-800 text-text-50 p-6">
										<h5 className="text-lg text-white font-bold">{member.name}</h5>
										<p className="-mt-1 mb-4">{member.title}</p>
										<div className="mx-auto text-secondary-300 flex list-inside justify-center">
											{Object.entries(member.socials).map(([social, link], index) => {
												return (
													<Link href={link} className="px-2" key={social}>
														{socialIcons[social]}
													</Link>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
		</div>
	</div>

	// OLD
	// <div className="mx-auto bg-secondary-50 text-text-950 py-24 sm:py-32 px-4 lg:px-12 max-w-full" onMouseOver={() => setPause(true)} onMouseLeave={() => setPause(false)}>
	// 	<h2 className="mx-auto text-3xl sm:text-4xl font-bold tracking-tight text-center pt-8 pb-12 px-12 max-w-2xl">Our Team</h2>
	// 	<div className="flex justify-center items-center">
	// 		<div className="relative overflow-hidden">
	// 			<div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"></div>
	// 			<div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"></div>
	// 			<div className="flex transition-transform duration-500 ease-in-out" ref={carouselRef}>
	// 				{team.map((member, index) => (
	// 					<div key={index} className="flex-shrink-0 w-64 px-4">
	// 						<img src={member.avatar.src} alt={member.name} width={member.avatar.width} height={member.avatar.height} className="rounded-lg shadow-md" />
	// 						<h2 className="mt-6 text-xl leading-7 font-semibold text-gray-900">{member.name}</h2>
	// 						<p className="mt-2 text-base leading-6 text-gray-500">{member.title}</p>
	// 					</div>
	// 				))}
	// 			</div>
	// 		</div>
	// 	</div>
	);
};

// <svg class="absolute text-white dark:text-neutral-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
//      viewBox="0 0 1440 320">
// 	<path fill="currentColor"
// 	      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
// 	</path>
// </svg>
//
// <svg class="absolute text-white dark:text-neutral-700  left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
//      viewBox="0 0 1440 320">
// 	<path fill="currentColor"
// 	      d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
// 	</path>
// </svg>
//
// <svg class="absolute text-white dark:text-neutral-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
//      viewBox="0 0 1440 320">
// 	<path fill="currentColor"
// 	      d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
// 	</path>
// </svg>

export default Team;
