"use client"

import React from "react";
import AboutUs from "@/components/home/AboutUs"
// import Team from "@/components/Team"
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import WhyAttend from "@/components/home/WhyAttend";
import Sponsors from "@/components/home/Sponsors";
// import Timetable from "@/components/Timetable";
import FAQ from "@/components/home/FAQ";
import Timetable from "@/components/Timetable";
import Team from "@/components/Team";
import Stats from "@/components/home/old/Stats";
import CenteringGrid from "@/components/CenteringGrid";
import {Info} from "@/components/InfoMessages";
import Question from "@/components/Question";
import Waitlist from "@/components/Waitlist";


export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background-950 text-text-50 select-none">
			<main className="flex-grow pattern">
				<Waitlist/>
			</main>
		</div>
	)
}
