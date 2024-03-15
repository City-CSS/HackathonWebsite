import supabase from "@/app/api/supabaseClient";
import { Error } from "@/components/InfoMessages";
import React from "react";
import { Button, Input, Spinner } from "@material-tailwind/react";
import { SupabaseClient } from "@supabase/supabase-js";

export default function Unsubscribe() {
	const [email, setEmail] = React.useState("");
	const [sending, setSending] = React.useState(false);
	const [sent, setSent] = React.useState(false);
	const [error, setError] = React.useState<string>("");

	const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;


	const handleUnsubscribe = async () => {
		try {
			const insSupabase = supabase();

			if (insSupabase != null) {
				const { error } = await (insSupabase as SupabaseClient)
					.from("Waitlist")
					.delete()
					.match({ email: email.toLowerCase() });

				if (error) {
					setError("An error occurred while unsubscribing. Please try again later.");
				} else {
					setEmail("");
					setSent(false);
					setError("");
				}
			} else {
				setError("Supabase client is not initialized.");
			}
		} catch (error) {
			setError("An unexpected error occurred. Please try again later.");
		}
	};

	return (
		<div className="mt-16">
			<div className="items-center flex justify-center">
			<h2 className="lg:text-lg text-accent-200 mx-4 lg:mx-16">
				<span className="font-bold text-accent-400">Unsubscribe.</span>
				<br />
				<span className="text-sm lg:text-base leading-tight line-clamp-none">
         Get removed from the waitlist
        </span>
			</h2>
			</div>
			<div className="mt-4 flex flex-wrap justify-center">
				{error && <Error className="mb-6" message={error} />}
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
					<Button
						onClick={handleUnsubscribe}
						size="sm"
						color="red"
						className="!absolute right-1 top-1 rounded bg-red-400 text-text-50 hover:bg-red-500 focus:outline-red-700"
					>
						Unsubscribe
					</Button>
				</div>
			</div>
		</div>
	);
}
