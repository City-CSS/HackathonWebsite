import Question from "@/components/Question"
import React from "react";
import {
	AccordionProps, AccordionHeaderProps
} from "@material-tailwind/react"
import {
	Accordion as RawAccordion,
	AccordionBody,
	AccordionHeader as RawAccordionHeader
} from "@material-tailwind/react";


const Accordion = RawAccordion as unknown as React.FC<AccordionProps>;
const AccordionHeader = RawAccordionHeader as unknown as React.FC<AccordionHeaderProps>;

const CUSTOM_ANIMATION = {
	mount: {scale: 1, y: 0},
	unmount: {scale: 1, y: -80}
};

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
		answer: "Use the \"Get Tickets\" button at the top of the website."
	},
	{
		question: "Can I register alone or do I need a team?",
		answer: "You can join solo and find a team during the event, or you can register as a pre-formed team by inputting the same team name during registration."
	},
	{
		question: "What should I bring to the hackathon?",
		answer: "Bring your laptop, any necessary chargers, and any specific tools or software you'll need for your project."
	},
	{
		question: "How long does the hackathon last?",
		answer: "Unfortunately, the University has not given us permission to do this event overnight. Therefore the Hackathon is two days on a weekend, from 10 - 21."
	},
	{
		question: "Can I program overnight?",
		answer: "Yes! Despite the event being from 10 - 21, you can continue working on your project overnight if you wish."
	},
	{
		question: "Who owns the project?",
		answer: "The copyright of the project belongs to the team. The event has no rights over any of the projects."
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
		answer: "Yes! The official maximum team size is 4. Lower team sizes are allowed, if desired. If you have a large group of friends, we recommend breaking down into smaller teams."
	},
	{
		question: "Are there any prizes?",
		answer: "Yes! Prizes are awarded for the top 3 teams. Our sponsors may also give other prizes and awards!"
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
		<div className="normal-section">
			<h2>Frequently Asked Questions</h2>
			<div className="mx-auto lg:max-w-6xl px-4 ld:px-8">
				{/*TODO: Implement skip FAQ for keyboard only users*/}
				{FAQ_DATA.map((faq, index) => (
					<Accordion key={index} open={open === index + 1} className={`mb-2 sm:mb-4 rounded-lg px-4 ${open === index + 1 ? "bg-background-100": "bg-background-50"}`} animate={CUSTOM_ANIMATION}>
						<AccordionHeader
							onClick={() => handleOpen(index + 1)}
							className={`text-base lg:text-xl font-bold focus:outline-red-700 ${open === index + 1 ? "pb-1 pt-2 text-primary-600 hover:text-primary-500 focus:text-primary-500" : "py-2 text-primary-900 hover:text-primary-700 focus:text-primary-700"
							}`}
						>
							{faq.question}
						</AccordionHeader>
						<AccordionBody className="pt-1 pb-2 text-sm lg:text-lg">
							{faq.answer}
						</AccordionBody>
					</Accordion>
				))}

				<Question/>
			</div>
		</div>
	);
}
