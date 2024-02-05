import Link from "next/link"
import {Instagram, Linkedin, Tiktok} from "react-bootstrap-icons"


export default function Footer() {
	return (
		<footer className="bg-background-950 text-white body-font bottom-0">
			<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<span className="text-primary-200 font-medium items-center ml-3 text-xl">Citython</span>

				<p className="text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2024 CSS @ CUoL</p>

				<p className={"text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4"}>
					<Link href="/policy.pdf">Privacy Policy</Link>
				</p>

				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
						<Link href="https://www.instagram.com/citython24/" className="px-1"><Instagram/></Link>
						<Link href="https://www.tiktok.com/@citython_24" className="px-1"><Tiktok/></Link>
						<Link href="https://www.linkedin.com/company/100610705/feed/posts/" className="px-1"><Linkedin/></Link>
	        </span>
			</div>
		</footer>
	)
};
