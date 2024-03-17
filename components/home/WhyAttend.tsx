import React from "react"
import {
	AwardFill,
	BriefcaseFill,
	ChatDotsFill,
	GraphUpArrow,
	PeopleFill,
	Tools
} from "react-bootstrap-icons"


const features = [
	{
		name: "Build Portfolio",
		description:
			"Hackathons often result in project prototypes or solutions that can be showcased on a your resume or portfolio, demonstrating initiative and practical skills.",
		icon: BriefcaseFill
	},
	{
		name: "Win Prizes",
		description:
			"Citython offers prizes for the top 3 teams. Our sponsors may also give other prizes and awards.",
		icon: AwardFill
	},
	{
		name: "Develop Skills",
		description:
			"Hackathons offer a hands-on environment to master new programming languages, frameworks, and technologies. You can rapidly advance your technical abilities.",
		icon: Tools
	},
	{
		name: "Collaborate",
		description:
			"Hackathons require intense teamwork, pushing students to communicate effectively, allocate tasks, and resolve conflicts, crucial skills for the workplace.",
		icon: PeopleFill
	},
	{
		name: "Network with Others",
		description:
			"You can interact with peers, mentors, and industry professionals. These connections can be valuable for future collaborations or career guidance.",
		icon: ChatDotsFill
	},
	{
		name: "Boost confidence",
		description:
			"The thrill of creating something functional in a short time frame under pressure can be a tremendous confidence builder, motivating further exploration and achievement.",
		icon: GraphUpArrow
	}
]

export default function WhyAttend() {
	return (
		<div className="normal-section">
			<h2>Why Attend?</h2>
			<div className="mx-auto max-w-2xl lg:max-w-4xl px-8 lg:px-6">
				<dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
					{features.map((feature) => (
						<div key={feature.name} className="relative pl-10 md:pl-16">
							<dt className="font-bold md:text-lg text-accent-500">
								<div className="absolute left-0 top-0 flex h-8 md:h-10 w-8 md:w-10 items-center justify-center rounded-lg bg-secondary-700">
									<feature.icon className="h-4 w-4 md:h-6 md:w-6 text-white" aria-hidden="true"/>
								</div>
								{feature.name}
							</dt>
							<dd className="mt-2 text-sm leading-snug md:text-base">{feature.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}
