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
		{
			name : "Transistor",
			link : "https://transistor.com",
			image : "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
			type : SponsorType.Platinum
		},
		{
			name : "Reform",
			link : "https://reform.com",
			image : "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
			type : SponsorType.Gold
		},
		{
			name : "Tuple",
			link : "https://tuple.com",
			image : "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
			type : SponsorType.Silver
		},
		{
			name : "SavvyCal",
			link : "https://savvycal.com",
			image : "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
			type : SponsorType.Bronze
		},
		{
			name : "Statamic",
			link : "https://statamic.com",
			image : "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
			type : SponsorType.Supporter
		},
		{
			name : "Statamic",
			link : "https://statamic.com",
			image : "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
			type : SponsorType.Supporter
		},
		{
			name : "Statamic",
			link : "https://statamic.com",
			image : "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
			type : SponsorType.Supporter
		}
	]

	return (
		<div className=" py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
					Sponsored By:
				</h2>
				{sponsors.length > 0 ? (
					<CenteringGrid colSize={4} iterator={sponsors}>
						{(sponsor, index, widthClass) => (
							<Link href={sponsor.link} key={index} className={widthClass + " px-2 py-2 flex justify-center items-center"}>
								<Image
									src={sponsor.image}
									alt={sponsor.name + " logo"}
									width={158}
									height={48}
								/>
							</Link>
						)}
					</CenteringGrid>
				) : (
					<div>
						<p className="text-center text-gray-600 py-6">No sponsors yet!<br/>Do you want to be the first?</p>
						<div className="flex justify-center items-center">
							<Button className="inline-flex items-center bg-primary-100 hover:bg-primary-200 text-primary-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
								<Link href="/sponsor">Sponsor Our Event!</Link>
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
