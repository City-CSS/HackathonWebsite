import {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Typography,
} from "@material-tailwind/react";
import { HomeIcon, BellIcon, DollarSignIcon } from "lucide-react";

export default function TimelineWithIcon() {
	return (
		<div className="w-[32rem]">
			<Timeline>
				<TimelineItem>
					<TimelineHeader>
						<TimelineConnector />
						<TimelineIcon className="p-2">
							<HomeIcon className="h-4 w-4" />
						</TimelineIcon>
						<h1 className="ml-3">
							Timeline Title Here.
						</h1>
					</TimelineHeader>
					<TimelineBody className="pb-8">
						<h1  color="gray" className="font-normal text-gray-600">
							The key to more success is to have a lot of pillows. Put it this way, it took me
							twenty five years to get these plants, twenty five years of blood sweat and tears, and
							I'm never giving up, I'm just getting started. I'm up to something. Fan luv.
						</h1>
					</TimelineBody>
				</TimelineItem>
				<TimelineItem>
					<TimelineHeader>
						<TimelineConnector />
						<TimelineIcon className="p-2">
							<BellIcon className="h-4 w-4" />
						</TimelineIcon>
						<h1 className="ml-3" color="blue-gray">
							Timeline Title Here.
						</h1>
					</TimelineHeader>
					<TimelineBody className="pb-8">
						<h1   color="gray" className="font-normal text-gray-600">
							The key to more success is to have a lot of pillows. Put it this way, it took me
							twenty five years to get these plants, twenty five years of blood sweat and tears, and
							I'm never giving up, I'm just getting started. I'm up to something. Fan luv.
						</h1>
					</TimelineBody>
				</TimelineItem>
				<TimelineItem>
					<TimelineHeader>
						<TimelineConnector />
						<TimelineIcon className="p-2">
							<DollarSignIcon className="h-4 w-4" />
						</TimelineIcon>
						<h1 className="ml-3" color="blue-gray">
							Timeline Title Here.
						</h1>
					</TimelineHeader>
					<TimelineBody>
						<h1  color="gray" className="font-normal text-gray-600">
							The key to more success is to have a lot of pillows. Put it this way, it took me
							twenty five years to get these plants, twenty five years of blood sweat and tears, and
							I'm never giving up, I'm just getting started. I'm up to something. Fan luv.
						</h1>
					</TimelineBody>
				</TimelineItem>
			</Timeline>
		</div>
	);
}
