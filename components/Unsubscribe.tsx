import supabase from "@/app/api/supabaseClient";
import { Error } from "@/components/InfoMessages";
import React from "react";
import { Button, Input, Spinner } from "@material-tailwind/react";


export default function Unsubscribe() {
	const [email, setEmail] = React.useState("");
	const [sending, setSending] = React.useState(false);
	const [sent, setSent] = React.useState(false);
	const [error, setError] = React.useState<string>("");

	const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;


	const handleUnsubscribe = async () => {
		const emailInput = document.getElementById("emailInput") as HTMLInputElement;
		const isEmailValid = emailRegex.test(email.trim());

		emailInput.classList.toggle("outline-1", !isEmailValid);
		emailInput.classList.toggle("outline-red-500", !isEmailValid);
		emailInput.classList.toggle("bg-red-50", !isEmailValid);

		if (isEmailValid) {
			setSending(true);
			setError("");

			try {
				const insSupabase = supabase();

				if (insSupabase != null) {
					const { error } = await insSupabase
						.from("Waitlist")
						.delete()
						.eq("email", email.trim().toLowerCase());

					if (error) {
						setError("An error occurred while unsubscribing. Please try again later.");
					} else {
						setEmail("");
						setSent(true);
					}
				} else {
					setError("Supabase client is not initialized.");
				}
			} catch (error) {
				setError("An unexpected error occurred. Please try again later.");
			} finally {
				setSending(false);
			}
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div>
				<div className="p-8 bg-background-900 rounded-2xl">
					<div className="items-center flex justify-center">
					<h2 className="text-center lg:text-lg text-accent-200 mx-4 lg:mx-16">
						<span className="font-bold text-accent-400">Unsubscribe from Waitlist 😔</span>
						<br />
						<span className="text-sm lg:text-base leading-tight line-clamp-none">
							Your data will be removed from our waitlist.
							<br/>
							You will not receive any updates from us.
		        </span>
					</h2>
					</div>
					<div className="mt-8 flex flex-wrap justify-center">
						<div className="relative flex w-full max-w-[24rem]">
							<Input
								id="emailInput"
								type="email"
								placeholder="Email Address"
								variant="outlined"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="pr-20 text-text-50"
							/>
							<Button onClick={handleUnsubscribe} size="sm" color={email && sending ? "gray" : "blue-gray"}
							        disabled={!email}
							        className="!absolute right-1 top-1 rounded bg-primary-400 text-text-50 hover:bg-primary-500 focus:outline-red-700">
								{sent ? "Done!" : sending? <Spinner className="h-4 w-4"/> : "Unsubscribe"}
							</Button>
						</div>
					</div>
				</div>
				{error && <Error className="mt-6" message={error} />}
			</div>
		</div>
	);
}
