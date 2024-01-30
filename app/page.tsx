'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col  bg-gradient-to-r from-[#F2F2F2] to-[#DBDBDB]">
			<Header/>
			<main className="flex-grow p-8">
				<Hero/>
			</main>
			<Footer/>
		</div>
	)
}
