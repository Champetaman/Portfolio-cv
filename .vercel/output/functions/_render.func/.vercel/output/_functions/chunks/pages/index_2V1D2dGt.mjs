/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, i as renderSlot, g as renderComponent, n as Fragment } from '../astro_DIfAFnVI.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$SocialStack, a as $$LinkedIn, b as $$Badge, c as $$SectionContainer, d as $$Layout } from './components_BVOgkJeD.mjs';
import 'clsx';

const $$Astro$i = createAstro("https://camilooviedo.com/");
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const personalImageAlt = "Camilo Oviedo";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-10 text-gray-700 dark:text-gray-300 md:flex-row"> <img src="/casual_image.webp"${addAttribute(personalImageAlt, "alt")} class="rounded-full w-60 h-60 md:w-80 md:h-80 aspect-square object-cover"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-last md:order-1"> <p>
My name is Camilo, I'm from Bogotá, Colombia. I'm a passionate guy with a
      diverse background in <em class="italic">Business Administration</em> and <em class="italic">Systems Engineering</em>. With <strong>6 years of experience</strong>, I've honed my skills in
      software design and development, contributing to the future of the
      financial system in Colombia.
</p> <p>
Outside of my professional pursuits, you'll often find me engrossed in
      discussions about the latest developments in fintech, <strong>exploring the evolving role of artificial intelligence in financial
        markets</strong>, or delving into the nuances of behavioral economics and its
      implications for financial decision-making.
</p> <p>
I'm genuinely excited about the transformative potential of technology to
      drive positive change in the world of finance, and I'm committed to
      leveraging my skills and expertise to contribute to the continued
      evolution and innovation of<strong> financial services.</strong> Let's connect
      and embark on a journey to unlock new possibilities and opportunities at the
<em class="italic"> nexus of technology and finance.</em> </p> </div> </article>`;
}, "C:/Projects/Portfolio-cv/src/components/AboutMe.astro", void 0);

const $$Astro$h = createAstro("https://camilooviedo.com/");
const $$Briefcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/Briefcase.astro", void 0);

const $$Astro$g = createAstro("https://camilooviedo.com/");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/Code.astro", void 0);

const $$Astro$f = createAstro("https://camilooviedo.com/");
const $$LinkInLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$LinkInLine;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Projects/Portfolio-cv/src/components/LinkInLine.astro", void 0);

const $$Astro$e = createAstro("https://camilooviedo.com/");
const $$ChevronRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ChevronRight;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> ` })} </svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/ChevronRight.astro", void 0);

const $$Astro$d = createAstro("https://camilooviedo.com/");
const $$ExperienceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { date, company, title, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white"> ${company} </h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInLine", $$LinkInLine, { "href": link }, { "default": ($$result2) => renderTemplate`
Learn more${" "}${renderComponent($$result2, "ChevronRightIcon", $$ChevronRight, {})} ` })}`} </div> </div>`;
}, "C:/Projects/Portfolio-cv/src/components/ExperienceItem.astro", void 0);

const ExperienceData = [
	{
		date: "May 2019 - January 2024",
		company: "Central Bank of Colombia",
		title: "Specialized Engineer",
		description: "Pioneered dynamic software initiatives, modernizing legacy systems to strengthen Colombia's financial ecosystem. Led a team of 15 engineers, achieving a 25% reduction in system downtime and a 40% increase in transaction processing speed. Implemented Java, JavaScript, and TypeScript static code analysis tools, resulting in a 30% improvement in code quality. Contributed to reducing project delivery time by 15% while ensuring adherence to budgets, enhancing economic stability and preserving currency integrity."
	},
	{
		date: "January 2018 - May 2019",
		company: "Sophos Solutions S.A.S",
		title: "Implementation Consultant",
		description: "Orchestrated transformative software endeavors, architecting solutions that propelled client enterprises to new heights of efficiency and competitiveness. Led a team of 5 engineers, resulting in a 20% increase in client retention and a 15% decrease in support ticket resolution time. Implemented automated testing methodologies, reducing software bugs by 20% and enhancing overall system reliability."
	}
];

const $$Astro$c = createAstro("https://camilooviedo.com/");
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCE = ExperienceData;
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCE.map((experience) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "C:/Projects/Portfolio-cv/src/components/Experience.astro", void 0);

const $$Astro$b = createAstro("https://camilooviedo.com/");
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/Mail.astro", void 0);

const $$Astro$a = createAstro("https://camilooviedo.com/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Hero;
  const personalImageAlt = "Camilo Oviedo";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center gap-8 md:flex-row mt-24"> <img class="rounded-full shadow-lg size-44" src="/profile_image.webp"${addAttribute(personalImageAlt, "alt")}> <div class="flex flex-col"> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Hey, I'm Camilo
</h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
6 years of experience. <strong>Systems Engineer and Business Administrator</strong> software design & development, project management and strategic growth in
      the banking and IT services and consulting industry.
</p> <nav class="flex flex-wrap gap-4 mt-8"> ${renderComponent($$result, "SocialStack", $$SocialStack, { "href": "mailto:oviedocamilo94@gmail.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4" })}
Contact me
` })} ${renderComponent($$result, "SocialStack", $$SocialStack, { "href": "https://www.linkedin.com/in/oviedocamilo/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4" })}
LinkedIn
` })} <a href="https://www.linkedin.com/in/oviedocamilo/" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Open to Work` })} </a> </nav> </div> </article>`;
}, "C:/Projects/Portfolio-cv/src/components/Hero.astro", void 0);

const $$Astro$9 = createAstro("https://camilooviedo.com/");
const $$ProfileCheck = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/ProfileCheck.astro", void 0);

const $$Astro$8 = createAstro("https://camilooviedo.com/");
const $$ProjectsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ProjectsCard;
  const { title, description, link, github, image, altImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded overflow-hidden shadow-lg"> <img class="w-full"${addAttribute(image, "src")}${addAttribute(altImage, "alt")}> <div class="px-6 py-4"> <div class="font-bold text-xl mb-2">${title}</div> <p class="text-gray-700 text-base"> ${description} </p> </div> <div class="px-6 pt-4 pb-2"> <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span> <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span> <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> </div> </div>`;
}, "C:/Projects/Portfolio-cv/src/components/ProjectsCard.astro", void 0);

const ProjectsData = [
	{
		title: "Central Securities Depository",
		description: "The CSD modernization aims to enhance efficiency and security while supporting the Colombian market's operation. Its benefits included improving user experience, reducing operational risks, and optimizing response time, aligned with international standards and best practices.",
		link: "https://www.banrep.gov.co/es/sistemas-pago/modernizacion-deposito-central-valores",
		github: "",
		image: "/projects/DCV.webp",
		altImage: "Screenshot of the Central Securities Depository (CSD) Software"
	},
	{
		title: "Integrated Operational Manager of Securities",
		description: "Aims to serve as the tariffing and reporting system for the Fiduciary and Securities Department at the Central Bank of Colombian. Its primary function is to act as the conduit for operational transformation between the SEN trading system and the CSD. Additionally, it is tasked with calculating fees for the utilization of various FSD services and producing daily reports for stakeholders.",
		link: "#",
		github: "",
		image: "/projects/GOIN.webp",
		altImage: "Screenshot of the Integrated Operational Manager of Securities (GOIN)"
	},
	{
		title: "",
		description: "",
		link: "#",
		github: "",
		image: "/projects/project1.webp",
		altImage: ""
	}
];

const $$Astro$7 = createAstro("https://camilooviedo.com/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Projects;
  const PROJECTS = ProjectsData;
  return renderTemplate`${maybeRenderHead()}<div class="py-10 grid col-auto gap-5"> ${PROJECTS.map((project) => renderTemplate`${renderComponent($$result, "ProjectsCard", $$ProjectsCard, { ...project })}`)} </div>`;
}, "C:/Projects/Portfolio-cv/src/components/Projects.astro", void 0);

const $$Astro$6 = createAstro("https://camilooviedo.com/");
const $$Tailwind = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/Tailwind.astro", void 0);

const $$Astro$5 = createAstro("https://camilooviedo.com/");
const $$NextJS = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NextJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <defs> <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <circle id="a" cx="128" cy="128" r="128"></circle> </defs> <mask id="b" fill="#fff"> <use xlink:href="#a"></use> </mask> <g mask="url(#b)"> <circle cx="128" cy="128" r="128"></circle> <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path> <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path> </g> </svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/NextJS.astro", void 0);

const $$Astro$4 = createAstro("https://camilooviedo.com/");
const $$HTML = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HTML;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/HTML.astro", void 0);

const $$Astro$3 = createAstro("https://camilooviedo.com/");
const $$CSS = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CSS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/CSS.astro", void 0);

const $$Astro$2 = createAstro("https://camilooviedo.com/");
const $$JavaScript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$JavaScript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/JavaScript.astro", void 0);

const $$Astro$1 = createAstro("https://camilooviedo.com/");
const $$Technologies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Technologies;
  let TechnologyType;
  ((TechnologyType2) => {
    TechnologyType2[TechnologyType2["Frontend"] = 1] = "Frontend";
    TechnologyType2[TechnologyType2["Backend"] = 2] = "Backend";
    TechnologyType2[TechnologyType2["Database"] = 3] = "Database";
    TechnologyType2[TechnologyType2["Other"] = 4] = "Other";
  })(TechnologyType || (TechnologyType = {}));
  const TECHNOLOGIES = [
    {
      name: "JavaScript",
      icon: $$JavaScript,
      colorClasses: "bg-yellow-500 dark:bg-yellow-300/40",
      type: 1 /* Frontend */
    },
    {
      name: "HTML",
      icon: $$HTML,
      colorClasses: "bg-orange-600 dark:bg-orange-500/40",
      type: 1 /* Frontend */
    },
    {
      name: "CSS",
      icon: $$CSS,
      colorClasses: "bg-blue-500 dark:bg-blue-300/40",
      type: 1 /* Frontend */
    },
    {
      name: "Tailwind",
      icon: $$Tailwind,
      colorClasses: "bg-blue-500 dark:bg-blue-500/40",
      type: 1 /* Frontend */
    },
    {
      name: "NextJS",
      icon: $$NextJS,
      colorClasses: "bg-black dark:border-slate-600/20 border-2",
      type: 1 /* Frontend */
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ${TECHNOLOGIES.map((technology) => renderTemplate`<div${addAttribute(`flex flex-col items-center justify-center p-4 transition-all duration-300 ${technology.colorClasses} hover:scale-110 rounded-lg shadow-md`, "class")}> ${renderComponent($$result, "technology.icon", technology.icon, { "className": "size-12" })} <span class="mt-2 text-sm font-semibold text-white"> ${technology.name} </span> </div>`)} </div>`;
}, "C:/Projects/Portfolio-cv/src/components/Technologies.astro", void 0);

const $$Astro = createAstro("https://camilooviedo.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Camilo Oviedo's Resume - Systems Engineer and Business Administrador with 6 years of experience", "description": "Hire Camilo Oviedo at your company to improve your technological team and engineer the future. Proven track record in designing and developing innovative software components used within complex systems, ensuring their functionality, reliability, security and efficiency." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 pb-24" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {}, { "default": ($$result4) => renderTemplate` ${renderSlot($$result4, $$slots["default"])} ` })} ` })} <div class="space-y-20"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experience" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "BriefcaseIcon", $$Briefcase, { "class": "size-8" })}
Work Experience
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "projects" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })}
Projects
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "projects" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })}
Projects
</h2> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Technologies" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })}
Technologies
</h2> ${renderComponent($$result3, "Technologies", $$Technologies, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "about-me" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"> ${renderComponent($$result3, "ProfileCheckIcon", $$ProfileCheck, { "class": "size-8" })}
About me
</h2> ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> </main> ` })}`;
}, "C:/Projects/Portfolio-cv/src/pages/index.astro", void 0);

const $$file = "C:/Projects/Portfolio-cv/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
