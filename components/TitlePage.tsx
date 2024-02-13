// import Ticket from "@/components/Ticket"
import Waitlist from "@/components/Waitlist"
import React from 'react';


const TitlePage = () => {
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
			<div className="mx-auto max-w-3xl text-center">
				<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl lg:text-9xl">
					Citython<br/>2024
				</h1>

				<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
					City University's annual hackathon is back! Join us for a weekend of innovation, creativity, and fun on 2nd and 3rd of March!
				</p>

				<Waitlist/>
				{/*<Ticket/>*/}
			</div>
		</div>
	);
};

export default TitlePage;
