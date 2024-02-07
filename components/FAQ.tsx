import React, { ReactElement } from "react";
import {
    Accordion as RawAccordion,
    AccordionBody,
    AccordionHeader as RawAccordionHeader
} from "@material-tailwind/react";

const Accordion = RawAccordion as unknown as (props: { children: ReactElement[], open: boolean, className: string }) => ReactElement;
const AccordionHeader = RawAccordionHeader as unknown as (props: { children: string, onClick: () => void, className: string }) => ReactElement;


export default function FAQ() {
    const [open, setOpen] = React.useState<number>(1);
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className={`border-b-0 transition-colors ${
                        open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                    }`}
                >
                    What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={`border-b-0 transition-colors ${
                        open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                    }`}
                >
                    How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
                <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className={`border-b-0 transition-colors ${
                        open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                    }`}
                >
                    What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </>
    );
}