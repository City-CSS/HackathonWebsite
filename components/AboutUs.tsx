import React from "react"
import Image from "next/image"
import Link from "next/link"


export default function AboutUs() {
	return (
		<div className="pt-6 sm:pt-12">
			<h2 className="mx-12 bg-gradient-to-r from-lime-300 via-red-500 to-purple-500 bg-clip-text text-3xl sm:text-4xl font-bold text-transparent leading-tight text-center pb-5">
				<span className="text-xl sm:text-2xl lg:3xl text-text-50">Brought to you by...</span><br/>
				Computer Science Society
			</h2>
			<div className="mx-auto relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40">
				<Link href="https://www.citystudents.co.uk/getinvolved/society/css/">
					<Image src="/CSSLogo.svg" alt="CSS Logo" fill={true} className="mx-auto"/>
				</Link>
			</div>
			<div className="mx-auto sm:text-lg text-center max-w-xl px-8 lg:px-0">
				<p className="pt-8 sm:pt-12">
					The City University of London Computer Science Society is a vibrant community of students passionate about all things tech. We believe in the power of technology to inspire, innovate, and drive positive change. Whether you're a seasoned programmer, a curious beginner, or simply interested in the world of computing, there's a place for you in our society.
				</p>
				<p className="pt-3 sm:pt-4">
					We offer a wide range of events and activities to spark your interest and build your skills. Join us for hands-on workshops where you'll learn about cutting-edge technologies like AI, participate in lively tech discussions, network with fellow students at our socials, and get inspired at our industry events.  And of course, our highlight of the year is Citython 2024, a hackathon where you'll put your knowledge to the test and create amazing solutions.
				</p>
			</div>
		</div>
	)
}
