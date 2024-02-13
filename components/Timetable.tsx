import React, {useEffect, useRef, useState} from "react"
import {Tooltip} from "@material-tailwind/react"


const timeZone = 'Europe/London';

const events : Event[] = [
	{
		startTime : new Date('2024-02-11T09:00:00'),
		endTime : new Date('2024-02-11T19:33:00'),
		name : "Opening Remarks",
		description : ""
	},
	{
		startTime : new Date('2024-02-11T19:00:00'),
		endTime : new Date('2024-02-11T19:32:00'),
		name : "Opening Remarks",
		description : ""
	},
];

interface Event {
	startTime: Date;
	endTime: Date;
	name: string;
	description: string | null;
}

function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date.toLocaleString('default', { month: 'long' });

	let daySuffix;
	if (day > 3 && day < 21) daySuffix = 'th';
	else if (day % 10 === 1) daySuffix = 'st';
	else if (day % 10 === 2) daySuffix = 'nd';
	else if (day % 10 === 3) daySuffix = 'rd';
	else daySuffix = 'th';

	return `${day}${daySuffix} ${month}`;
}

function isCurrentEvent(event: Event): boolean {
	const currentTime = new Date();
	const currentDate = currentTime.toISOString().split('T')[0];
	const eventDate = event.startTime.toISOString().split('T')[0];

	const currentHours = parseInt(currentTime.toLocaleTimeString('en-US', { hour: '2-digit', hour12: false, timeZone: timeZone }));
	const currentMinutes = parseInt(currentTime.toLocaleTimeString('en-US', { minute: '2-digit', hour12: false, timeZone: timeZone }));

	const startHours = event.startTime.getHours();
	const startMinutes = event.startTime.getMinutes();
	const endHours = event.endTime.getHours();
	const endMinutes = event.endTime.getMinutes();

	return currentDate === eventDate &&
		(currentHours > startHours || (currentHours === startHours && currentMinutes >= startMinutes)) &&
		(currentHours < endHours || (currentHours === endHours && currentMinutes <= endMinutes));
}

function EventDay({event} : {event : Event}) {
	const bgColor = isCurrentEvent(event) ? 'bg-primary-500 text-text-50' : 'bg-white text-text-950';

	return (
		<div className={`flex flex-col ${bgColor} shadow-md bg-clip-border rounded-xl p-3`}>
			<div className="flex items-center justify-between">
				<p className="font-bold text-lg leading-relaxed">
					{event.name}
				</p>
				<p className="font-medium text-lg leading-relaxed">
					{event.startTime.toLocaleTimeString("en-US", {hour : "2-digit", minute : "2-digit", hour12 : false, timeZone : timeZone})} - {event.endTime.toLocaleTimeString("en-US", {hour : "2-digit", minute : "2-digit", hour12 : false, timeZone : timeZone})}
				</p>
			</div>
		</div>
	);
}

// TODO: Add auto updating based on the time.
export default function Timetable() {
	const sortedEvents = [...events].sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

	const eventsByDay: { [key: string]: Event[] } = sortedEvents.reduce((acc: { [key: string]: Event[] }, event) => {
		const eventDay = event.startTime.toISOString().split('T')[0];
		if (!acc[eventDay]) {
			acc[eventDay] = [];
		}
		acc[eventDay].push(event);
		return acc;
	}, {});

	return (
		<div className="pt-12 sm:pt-16">
			<h2 className="mx-auto text-3xl sm:text-4xl font-bold text-white tracking-tight text-center pt-8 pb-12 px-12 max-w-2xl">Event Timetable</h2>

			{Object.entries(eventsByDay).map(([day, events]: [string, Event[]], index: number) => (
				<div key={index}>
					<p className={`text-accent-500 text-center text-2xl font-bold pb-4 ${index === 0? "" : "pt-8"}`}>Day {formatDate(day)}</p>

					<div className="flex justify-center">
						<div className="flex flex-col shadow-md bg-clip-border rounded-xl w-96 gap-1 p-2">
							{events.map((event: Event, index: number) => (
								<EventDay key={index} event={event}/>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
