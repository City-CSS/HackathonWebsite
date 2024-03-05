import supabase from "@/app/api/supabaseClient"
import CenteringGrid from "@/components/CenteringGrid"
import TEMP_SponsorButton from "@/components/TEMP_SponsorButton"
// import {Button} from "@material-tailwind/react"
import {Error} from "@/components/InfoMessages"
import Image from "next/image"
import Link from "next/link"
import React, {useEffect, useState} from "react"
import {SupabaseClient} from "@supabase/supabase-js";


export default function Sponsors() {
	const [error, setError] = React.useState<string>("");

	enum SponsorType {
		PLATINUM = 'Platinum',
		GOLD = 'Gold',
		SILVER = 'Silver',
		BRONZE = 'Bronze',
		SUPPORTER = 'Supporter',
		PLACEHOLDER = 'Placeholder'
	}

	interface Sponsor {
		name: string;
		link: string;
		image: string;
		type: SponsorType;
	}

	interface DatabaseRecord {
		name: string;
		url: string;
		logo_uri: string;
		tier: string;
	}

	const [sponsors, setSponsors] = useState<Sponsor[]>([]);

	useEffect(() => {
		const fetchSponsors = async () => {
			try {
				const insSupabase = supabase()
				if (insSupabase != null) {
					const {data: sponsors, error} = await (insSupabase as SupabaseClient)
						.from('Sponsors')
						.select('name, url, tier, logo_uri');

					console.log(error)
					if (error) {
						setError("Unable to load sponsors! Please try again later.")
					}

					const transformedSponsors = sponsors != null
						? sponsors.map((sponsor : DatabaseRecord) => ({
							name: sponsor.name,
							link: sponsor.url,
							image: sponsor.logo_uri || "/ImageLoadError.svg",
							type: SponsorType[sponsor.tier as keyof typeof SponsorType]
						}))
						: [{name: "", link: "", image: "", type: SponsorType.PLACEHOLDER}];

					setSponsors(transformedSponsors);
				} else {
					setError("DB412: Failed Database Precondition!")
				}
			} catch (error) {}
		};

		fetchSponsors();
	}, []);

	return (
		<div className="mx-auto bg-background-50 text-text-950 py-24 sm:py-32 px-4 lg:px-12 max-w-full">
			<h2 className={`mx-auto text-3xl sm:text-4xl font-bold tracking-tight text-center px-12 max-w-2xl ${sponsors.length > 0? "pb-12" : ""}`}>Our Sponsors</h2>

			<div className="mx-auto max-w-2xl lg:max-w-4xl px-6">
				{error !== "" ? (
					<Error message={error}/>
				) : (
					<>
						<CenteringGrid colSize={3} iterator={sponsors}>
							{(sponsor, index, widthClass) => (
								<Link href={sponsor.link} key={index} className={widthClass + " px-2 py-2 flex justify-center items-center"} draggable="false">
									<Image
										src={sponsor.image}
										alt={sponsor.name + " logo"}
										width={158}
										height={48}
									/>
								</Link>
							)}
						</CenteringGrid>

						{sponsors.length > 0 ? (
							<p className="text-center text-lg pt-12">Interested in sponsoring us? 😀</p>
						) : (
							<p className="text-center text-lg pb-4">No sponsors yet. 😔<br/>Do you want to be the first?</p>
						)}
					</>
				)}
			</div>

			<div className="flex flex-wrap justify-center gap-4">
				<TEMP_SponsorButton/>

				{/*/!*TODO: Implement sponsor page*!/*/}
				{/*<Link href="/sponsor" draggable="false">*/}
				{/*	<Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-text-950 focus:outline-red-700 text-lg py-2 px-4">Sponsor Citython</Button>*/}
				{/*</Link>*/}
			</div>
		</div>
	)
}
