import React, {ReactElement} from "react";
import {
	Accordion as RawAccordion,
	AccordionBody,
	AccordionHeader as RawAccordionHeader
} from "@material-tailwind/react";


const Accordion = RawAccordion as unknown as (props: {
	children: ReactElement[],
	open: boolean,
	className: string
}) => ReactElement;

const AccordionHeader = RawAccordionHeader as unknown as (props: {
	children: string,
	onClick: () => void,
	className: string
}) => ReactElement;

const FAQ_DATA = [
	{
		question: "What is a hackathon?",
		answer: "Similarly to a marathon, a hackathon is an event where individuals or teams collaborate intensively on projects centered around programming."
	},
	{
		question: "Who can participate?",
		answer: "Any student with an interest in programming, development, and technology! However, if you have never programmed - don't worry! No specific background is required, and you can always learn or help in other ways."
	},
	{
		question: "How do I register for the hackathon?",
		answer: "Use the \"Get Tickets\" button throughout our website."
	},
	{
		question: "Can I participate alone or do I need a team?",
		answer: "You can do either! You can join solo and find a team during the event, or you can register as a pre-formed team by inputting the same team name."
	},
	{
		question: "What should I bring to the hackathon?",
		answer: "Bring your laptop, any necessary chargers, and any specific tools or software you'll need for your project."
	},
	{
		question: "How long does the hackathon last?",
		answer: "The hacking period is 24 hours. You will be able to sleep on campus, so don't worry!. The total duration of the event will be about 30 hours."
	},
	{
		question: "What kind of projects are allowed?",
		answer: "Projects can range from software applications, websites, mobile apps, to hardware projects. The sky's the limit!"
	},
	{
		question: "I can't think of any idea, can you help?",
		answer: "Absolutely! Coming up with ideas can be challenging, but we've got your back. Consider exploring your interests, consider problems or challenges about your daily struggles, or something that you're passionate about! If you still can't think of anything, give us a shout!"
	},
	{
		question: "Are there any limits for team size?",
		answer: "Yes! The official maximum team size is 4. There is no minimum team size. You can have a bigger team, however, if you win any prizes, there will only be prizes available for 4 members. We recommend breaking down into smaller teams."
	},
	{
		question: "Are there any prizes?",
		answer: "Yes! Prizes are awarded for the top 3 teams. Our sponsors may also give other prizes and awards."
	},
	{
		question: "Can I attend if I'm not a coding expert?",
		answer: "Absolutely! Hackathons are a great opportunity to learn, collaborate, and have fun. If you've never programmed, this event is a great way to try out and see if it's something you're interested in! There will also be mentors to help out!"
	}
];

export default function FAQ() {
	const [open, setOpen] = React.useState<number>(1);
	const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-2 lg:px-8">
				{FAQ_DATA.map((faq, index) => (
					<Accordion key={index} open={open === index + 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
						<AccordionHeader
							onClick={() => handleOpen(index + 1)}
							className={`border-b-0 py-2 ${
								open === index + 1 ? "py-0 pt-2 text-blue-500 hover:!text-blue-700" : ""
							}`}
						>
							{faq.question}
						</AccordionHeader>
						<AccordionBody className="pt-0 py-2 text-base font-normal">
							{faq.answer}
						</AccordionBody>
					</Accordion>
				))}
			</div>
		</div>
	);
}