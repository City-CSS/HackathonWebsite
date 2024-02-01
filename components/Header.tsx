import {Button} from "@/components/ui/button";

export default function Header() {

	return(

		<header className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
					<a href="/sponsors" className="mr-5 hover:text-gray-900">Sponsors</a>
					<a href="/about" className="mr-5 hover:text-gray-900">About</a>
					<a href="/contact" className="mr-5 hover:text-gray-900">Contact</a>
				</nav>
				<a href="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">

					<span className="ml-3 text-xl">City Hackathon</span>
				</a>
				<div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
					<Button  className="inline-flex items-center  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
						<a className="text-gray-600" href="/profile">Get Tickets!</a>
					</Button>
				</div>
			</div>
		</header>
	)
}
