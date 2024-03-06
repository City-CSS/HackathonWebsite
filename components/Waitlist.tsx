import supabase from "@/app/api/supabaseClient"
import {Error} from "@/components/InfoMessages"
import React from "react"
import {Button, Input, Spinner} from "@material-tailwind/react"
import {SupabaseClient} from "@supabase/supabase-js";


export default function Waitlist() {
	const [email, setEmail] = React.useState("");
	const [sending, setSending] = React.useState(false);
	const [sent, setSent] = React.useState(false);
	const [error, setError] = React.useState<string>("");

	const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

	const handleSend = async () => {
		const emailInput = document.getElementById("emailInput") as HTMLInputElement;
		const isEmailValid = emailRegex.test(email.trim());

		emailInput.classList.toggle("outline-1", !isEmailValid);
		emailInput.classList.toggle("outline-red-500", !isEmailValid);
		emailInput.classList.toggle("bg-red-50", !isEmailValid);

		if (isEmailValid) {
			setSending(true);
			setError("");

			try {
				const insSupabase = supabase()

				if (insSupabase != null) {
					const {error} = await (insSupabase as SupabaseClient)
						.from("Waitlist")
						.insert({email: email.toLowerCase()})
						.single()

					if (error && error.code === "23505") {
						setError("You're already on the waitlist!")
					} else if (error) {
						setError("An error occurred. Please try again later.")
					} else {
						setSent(true)
					}
				} else {
					setError("Supabase client is not initialized.")
				}
			} catch (error) {
				setError("An unexpected error occurred. Please try again later.")
			} finally {
				setSending(false)
			}
		}
	};

	return (
		<div className="mt-16">
			<h2 className="lg:text-lg text-accent-200 mx-4 lg:mx-16">
				<span className="font-bold text-accent-400">Ticket sales have not started yet.</span>
				<br/>
				<span className="text-sm lg:text-base leading-tight line-clamp-none">Sign up for our waitlist to receive notifications when they become available!</span>
			</h2>
			<div className="mt-4 flex flex-wrap justify-center">
				{error && <Error className="mb-6" message={error}/>}
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
					<Button onClick={handleSend} size="sm" color={email && sending ? "gray" : "blue-gray"} disabled={!email} className="!absolute right-1 top-1 rounded bg-primary-400 text-text-50 hover:bg-primary-500 focus:outline-red-700">
						{sent ? "Joined!" : sending? <Spinner className="h-4 w-4"/> : "Join"}
					</Button>
				</div>
			</div>
		</div>
	)
}

