import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const team = [
	{
		name: "Name Surname",
		title: "Job Title",
		avatar: {
			src: "https://source.unsplash.com/IF9TK5Uy-KI",
			width: 480,
			height: 560,
		},
	},
	{
		name: "Name Surname",
		title: "Job Title",
		avatar: {
			src: "https://source.unsplash.com/iEEBWgY_6lA",
			width: 580,
			height: 580,
		},
	},
	{
		name: "Name Surname",
		title: "Job title",
		avatar: {
			src: "https://source.unsplash.com/ZHvM3XIOHoE",
			width: 580,
			height: 580,
		},
	},
];

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-r from-[#F2F2F2] to-[#DBDBDB]">
			<Header />
			<main className="flex-grow p-8">
				<div className="mx-auto max-w-4xl mt-16">
					<h2 className="font-bold text-3xl text-gray-800 mb-4">
						Empowering the next generation of developers
					</h2>
					<p className="text-lg leading-relaxed text-slate-500 mb-8">
					Through the Hackathon we want to build a community of developers and designers that will help each other grow and learn. We want to create a space where people can learn from each other and build amazing projects together.
					</p>

					<h3 className="font-bold text-2xl text-gray-800 mb-4">
						Meet Our Team
					</h3>
					<div className="grid md:grid-cols-3 gap-10">
						{team.map((item) => (
							<div key={item.name} className="group">
								<div className="w-full aspect-square">
									<Image
										src={item.avatar.src}
										alt="Team"
										width={item.avatar.width}
										height={item.avatar.height}
										className="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
									/>
								</div>

								<div className="mt-4 text-center">
									<h4 className="font-semibold text-lg text-gray-800">
										{item.name}
									</h4>
									<p className="text-sm text-slate-500">{item.title}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
