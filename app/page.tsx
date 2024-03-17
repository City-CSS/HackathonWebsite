"use client"

import React from "react";
import AboutUs from "@/components/home/AboutUs"
import Team from "@/components/home/Team";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import WhyAttend from "@/components/home/WhyAttend";
import Sponsors from "@/components/home/Sponsors";
import FAQ from "@/components/home/FAQ";
import Timetable from "@/components/home/Timetable";
import Stats from "@/components/home/old/Stats";


export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background-950 text-text-50 select-none">
			<main className="flex-grow pattern">
				<Hero/>
				<Sponsors/>
				<AboutUs/>
				<hr className="mx-auto w-3/5 sm:w-2/5"/>
				<WhyAttend/>
				{/*<Timetable/>*/}
				<Team/>
				{/*<Stats/>*/}
				<FAQ/>
				<Footer/>
			</main>
		</div>
	)
}
