import React from "react"
import Image from "next/image"
import Link from "next/link"


export default function AboutUs() {
	return (
		<div className="pt-6 sm:pt-12">
			<h3 className="mx-auto text-2xl sm:3x; font-bold text-primary-100 tracking-tight text-center pt-8 px-12 ">Brought to you by...</h3>
			<h2 className="mx-auto text-3xl sm:text-4xl font-bold text-primary-300 tracking-tight text-center px-12">Computer Science Society</h2>
			<div className="pt-3">
				<Link href="https://www.citystudents.co.uk/getinvolved/society/css/">
					<Image src="/CSSLogo.svg" alt="CSS Logo" width={200} height={200} className="mx-auto"/>
				</Link>
			</div>
			<div className="mx-auto text-lg text-center max-w-xl px-4 lg:px-0">
				<p className="pt-12">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
				<p className="pt-3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
		</div>
	)
}
