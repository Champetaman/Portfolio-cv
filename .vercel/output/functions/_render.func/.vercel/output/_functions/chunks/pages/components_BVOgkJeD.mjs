/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, f as createTransitionScope, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_DIfAFnVI.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const navItemsData = [
	{
		title: "Experience",
		label: "experience",
		url: "/#experience"
	},
	{
		title: "Projects",
		label: "projects",
		url: "/#projects"
	},
	{
		title: "About Me",
		label: "about-me",
		url: "/#about-me"
	},
	{
		title: "Contact",
		label: "contact",
		url: "mailto:oviedocamilo94@gmail.com"
	}
];

const $$Astro$c = createAstro("https://camilooviedo.com/");
const $$LightMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$LightMode;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/LightMode.astro", void 0);

const $$Astro$b = createAstro("https://camilooviedo.com/");
const $$DarkMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$DarkMode;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/DarkMode.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$a = createAstro("https://camilooviedo.com/");
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  const THEMES = ["Light", "Dark"];
  return renderTemplate(_a || (_a = __template(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3', '> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3', "> <ul data-astro-cid-x3pjskd3> ", ` </ul> </div> </div>  <script>
  let remove = null;
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
  const themesMenu = document.getElementById("themes-menu");

  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const updateIcon = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.style.scale = element.id === themePreference ? "1" : "0";
    });
  };

  const updateTheme = () => {
    if (remove != null) {
      remove();
    }
    matchMedia.addEventListener("change", updateTheme);
    remove = () => {
      matchMedia.removeEventListener("change", updateTheme);
    };

    const themePreference = getThemePreference();
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && matchMedia.matches);

    updateIcon(themePreference);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  };

  updateTheme();

  document.addEventListener("click", () => themesMenu.classList.remove("open"));

  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const isClosed = !themesMenu.classList.contains("open");
    themesMenu.classList[isClosed ? "add" : "remove"]("open");
  });

  document.querySelectorAll(".themes-menu-option").forEach((element) => {
    element.addEventListener("click", (e) => {
      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim());
      updateTheme();
    });
  });

  document.addEventListener('astro:after-swap', () => {
    updateTheme();
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
  })
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ko5uysgj"), "data-astro-transition-persist"), renderComponent($$result, "LightModeIcon", $$LightMode, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "DarkModeIcon", $$DarkMode, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), addAttribute(createTransitionScope($$result, "fyqz2s63"), "data-astro-transition-persist"), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "C:/Projects/Portfolio-cv/src/components/ThemeToggle.astro", "self");

const $$Astro$9 = createAstro("https://camilooviedo.com/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = navItemsData;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-4 z-10 flex items-center justify-center w-full mx-auto mt-5" data-astro-cid-3ef6ksr2> <nav class="flex px-3  space-x-8 text-base font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"${addAttribute(item.label, "aria-label")}${addAttribute(item.url, "href")} data-astro-cid-3ef6ksr2> ${item.title} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </nav> </header>  `;
}, "C:/Projects/Portfolio-cv/src/components/Header.astro", void 0);

const $$Astro$8 = createAstro("https://camilooviedo.com/");
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path></svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/GitHub.astro", void 0);

const $$Astro$7 = createAstro("https://camilooviedo.com/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="justify-center opacity-80 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex"> <div class="justify-center rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© ${currentYear} <a href="https://flowbite.com/" class="hover:underline">Camilo Oviedo. Almost all Rights Reserved.</a> <br> <div class="flex flex-row justify-center"> <a href="https://github.com/midudev/porfolio.dev" class="hover:underline">Inspired on Portfolio.dev by Midudev.</a> ${renderComponent($$result, "GitHubIcon", $$GitHub, { "class": "ml-2 size-4" })} </div> </span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-zinc-800/90 dark:text-white/90 sm:mt-0"> <li> <a href="#/about-me" class="hover:underline me-4 md:me-6">About me</a> </li> <li> <a id="contact" href="mailto:oviedocamilo94@gmail.com" class="hover:underline">Contact</a> </li> </ul> </div> </footer>`;
}, "C:/Projects/Portfolio-cv/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro("https://camilooviedo.com/");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Projects/Portfolio-cv/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro("https://camilooviedo.com/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Projects/Portfolio-cv/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro("https://camilooviedo.com/");
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "C:/Projects/Portfolio-cv/src/components/Badge.astro", void 0);

const $$Astro$3 = createAstro("https://camilooviedo.com/");
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg>`;
}, "C:/Projects/Portfolio-cv/src/icons/LinkedIn.astro", void 0);

const $$Astro$2 = createAstro("https://camilooviedo.com/");
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Projects/Portfolio-cv/src/components/SectionContainer.astro", void 0);

const $$Astro$1 = createAstro("https://camilooviedo.com/");
const $$SocialStack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialStack;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black" target="_blank" rel="noopener noreferrer" role="link"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Projects/Portfolio-cv/src/components/SocialStack.astro", void 0);

const $$Astro = createAstro("https://camilooviedo.com/");
const $$Components = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Components;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Design System Portfolio.dev", "description": "Component catalog of my Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt;Badge /&gt;</h1> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Open to Work` })} </article> <article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt;SocialStack /&gt;</h1> <div class="flex"> ${renderComponent($$result3, "SocialStack", $$SocialStack, { "href": "https://www.linkedin.com/in/oviedocamilo/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })}LinkedIn
` })} </div> </article> ` })} ` })}`;
}, "C:/Projects/Portfolio-cv/src/pages/components.astro", void 0);

const $$file = "C:/Projects/Portfolio-cv/src/pages/components.astro";
const $$url = "/components";

const components = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Components,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SocialStack as $, $$LinkedIn as a, $$Badge as b, $$SectionContainer as c, $$Layout as d, components as e };
