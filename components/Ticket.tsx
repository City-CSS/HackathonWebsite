import {Info, Warning} from "@/components/InfoMessages"
import {
	Button,
	Checkbox,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	Input,
	List,
	ListItem,
	ListItemPrefix,
	Option,
	Radio,
	Select,
	Step,
	Stepper,
	Typography
} from "@material-tailwind/react"
import Link from "next/link"
import React, {useState} from "react"
import {Diagram3Fill, Grid1x2Fill, ListNested, PersonFill} from "react-bootstrap-icons"


const genericRegex = /[`'"<>;=]/

export default function Ticket() {
	const [open, setOpen] = React.useState<boolean>(false)
	const handleOpen = () => setOpen(!open)

	const [activeStep, setActiveStep] = React.useState(0)
	const [isLastStep, setIsLastStep] = React.useState(false)
	const [isFirstStep, setIsFirstStep] = React.useState(false)

	// DATA
	const [selectedPreference, setSelectedPreference] = useState("");
	const [selectedAllergy, setSelectedAllergy] = React.useState("")
	const [selectedDisability, setSelectedDisability] = React.useState("")

	const steps = [
		<Step1 key={0}/>,
		<Step2 key={1}/>,
		<Step3 key={2} setSelectedPreference={setSelectedPreference} setSelectedAllergy={setSelectedAllergy} setSelectedDisability={setSelectedDisability} selectedAllergy={selectedAllergy}/>,
		<Step4 key={3}/>
	];

	const validateStep1 = () => {
		const firstNameInput = document.getElementById("firstNameInput")
		const familyNameInput = document.getElementById("familyNameInput")
		const emailInput = document.getElementById("emailInput")
		const universityInput = document.getElementById("universityInput")
		const privacyPolicyAgreedInput = document.getElementById("privacyPolicyAgreedInput")

		// @ts-ignore
		const isFirstNameValid = firstNameInput.value.trim() !== "" && !genericRegex.test(firstNameInput.value.trim())
		// @ts-ignore
		const isFamilyNameValid = familyNameInput.value.trim() !== "" && !genericRegex.test(familyNameInput.value.trim())

		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
		// @ts-ignore
		const isEmailValid = emailRegex.test(emailInput.value.trim())

		// @ts-ignore
		const isUniversityValid = universityInput.value.trim() !== "" && !genericRegex.test(universityInput.value.trim())
		// @ts-ignore
		const isPrivacyPolicyAgreed = privacyPolicyAgreedInput.checked


		// @ts-ignore
		firstNameInput.classList.toggle("outline-1", !isFirstNameValid)
		// @ts-ignore
		firstNameInput.classList.toggle("outline-red-500", !isFirstNameValid)
		// @ts-ignore
		firstNameInput.classList.toggle("bg-red-50", !isFirstNameValid)

		// @ts-ignore
		familyNameInput.classList.toggle("outline-1", !isFamilyNameValid)
		// @ts-ignore
		familyNameInput.classList.toggle("outline-red-500", !isFamilyNameValid)
		// @ts-ignore
		familyNameInput.classList.toggle("bg-red-50", !isFamilyNameValid)

		// @ts-ignore
		emailInput.classList.toggle("outline-1", !isEmailValid)
		// @ts-ignore
		emailInput.classList.toggle("outline-red-500", !isEmailValid)
		// @ts-ignore
		emailInput.classList.toggle("bg-red-50", !isEmailValid)

		// @ts-ignore
		universityInput.classList.toggle("outline-1", !isUniversityValid)
		// @ts-ignore
		universityInput.classList.toggle("outline-red-500", !isUniversityValid)
		// @ts-ignore
		universityInput.classList.toggle("bg-red-50", !isUniversityValid)

		// @ts-ignore
		privacyPolicyAgreedInput.classList.toggle("outline-1", !isPrivacyPolicyAgreed)
		// @ts-ignore
		privacyPolicyAgreedInput.classList.toggle("outline-red-500", !isPrivacyPolicyAgreed)
		// @ts-ignore
		privacyPolicyAgreedInput.classList.toggle("bg-red-50", !isPrivacyPolicyAgreed)

		return isFirstNameValid && isFamilyNameValid && isEmailValid && isUniversityValid && isPrivacyPolicyAgreed
	}

	const validateStep2 = () => {
		const teamInput0 = document.getElementById("teamInput#0")
		const teamNameInput = document.getElementById("teamNameInput")

		// @ts-ignore
		const hasTeam = teamInput0.checked
		// @ts-ignore
		const isTeamNameValid = !hasTeam || (hasTeam && teamNameInput.value.trim() !== "" && !genericRegex.test(teamNameInput.value.trim()))

		if (hasTeam) {
			// @ts-ignore
			teamNameInput.classList.toggle("outline-1", !isTeamNameValid);
			// @ts-ignore
			teamNameInput.classList.toggle("outline-red-500", !isTeamNameValid);
			// @ts-ignore
			teamNameInput.classList.toggle("bg-red-50", !isTeamNameValid);
		}

		return !hasTeam || isTeamNameValid
	}

	// TODO: Fix this being weird
	const validateStep3 = () => {
		const dietaryPreferenceInput = document.getElementById("dietaryPreferenceInput");
		const foodAllergyInput = document.getElementById("foodAllergyInput");
		const otherAllergyInput = document.getElementById("otherAllergyInput");
		const disabilityInput = document.getElementById("disabilityInput");

		const isSelectedDietaryPreferenceValid = selectedPreference !== "";
		const isSelectedFoodAllergyValid = selectedAllergy !== "";
		// @ts-ignore
		const isOtherAllergyValueValid = otherAllergyInput ? otherAllergyInput.value.trim() !== "" : true;
		const isSelectedDisabilityValid = selectedDisability !== "";

		// @ts-ignore
		dietaryPreferenceInput.classList.toggle("outline-1", !isSelectedDietaryPreferenceValid)
		// @ts-ignore
		dietaryPreferenceInput.classList.toggle("outline-red-500", !isSelectedDietaryPreferenceValid)
		// @ts-ignore
		dietaryPreferenceInput.classList.toggle("bg-red-50", !isSelectedDietaryPreferenceValid)

		// @ts-ignore
		foodAllergyInput.classList.toggle("outline-1", !isSelectedFoodAllergyValid)
		// @ts-ignore
		foodAllergyInput.classList.toggle("outline-red-500", !isSelectedFoodAllergyValid)
		// @ts-ignore
		foodAllergyInput.classList.toggle("bg-red-50", !isSelectedFoodAllergyValid)

		// // @ts-ignore
		// if (foodAllergyInput.value === "Other") {
		// 	// @ts-ignore
		// 	otherAllergyInput.classList.toggle("outline-1", !isOtherAllergyValueValid)
		// 	// @ts-ignore
		// 	otherAllergyInput.classList.toggle("outline-red-500", !isOtherAllergyValueValid)
		// 	// @ts-ignore
		// 	otherAllergyInput.classList.toggle("bg-red-50", !isOtherAllergyValueValid)
		// }

		// @ts-ignore
		disabilityInput.classList.toggle("outline-1", !isSelectedDisabilityValid)
		// @ts-ignore
		disabilityInput.classList.toggle("outline-red-500", !isSelectedDisabilityValid)
		// @ts-ignore
		disabilityInput.classList.toggle("bg-red-50", !isSelectedDisabilityValid)

		// Add or remove classes based on validation
		// if (otherAllergyInput) {
		// 	otherAllergyInput.classList.toggle("outline-1", !(selectedFoodAllergy === "Other" && otherAllergyValue !== ""));
		// 	otherAllergyInput.classList.toggle("outline-red-500", !(selectedFoodAllergy === "Other" && otherAllergyValue !== ""));
		// 	otherAllergyInput.classList.toggle("bg-red-50", !(selectedFoodAllergy === "Other" && otherAllergyValue !== ""));
		// }

		return isSelectedDietaryPreferenceValid && isSelectedFoodAllergyValid && isOtherAllergyValueValid && isSelectedDisabilityValid;
	};

	const validateCurrentStep = () => {
		switch (activeStep) {
			case 0:
				return validateStep1()
			case 1:
				return validateStep2()
			case 2:
				return validateStep3()
			default:
				return true
		}
	}

	const sendToDatabase = () => {
		// // @ts-ignore
		// const firstName = document.getElementById("firstNameInput").value
		// // @ts-ignore
		// const familyName = document.getElementById("familyNameInput").value
		// // @ts-ignore
		// const email = document.getElementById("emailInput").value
		// // @ts-ignore
		// const university = document.getElementById("universityInput").value
		// TODO: Implement
	}

	const handleNext = () => {
		const isCurrentStepValid = validateCurrentStep()

		if (isCurrentStepValid) {
			if (!isLastStep) {
				setActiveStep((cur) => cur + 1)
			} else {
				sendToDatabase()
			}
		}
	}
	const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)

	return (<div>
			<div className="mt-8 flex flex-wrap justify-center gap-4">
				<Button onClick={handleOpen} size="lg" className="bg-accent-500 hover:bg-accent-600 text-text-950 focus:outline-red-700 text-lg py-2 px-4">Get Free Tickets</Button>
			</div>

			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>Get a Ticket</DialogHeader>
				<DialogBody>
					<Stepper
						activeStep={activeStep}
						isLastStep={(value) => setIsLastStep(value)}
						isFirstStep={(value) => setIsFirstStep(value)}
					>
						<Step completedClassName="bg-primary-500 text-text-50" activeClassName="bg-primary-400 text-text-50" className="outline-2 outline-gray-700 flex justify-center items-center"><PersonFill className="mx-auto text-xl"/></Step>
						<Step completedClassName="bg-primary-500 text-text-50" activeClassName="bg-primary-400 text-text-50" className="outline-2 outline-gray-700 flex justify-center items-center"><Diagram3Fill className="mx-auto text-xl"/></Step>
						<Step completedClassName="bg-primary-500 text-text-50" activeClassName="bg-primary-400 text-text-50" className="outline-2 outline-gray-700 flex justify-center items-center"><Grid1x2Fill className="mx-auto text-xl"/></Step>
						<Step completedClassName="bg-primary-500 text-text-50" activeClassName="bg-primary-400 text-text-50" className="outline-2 outline-gray-700 flex justify-center items-center"><ListNested className="mx-auto text-xl"/></Step>
					</Stepper>
					<form className="mt-12">
						{steps[activeStep]}
					</form>
				</DialogBody>
				<DialogFooter className="flex justify-between">
					<Button onClick={handlePrev} disabled={isFirstStep} size="lg" className="bg-accent-500 hover:bg-accent-600 text-accent-950 focus:outline-red-700 disabled:bg-accent-200 disabled:text-accent-800 text-lg py-2 px-4">Prev</Button>
					<Button size="sm" onClick={handleOpen} className="bg-red-300 hover:bg-red-600 text-gray-900 focus:outline-red-700 text-lg py-2 px-4">Cancel</Button>
					<Button onClick={handleNext} size="lg" className="bg-accent-500 hover:bg-accent-600 text-accent-950 focus:outline-red-700 text-lg py-2 px-4">
						{isLastStep? "Finish" : "Next"}
					</Button>
				</DialogFooter>
			</Dialog>
		</div>)

	function Step1() {
		return (<div className="flex flex-col justify-between gap-2">
				<div className="flex flex-col sm:flex-row gap-4">
					<Input id="firstNameInput" variant="outlined" label="First Name" placeholder="Mark" required/>
					<Input id="familyNameInput" variant="outlined" label="Family Name" placeholder="Zuckenberg" required/>
				</div>

				<Input id="emailInput" variant="outlined" label="Email" placeholder="markzuckenberg@facebook.com" required/>
				<br/>
				<Input id="universityInput" variant="outlined" label="University" placeholder="e.g. City University of London" required/>
				<Input id="courseInput" variant="outlined" label="Course" placeholder="e.g. Computer Science"/>

				<List className="flex-row">
					<ListItem className="p-0">
						<label htmlFor="degreeTypeInput#1" className="flex w-full cursor-pointer items-center px-3 py-2">
							<ListItemPrefix className="mr-3">
								<Radio name="degreeType" id="degreeTypeInput#1" ripple={false} className="hover:before:opacity-0" containerProps={{className : "p-0"}} defaultChecked/>
							</ListItemPrefix>
							<Typography color="blue-gray" className="font-medium">Bachelors</Typography>
						</label>
					</ListItem>
					<ListItem className="p-0">
						<label htmlFor="degreeTypeInput#2" className="flex w-full cursor-pointer items-center px-3 py-2">
							<ListItemPrefix className="mr-3">
								<Radio name="degreeType" id="degreeTypeInput#2" ripple={false} className="hover:before:opacity-0" containerProps={{className : "p-0"}}/>
							</ListItemPrefix>
							<Typography color="blue-gray" className="font-medium">Masters</Typography>
						</label>
					</ListItem>
					<ListItem className="p-0">
						<label htmlFor="degreeTypeInput#3" className="flex w-full cursor-pointer items-center px-3 py-2">
							<ListItemPrefix className="mr-3">
								<Radio name="degreeType" id="degreeTypeInput#3" ripple={false} className="hover:before:opacity-0" containerProps={{className : "p-0"}}/>
							</ListItemPrefix>
							<Typography color="blue-gray" className="font-medium">Doctorate</Typography>
						</label>
					</ListItem>
				</List>
				<Checkbox
					id="privacyPolicyAgreedInput"
					label={<Typography color="blue-gray" className="flex font-medium">
						I agree to the&nbsp;
						<Link href="/policy.pdf" className="transition-colors text-accent-700 hover:text-accent-800 focus:outline-red-700" tabIndex={4}>privacy policy</Link>.
					</Typography>}
					required
				/>
			</div>)
	}

	function Step2() {
		const [hasTeam, setHasTeam] = React.useState(false)

		return (<div>
				<List>
					<ListItem className="p-0">
						<label htmlFor="teamInput#0" className="flex w-full cursor-pointer items-center px-3 py-2">
							<ListItemPrefix className="mr-3">
								<Radio
									name="team"
									id="teamInput#0"
									ripple={false}
									className="hover:before:opacity-0"
									onChange={() => setHasTeam(true)}
									containerProps={{
										className : "p-0"
									}}
								/>
							</ListItemPrefix>
							<Typography color="blue-gray" className="font-medium text-blue-gray-400">I have a team</Typography>
						</label>
					</ListItem>
					<ListItem className="p-0">
						<label htmlFor="teamInput#1" className="flex w-full cursor-pointer items-center px-3 py-2">
							<ListItemPrefix className="mr-3">
								<Radio
									name="team"
									id="teamInput#1"
									ripple={false}
									className="hover:before:opacity-0"
									onChange={() => setHasTeam(false)}
									containerProps={{
										className : "p-0"
									}}
									defaultChecked
								/>
							</ListItemPrefix>
							<Typography color="blue-gray" className="font-medium text-blue-gray-400">I will team up with someone at the event</Typography>
						</label>
					</ListItem>
				</List>

				{hasTeam && (<>
						<Warning message="Provide the same team name as your friends to be assigned to the same team!"/>
						<div className="pt-4">
							<Input id="teamNameInput" variant="outlined" label="Team Name" placeholder="e.g. The Best Team" required/>
						</div>
					</>)}
			</div>)
	}

	function Step3({setSelectedPreference, selectedAllergy, setSelectedAllergy, setSelectedDisability } : {setSelectedPreference : (value : string) => void, selectedAllergy : string, setSelectedAllergy : (value : string) => void, setSelectedDisability : (value : string) => void}) {
		return (<>
				<Info message="We need this information to order the correct number of food, and provide any assistance where necessary."/>

				<div className="pt-8 flex flex-col justify-between gap-2">
					<Select id="dietaryPreferenceInput" variant="outlined" label="Dietetary Preference" onChange={(value : string | undefined) => setSelectedPreference(value || "")}>
						<Option value="Omnivore">Omnivore</Option>
						<Option value="Vegetarian">Vegetarian</Option>
						<Option value="Vegan">Vegan</Option>
						<Option value="Pescatarian">Pescatarian</Option>
					</Select>

					<Select id="foodAllergyInput" variant="outlined" label="Food Allergy" onChange={(value : string | undefined) => setSelectedAllergy(value || "")}>
						<Option value="None">None</Option>
						<Option value="Gluten-free">Gluten-free</Option>
						<Option value="Dairy-free">Dairy-free</Option>
						<Option value="Nut-free">Nut-free</Option>
						<Option value="Soy-free">Soy-free</Option>
						<Option value="Egg-free">Egg-free</Option>
						<Option value="Other">Other</Option>
					</Select>

					{selectedAllergy === "Other" && (
						<Input id="otherAllergyInput" variant="outlined" label="Other Allergy" placeholder="e.g. Apples"/>)}

					<Select id="disabilityInput" variant="outlined" label="Disability" onChange={(value : string | undefined) => setSelectedDisability(value || "")}>
						<Option value="None">None</Option>
						<Option value="Mobility Disability">Mobility Disability</Option>
						<Option value="Other Disability">Other Disability</Option>
					</Select>
				</div>
			</>)
	}

	function Step4() {
		return (<div>
				{/*<Info message="Our sponsors often scout for talent at these events. If you're open to job opportunities and would like them to reach out, please attach your CV. By attaching your CV you agreed to it being shared with 3rd parties."/>*/}
				{/**/}
				{/*<p className="font-bold">CV:</p>*/}
				{/*<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">*/}
				{/*	<div className="space-y-1 text-center">*/}
				{/*		<FileEarmarkPlusFill className="mx-auto h-10 w-10"/>*/}
				{/*		<div className="flex text-sm text-gray-600">*/}
				{/*			<label htmlFor="fileUploadInput" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">*/}
				{/*				<span className="">Upload a file</span>*/}
				{/*				<input id="fileUploadInput" name="file-upload" type="file" className="sr-only"/>*/}
				{/*			</label>*/}
				{/*			<p className="pl-1">or drag and drop</p>*/}
				{/*		</div>*/}
				{/*		<p className="text-xs">*/}
				{/*			DOCX, ODT, PDF up to 10MB*/}
				{/*		</p>*/}
				{/*	</div>*/}
				{/*</div>*/}

				<Info message="Stay updated! Sign up for emails to receive notifications about event photos, updates, and other related information."/>
				<div className="pt-8">
					<Checkbox id="privacyPolicyAgreedInput" label="I want to receive emails."/>
				</div>
			</div>)
	}
}
