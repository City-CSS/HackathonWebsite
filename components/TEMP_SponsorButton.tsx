import {supabase} from "@/app/api/supabaseClient"
import {Error, Success} from "@/components/InfoMessages"
import Link from "next/link"
import React from "react"
import {
	Button,
	Checkbox,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	Input,
	Textarea,
	Typography
} from "@material-tailwind/react"


export default function TEMP_SponsorButton() {
	const [open, setOpen] = React.useState<boolean>(false);
	const handleOpen = () => setOpen(!open);

	const [error, setError] = React.useState<string>("");
	const [success, setSuccess] = React.useState<boolean>(false);

	const handleSend = async () => {
		const emailInput = (document.getElementById("contactEmailInput") as HTMLInputElement);
		const contentInput = (document.getElementById("contentInput") as HTMLTextAreaElement);
		const privacyPolicyAgreedInput = (document.getElementById("privacyPolicyAgreedInput") as HTMLInputElement);

		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
		const genericRegex = /[`'"<>;=]/

		const isEmailValid = emailInput.value.trim() !== "" && emailRegex.test(emailInput.value.trim())
		const isContentValid = contentInput.value.trim() !== "" && !genericRegex.test(contentInput.value.trim())
		const isPrivacyPolicyAgreed = privacyPolicyAgreedInput.checked

		emailInput.classList.toggle("outline-1", !isEmailValid)
		emailInput.classList.toggle("outline-red-500", !isEmailValid)
		emailInput.classList.toggle("bg-red-50", !isEmailValid)

		contentInput.classList.toggle("outline-1", !isContentValid)
		contentInput.classList.toggle("outline-red-500", !isContentValid)
		contentInput.classList.toggle("bg-red-50", !isContentValid)

		privacyPolicyAgreedInput.classList.toggle("outline-1", !isPrivacyPolicyAgreed)
		privacyPolicyAgreedInput.classList.toggle("outline-red-500", !isPrivacyPolicyAgreed)
		privacyPolicyAgreedInput.classList.toggle("bg-red-50", !isPrivacyPolicyAgreed)

		if (isEmailValid && isContentValid && isPrivacyPolicyAgreed) {
			try {
				const {error} = await supabase
					.from("Questions")
					.insert({
						email : emailInput.value, question : "SE:\n" + contentInput.value
					});

				if (error) {
					setError("An error occurred. Please try again later.")
				}

				setError("")
				setSuccess(true)

				setTimeout(handleOpen, 3000)
			} catch (error) {
				setError("An error occurred. Please try again later.")
			}
		}
	}

	return (
		<div>
			<div className="flex justify-center items-center pt-8 pb-12">
				<Button onClick={handleOpen} size="lg" className="bg-accent-500 hover:bg-accent-600 text-text-950 focus:outline-red-700 text-lg py-2 px-4">
					Sponsor Citython
				</Button>
			</div>

			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>Sponsorship Enquiry</DialogHeader>
				<DialogBody>
					<div className="flex flex-col gap-4">
						<Input id="contactEmailInput" variant="outlined" label="Email" placeholder="markzuckenberg@facebook.com" required/>
						<Textarea id="contentInput" variant="outlined" label="Content" required/>
						<Checkbox
							id="privacyPolicyAgreedInput"
							label={<Typography className="flex font-medium text-text-950">
								I agree to the&nbsp;
								<Link href="/policy.pdf" className="transition-colors text-accent-700 hover:text-accent-800 focus:outline-red-700" tabIndex={4}>privacy policy</Link>.
							</Typography>}
							required
						/>
					</div>
					{error && <Error className="mt-2" message={error}/>}
					{success && <Success className="mt-2" message="Enquiry submitted successfully! We'll get back to you soon."/>}
				</DialogBody>
				<DialogFooter className="flex justify-between">
					<Button size="sm" onClick={handleOpen} className="bg-red-300 hover:bg-red-600 text-gray-900 focus:outline-red-700 text-lg py-2 px-4" tabIndex={2}>Cancel</Button>
					<Button size="lg" onClick={handleSend} className="bg-accent-500 hover:bg-accent-600 text-accent-950 focus:outline-red-700 disabled:bg-accent-200 disabled:text-accent-800 text-lg py-2 px-4" tabIndex={1}>Send</Button>
				</DialogFooter>
			</Dialog>
		</div>
	)
}
