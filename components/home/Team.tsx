import supabase from "@/app/api/supabaseClient"
import FallbackImage from "@/components/FallbackImage"
import Link from "next/link"
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
						let membersWithAvatars: Member[];

						membersWithAvatars = await Promise.all(data.map(async(member) => {
							const avatarURL = insSupabase
								.storage
								.from("TeamMembers")
								.getPublicUrl(`${member.id}`)
								.data;

							return {
								...member, avatar : {
									src : avatarURL.publicUrl,
									alt : `${member.name}'s avatar`,
									width : 512,
									height : 512,
								},
							};
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
	// TODO: Investigate this sometimes not working
	const settings = {
		dots: false,
		arrows: false,
		draggable: false,
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "0",
		autoplay: members.length > slidesToShow,
		pauseOnHover: true,
		pauseOnFocus: true,
		slidesToShow: Math.min(slidesToShow, members.length),
		speed: 1250,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: Math.min(2, members.length),
				},
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

	function customLoader({ src } : { src: string }) {
		return src;
	}

	return (
		<div className="highlight-section">
			{/*TODO: Address issue with scaling for lower quantity of members*/}
			<div className="container mx-auto px-4">
				<h2>Our Team</h2>

				<Slider {...settings} ref={sliderRef}>
					{members.map((member, index) => {
						return (
							<div className="mb-6 lg:mb-0 px-6" key={index}>
								<div className="block rounded-2xl bg-background-700">
									<div className="relative overflow-hidden bg-cover bg-no-repeat">
										<FallbackImage
											src={member.avatar.src}
											fallbackSrc="PersonLoadError.svg"
											alt={member.avatar.alt}
											loader={customLoader}
											width={member.avatar.width}
											height={member.avatar.height}
											unoptimized
											className="w-full rounded-t-2xl"
											style={{ aspectRatio: "1/1", objectFit: "cover" }}
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
										<p className="default-ignored -mt-1 mb-4">{member.role}</p>
										<div className="mx-auto text-secondary-300 flex list-inside justify-center min-h-[1em]">
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
	);
};

export default Team;

//! TODO: Report this issue to react-slick
//! Warning: `Infinity` is an invalid value for the `width` css style property.
// 	div
// Track@webpack-internal:///(app-pages-browser)/./node_modules/react-slick/lib/track.js:320:24
// div
// div
// InnerSlider@webpack-internal:///(app-pages-browser)/./node_modules/react-slick/lib/inner-slider.js:197:24
// Slider@webpack-internal:///(app-pages-browser)/./node_modules/react-slick/lib/slider.js:167:24
// div
// div
// Team@webpack-internal:///(app-pages-browser)/./components/home/Team.tsx:31:80
// main
// div
// Home
// StaticGenerationSearchParamsBailoutProvider@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/static-generation-searchparams-bailout-provider.js:16:64
// InnerLayoutRouter@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:243:18
// RedirectErrorBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:73:9
// RedirectBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:81:24
// NotFoundErrorBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:76:9
// NotFoundBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:84:62
// LoadingBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:335:76
// ErrorBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:161:67
// InnerScrollAndFocusHandler@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:152:9
// ScrollAndFocusHandler@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:227:37
// RenderFromTemplateContext@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/render-from-template-context.js:16:44
// OuterLayoutRouter@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:354:209
// body
// html
// RedirectErrorBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:73:9
// RedirectBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:81:24
// NotFoundErrorBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:76:9
// NotFoundBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:84:62
// DevRootNotFoundBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/dev-root-not-found-boundary.js:33:24
// ReactDevOverlay@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:84:9
// HotReload@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:307:37
// Router@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/app-router.js:181:114
// ErrorBoundaryHandler@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:114:9
// ErrorBoundary@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:161:67
// AppRouter@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/app-router.js:536:47
// ServerRoot@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-index.js:129:24
// RSCComponent
// Root@webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-index.js:145:24 app-index.js:33:21
// error app-index.js:33
// error hydration-error-info.js:45
// printWarning react-dom.development.js:94
// error react-dom.development.js:68
// warnStyleValueIsInfinity react-dom.development.js:4578
// warnValidStyle react-dom.development.js:4596
// setValueForStyle react-dom.development.js:4670
// setValueForStyles react-dom.development.js:4746
// setProp react-dom.development.js:32733
// updateProperties react-dom.development.js:34078
// commitUpdate react-dom.development.js:35485
// commitMutationEffectsOnFiber react-dom.development.js:22569
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22422
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22527
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22527
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22422
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22422
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22527
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22527
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22527
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22527
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22422
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22422
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22422
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22527
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22527
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22422
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22422
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22422
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22422
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22383
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22810
// recursivelyTraverseMutationEffects react-dom.development.js:22361
// commitMutationEffectsOnFiber react-dom.development.js:22615
// commitMutationEffects react-dom.development.js:22331
// commitRootImpl react-dom.development.js:26091
// commitRoot react-dom.development.js:25957
// performSyncWorkOnRoot react-dom.development.js:24815
// flushSyncWorkAcrossRoots_impl react-dom.development.js:10286
// flushSyncWorkOnAllRoots react-dom.development.js:10246
// commitRootImpl react-dom.development.js:26244
// commitRoot react-dom.development.js:25957
// commitRootWhenReady react-dom.development.js:24677
// finishConcurrentRender react-dom.development.js:24642
// performConcurrentWorkOnRoot react-dom.development.js:24487
// workLoop scheduler.development.js:256
// flushWork scheduler.development.js:225
// performWorkUntilDeadline scheduler.development.js:534
// (Async: EventHandlerNonNull)
// <anonymous> scheduler.development.js:569
// <anonymous> scheduler.development.js:630
// NextJS 4
// <anonymous> index.js:6
// NextJS 4
// <anonymous> react-dom.development.js:27
// <anonymous> react-dom.development.js:38423
// NextJS 4
// <anonymous> index.js:37
// NextJS 4
// <anonymous> client.js:3
// NextJS 4
// <anonymous> app-index.js:15
// NextJS 4
// <anonymous> app-next-dev.js:9
// appBootstrap app-bootstrap.js:57
// loadScriptsInSequence app-bootstrap.js:23
// appBootstrap app-bootstrap.js:56
// <anonymous> app-next-dev.js:8
// NextJS 7
