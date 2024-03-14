"use client"

import React from "react";
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
