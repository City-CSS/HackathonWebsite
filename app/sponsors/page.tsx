'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";


export default function Home() {
	return (
		<div className="min-h-screen flex flex-col  bg-gradient-to-r from-[#F2F2F2] to-[#DBDBDB]">
			<Header/>
			<main className="flex-grow p-8">
				<Testimonial/>
				<Sponsors/>
				<Contact/>
			</main>
			<Footer/>
		</div>
	)
}
