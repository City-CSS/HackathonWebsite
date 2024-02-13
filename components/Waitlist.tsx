import {supabase} from "@/app/api/supabaseClient"
import {Error} from "@/components/InfoMessages"
import React from "react"
import {Button, Input, Spinner} from "@material-tailwind/react"


export default function Waitlist() {
	const [email, setEmail] = React.useState("");
	const [sending, setSending] = React.useState(false);
	const [sent, setSent] = React.useState(false);
	const [error, setError] = React.useState<string>("");

	const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

	const handleSend = async () => {
		const emailInput = document.getElementById("emailInput") as HTMLInputElement; // Include type assertion
		const isEmailValid = emailRegex.test(email.trim());

		emailInput.classList.toggle("outline-1", !isEmailValid);
		emailInput.classList.toggle("outline-red-500", !isEmailValid);
		emailInput.classList.toggle("bg-red-50", !isEmailValid);

		if (isEmailValid) {
			setSending(true);
			setError("");

			try {
				const { data, error } = await supabase
					.from('Waitlist')
					.insert({ email })
					.single();
				if (error && error.code === '23505') {
					setError("You're already on the waitlist!");
				} else if (error) {
					throw error;
				} else {
					setSent(true);
				}
			} catch (error) {
				setError('An error occurred. Please try again later.');
			} finally {
				setSending(false);
			}
		}
	};

	return (
		<div className="mt-8">
			<h2 className="text-accent-200"><span className="font-bold text-accent-300">Tickets are not available yet.</span><br/>Join the waitlist to get notified when they are!</h2>
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
						containerProps={{
							className: "min-w-0",
						}}
					/>
					<Button onClick={handleSend} size="sm" color={email && sending ? "gray" : "blue-gray"} disabled={!email} className="!absolute right-1 top-1 rounded bg-primary-400 text-text-50 hover:bg-primary-500 focus:outline-red-700">
						{sent ? "Joined!" : sending? <Spinner className="h-4 w-4"/> : "Join"}
					</Button>
				</div>
			</div>
		</div>
	)
}

