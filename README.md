# Website Design Plan

## Aims
- Advertise the event, inform and educate people about the event.
- Showcase our Sponsors & Partners, allow them to reach out to us.
- Showcase our Timetable, Speakers and event details.
- Showcase our Team running the event.

## Stack
**Frontend**<br>
- Tailwind CSS
- Next.js

**Backend**<br>
TBD (Probably Node.js)

## Layout
### Landing Page
- Main page / landing page
  - Something with a nice background and tagline.
  - Logo or icons
  - Two buttons in the style of "I'm a..." (Student, Sponsor) that take to specific subpage.
- Footer

### Students
Have a tailored website for students, with all the information they need to know about the event.

- Get Tickets page
  - A button to get tickets.
  - Some nice background and icons.
- About Us (HERO)
  - A short description of the event, our society and what to expect.
- Timeline
  - We can use some form of 1-day calendar we can find open source and tailor it to our needs.
- Our Team
  - A grid of our team members, with their pictures and names.
- Sponsors
  - An automatic carrousel of our sponsors in the form of logos that link to their websites.
  - There are different types of sponsorships, which some have more priority (should be first) and have some form of differentiation like a golden spark background or something.
- FAQ
  - A list of frequently asked questions specific for students, and their answers.
- Contact Us
  - A form and contact information if students have any questions for us.
- Footer

### Sponsors
Have a tailored website for sponsors, with all the information they need to know about sponsoring the event, what benefits they get and such.

- About Us
  - A short description of the event.
- Venue
  - Current venue (possibly include a picture of the venue and map).
- Timeline
  - Unlike the normal student one, they can hover over potential blank spots, to get information on any workshops they may want to run and such.
    - We can use some form of 1-day calendar we can find open source and tailor it to our needs to speed up development.
- Benefits
  - Benefits for the company, what they can get out of it.
  - Benefits for students, and what they get out of it and how their sponsoring helps.
- Sponsors
  - An automatic carrousel of our sponsors in the form of logos that link to their websites.
  - There are different types of sponsorships, which some have more priority (should be first) and have some form of differentiation like a golden spark background or something.
  - If we already have sponsors, we can form it in a way to companies like "Join our sponsors..." or something. If we don't have any sponsors we can just omit this section for the time being.
- Sponsor Tiers
  - A list of the different tiers of sponsorship, and what they get out of it.
  - Use icons to differentiate between the tiers.
  - Incentivise the middle and high tiers.
- Sponsor Us / Contacts
  - Our contact information
  - A form for sponsors to fill out, with their details and what they want to sponsor.
- Footer

## GDPR
Make sure GDPR is followed, and that we have a privacy policy or something similar.<br>
If we do decide to sell tickets or have a wait list, that there is some form of acceptance of the privacy policy.

# Potential inspiration
[Royal Hackaway](https://www.royalhackaway.com/)<br>
[Hack the Burgh](https://hacktheburgh.com/)<br>
[Hack the North](https://hackthenorth.com/)<br>
[Hack the 6ix](https://hackthe6ix.com/)<br>
[DevPost](https://kyroz.devpost.com/?ref_feature=challenge&ref_medium=similar-hackathons) (More for making posts about Hackathons, but still has some interesting things)

# Deployment
I own a Raspberry Pi 4, Raspberry Pi 5 and a home lab server.<br>
Ideally, I will host it on one of those options using Nginx as the webserver.
