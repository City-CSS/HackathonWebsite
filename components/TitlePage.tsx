import React from 'react';
// import Ticket from "@/components/Ticket"
import Waitlist from "@/components/Waitlist"
import {CalendarFill, GeoAltFill} from "react-bootstrap-icons"


const TitlePage = () => {
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
			<div className="mx-auto max-w-3xl text-center">
				<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl lg:text-9xl">
					Citython<br/>2024
				</h1>

				<h2 className="mx-auto text-accent-100 mt-4 max-w-xl sm:text-xl/relaxed">
					City University&apos;s annual hackathon is back!
				</h2>

				<div className="grid grid-cols-2 gap-4 mt-16 text-xl font-bold">
					<div className="inline-flex items-center">
						<CalendarFill className="mr-2 text-primary-400 text-2xl"/>
						<span className="font-bold">March 2nd & 3rd</span>
					</div>
					<div className="inline-flex items-center">
						<GeoAltFill className="mr-2 text-primary-400 text-2xl"/>
						<span className="font-bold">City University of London</span>
					</div>
				</div>

				<Waitlist/>
				{/*<Ticket/>*/}
			</div>
		</div>
	);
};

export default TitlePage;
