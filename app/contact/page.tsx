'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header/>
			<main className="flex-grow p-8">
				<div className="text-center">
					<h2 className="text-3xl font-semibold mb-4">Sponsors</h2>
					<p className="text-gray-600">
						The city hackathon team
					</p>
				</div>
			</main>
			<Footer/>
		</div>
	)
}
