import CenteringGrid from "@/components/CenteringGrid"
import {Button} from "@material-tailwind/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"


export default function Sponsors() {
	enum SponsorType {
		PLATINUM = 'Platinum',
		GOLD = 'Gold',
		SILVER = 'Silver',
		BRONZE = 'Bronze',
		SUPPORTER = 'Supporter'
	}

	interface Sponsor {
		name: string;
		link: string;
		image: string;
		type: SponsorType;
	}

	const sponsors : Sponsor[] = [
		// {
		// 	name : "Transistor",
		// 	link : "https://transistor.com",
		// 	image : "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
		// 	type : SponsorType.PLATINUM
		// }
	]

	return (
		<div className="mx-auto bg-secondary-50 text-text-950 py-24 sm:py-32 px-4 lg:px-12 max-w-full">
			<h2 className={`mx-auto text-3xl sm:text-4xl font-bold tracking-tight text-center px-12 max-w-2xl ${sponsors.length > 0? "pb-12" : ""}`}>Our Sponsors</h2>
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
				<p className="text-center text-lg pt-12 pb-4">Want to sponsor? 😀</p>
			) : (
					<p className="text-center text-lg pb-4">No sponsors yet. 😔<br/>Do you want to be the first?</p>
			)}

			<div className="flex flex-wrap justify-center gap-4">
				{/*TODO: Implement sponsor page*/}
				<Link href="/sponsor" draggable="false">
					<Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-text-950 focus:outline-red-700 text-lg py-2 px-4">Sponsor Citython</Button>
				</Link>
			</div>
		</div>
	)
}
