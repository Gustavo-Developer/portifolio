import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".accenture",
  `
  - Support for legacy systems and implementation of new features <br>
  - Creating APIs and Microservices <br>
  Tools:  Angular · Jenkins · R · Node · Jest · AngularJS
  `,
  "Software Engineer",
  "Accenture",
  "Dec 2021 - At the moment"
);

hoverChangeExperience(
  ".circlelabs",
  `
  - Developed a new applications using ReactJs and NextJS <br>
  - Implementing new features in Angular  <br>
  Tools: Next.js · Figma · React.js · Angular
  `,
  "Front-end Developer",
  "Circle Labs",
  "Jul 2021 - At the moment"
);

hoverChangeExperience(
  ".academiadapele",
  `
    - Created landing pages using ReactJS with strong SEO rules and requirements. <br>
    Tools: Google Cloud Platform (GCP) · React.js · TypeScript
  `,
  "Front-end Developer",
  "Academia da Pele",
  "Jan 2021 - May 2022"
);

hoverChangeExperience(
  ".barpass",
  `
  - Developed and integration API using ReactJS <br>
   Tools: React Query · React Hooks · Context API · I18n · Material-UI · Clean Clode · React.js`,
  "Front-end Developer",
  "Barpass ",
  "Aug 2021 - Set 2022 "
);

hoverChangeDescription(
  ".html",
  "HTML is a markup language, where we mark elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a stylesheet language composed of “layers”, created for the purpose of styling pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic elements in web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a CSS preprocessor that adds some features that are not available natively."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library focused on creating user interfaces in a componentized way."
);
hoverChangeDescription(
  ".next",
  "Next.js is a web framework that enables functionality such as server-side rendering and static website generation based on React."
);
hoverChangeDescription(
  ".styled",
  "styled-components is a library that uses the concept of CSS-in-JS, that is, it allows us to write CSS codes inside Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a CSS framework that provides us with utility classes for the purpose of styling pages."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that includes features that are not natively present in the language, in addition to making it static."
);
hoverChangeDescription(
  ".radix",
  "Radix is a library that provides accessible, unstyled components for building React applications."
);
hoverChangeDescription(
  ".cypress",
  "Cypress is an end-to-end test automation framework, which currently uses the JavaScript language."
);
hoverChangeDescription(
  ".storybook",
  "Storybook is a tool that aims to document and test the application components."
);
