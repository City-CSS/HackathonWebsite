"use client"

import React from "react";
import AboutUs from "@/components/AboutUs"
// import Team from "@/components/Team"
import Footer from "@/components/Footer";
import TitlePage from "@/components/TitlePage";
import WhyAttend from "@/components/WhyAttend";
import Sponsors from "@/components/Sponsors";
// import Timetable from "@/components/Timetable";
import FAQ from "@/components/FAQ";


export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background-950 text-text-50 select-none">
			<main className="flex-grow pattern">
				<TitlePage/>
				<Sponsors/>
				<AboutUs/>
				<WhyAttend/>
				{/*<Timetable/>*/}
				{/*<Team/>*/}
				<FAQ/>
				<Footer/>
			</main>
		</div>
	)
}
