import supabase from "@/app/api/supabaseClient"
import Link from "next/link"
import Image from "next/image"
import React, {ReactElement, useRef} from "react"
import {Discord, EnvelopeFill, Github, Globe, Instagram, Linkedin, Tiktok, Twitter} from "react-bootstrap-icons"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Team = () => {
	interface Member {
		id: number;
		name: string;
		role: string;
		socials: { [key: string]: { data: string; position: number } };
		avatar: {
			src: string;
			alt: string;
			width: number;
			height: number;
		};
	}

	const [members, setMembers] = React.useState<Member[]>([]);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const insSupabase = supabase()
				if (insSupabase != null) {
					const { data, error } = await insSupabase
						.from("TeamMember")
						.select("*")
						.order("position", { ascending: true });

					if (error) {
						console.error("Error fetching team members: " + error);
					} else {
						let membersWithAvatars: any[];

						membersWithAvatars = await Promise.all(data.map(async(member) => {
							const {data : avatarData, error : avatarError} = await insSupabase
								.storage.from("TeamMembers")
								.download(`${member.id}`);

							if (avatarError) {
								return {
									...member, avatar : {
										src : '/CSSLogo.svg', alt : "Placeholder avatar", width : 480, height : 560,
									},
								};
							} else {
								const arrayBuffer = await avatarData.arrayBuffer();
								const base64Avatar = btoa(
									String.fromCharCode(...new Uint8Array(arrayBuffer))
								);

								return {
									...member, avatar : {
										src : `data:image/jpeg;base64,${base64Avatar}`,
										alt : `${member.name}'s avatar`,
										width : 480,
										height : 560,
									},
								};
							}
						}));

						setMembers(membersWithAvatars);
					}
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);


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

	const paths = [
		"M0,160L26.7,138.7C53.3,117,107,75,160,53.3C213.3,32,267,32,320,58.7C373.3,85,427,139,480,160C533.3,181,587,171,640,181.3C693.3,192,747,224,800,240C853.3,256,907,256,960,261.3C1013.3,267,1067,277,1120,288C1173.3,299,1227,309,1280,277.3C1333.3,245,1387,171,1413,133.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z",
		"M0,32L26.7,26.7C53.3,21,107,11,160,21.3C213.3,32,267,64,320,90.7C373.3,117,427,139,480,170.7C533.3,203,587,245,640,240C693.3,235,747,181,800,133.3C853.3,85,907,43,960,37.3C1013.3,32,1067,64,1120,106.7C1173.3,149,1227,203,1280,192C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z",
		"M0,128L26.7,133.3C53.3,139,107,149,160,128C213.3,107,267,53,320,69.3C373.3,85,427,171,480,197.3C533.3,224,587,192,640,176C693.3,160,747,160,800,176C853.3,192,907,224,960,208C1013.3,192,1067,128,1120,101.3C1173.3,75,1227,85,1280,117.3C1333.3,149,1387,203,1413,229.3L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z",
		"M0,288L26.7,293.3C53.3,299,107,309,160,288C213.3,267,267,213,320,192C373.3,171,427,181,480,192C533.3,203,587,213,640,218.7C693.3,224,747,224,800,229.3C853.3,235,907,245,960,250.7C1013.3,256,1067,256,1120,245.3C1173.3,235,1227,213,1280,208C1333.3,203,1387,213,1413,218.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z",
		"M0,64L26.7,106.7C53.3,149,107,235,160,245.3C213.3,256,267,192,320,165.3C373.3,139,427,149,480,154.7C533.3,160,587,160,640,144C693.3,128,747,96,800,80C853.3,64,907,64,960,85.3C1013.3,107,1067,149,1120,160C1173.3,171,1227,149,1280,165.3C1333.3,181,1387,235,1413,261.3L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z",
	];

	return (
		<div className="pt-12 sm:pt-16">
			<div className="mx-auto bg-secondary-50 text-text-950 py-24 sm:py-32 px-4 lg:px-12 max-w-full">
				{/*TODO: Address issue with scaling for lower quantity of members*/}
				<div className="container mx-auto px-4">
					<h2 className="mx-auto text-3xl sm:text-4xl font-bold tracking-tight text-center pt-8 pb-12 px-12 max-w-2xl">Our Team</h2>

					<Slider {...settings} ref={sliderRef}>
						{members.map((member, index) => {
							return (
								<div className="mb-6 lg:mb-0 px-6" key={index}>
									<div className="block rounded-2xl bg-background-700">
										<div className="relative overflow-hidden bg-cover bg-no-repeat">
											<Image
												src={member.avatar.src}
												alt={member.avatar.alt}
												width={member.avatar.width}
												height={member.avatar.height}
												className="w-full rounded-t-2xl"
											/>
											<svg
												className="absolute text-background-800 left-0 bottom-0"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 1440 320"
											>
												<path fill="currentColor" d={paths[index % paths.length]} />
											</svg>
										</div>
										<div className="text-center rounded-b-2xl bg-background-800 text-text-50 p-6">
											<h5 className="text-lg text-white font-bold">{member.name}</h5>
											<p className="-mt-1 mb-4">{member.role}</p>
											<div className="mx-auto text-secondary-300 flex list-inside justify-center">
												{Object.entries(member.socials)
												       .sort((a, b) => a[1].position - b[1].position)
												       .map(([social, { data }], index) => {
													       return (
														       <Link href={data} className="px-2" key={index}>
															       {socialIcons[social]}
														       </Link>
													       );
												       })}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</Slider>
				</div>
		</div>
	</div>
	);
};

// 	<path
// 	      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
// 	</path>
// 	<path
// 	      d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
// 	</path>
// 	<path
// 	      d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
// 	</path>

export default Team;
