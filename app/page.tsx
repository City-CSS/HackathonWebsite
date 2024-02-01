'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import Stats from "@/components/Stats";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";


export default function Home() {
	return (
		<div className="min-h-screen flex flex-col  bg-gradient-to-r from-[#F2F2F2] to-[#DBDBDB]">
			<Header/>
			<main className="flex-grow p-8">
				<Hero/>
				<hr className="my-8 border-t border-gray-400" />
				<Sponsors/>
				<Features2/>
				<Stats/>

			</main>
			<Footer/>
		</div>
	)
}
