import { createSlice } from "@reduxjs/toolkit";
//avatar
import IA from "../assets/images/avatar/IA-Avatar.png";
import Original from "../assets/images/avatar/avatar.png";
//logo
import Logo from "../assets/icons/logo/ifLogo.svg";
import LogoTwo from "../assets/icons/logo/ifLogoTwo.svg";
//skills
import PLIMG from "../assets/images/skills/Programminglanguages.jpg";
import FIMG from "../assets/images/skills/Frameworks.jpg";
import ASIMG from "../assets/images/skills/analytical.jpeg";
import TDSIMG from "../assets/images/skills/debuggin.png";
import SEOIMG from "../assets/images/skills/seo.png";
import ISIMG from "../assets/images/skills/interpersonal.png";
import LIMG from "../assets/images/skills/languajes.jpeg";
//Programminglanguages
import JavaScript from "../assets/images/skills/Programminglanguages/javascript.jpg";
import Java from "../assets/images/skills/Programminglanguages/java.jpg";
import CSS from "../assets/images/skills/Programminglanguages/css.jpeg";
import HTML from "../assets/images/skills/Programminglanguages/html.jpg";
import PHP from "../assets/images/skills/Programminglanguages/php.png";
import Python from "../assets/images/skills/Programminglanguages/python.jpg";
//frameworks
import VueJS from "../assets/images/skills/frameworks/vuejs.jpg";
import ReactJs from "../assets/images/skills/frameworks/reactjs.png";
import NuxtJS from "../assets/images/skills/frameworks/nuxtjs.png";
import NodeJS from "../assets/images/skills/frameworks/nodejs.jpg";
import Django from "../assets/images/skills/frameworks/django.jpg";
import Symfony from "../assets/images/skills/frameworks/symfony.jpg";
//analytical
import comunication from "../assets/images/skills/analytical/comunication.jpeg";
import creativity from "../assets/images/skills/analytical/creativity.jpeg";
import criticalthinking from "../assets/images/skills/analytical/criticalthinking.jpg";
import problemsolving from "../assets/images/skills/analytical/problemsolving.jpg";
import research from "../assets/images/skills/analytical/research.jpeg";
//Testing-Debugging
import Reactive from "../assets/images/skills/testingdebug/reactive.jpeg";
import Proactive from "../assets/images/skills/testingdebug/proactive.png";
import Backtracking from "../assets/images/skills/testingdebug/backtracking.png";
import Unit from "../assets/images/skills/testingdebug/unittest.png";
import Integration from "../assets/images/skills/testingdebug/integration.jpg";
import Acceptance from "../assets/images/skills/testingdebug/acceptance.jpeg";
//Search Engine Optimization
import SearchEngineAlgorithms from "../assets/images/skills/seo/searchenginealgorithm.png";
import Prioritization from "../assets/images/skills/seo/priorization.jpg";
import ProjectManagement from "../assets/images/skills/seo/projectmanagement.png";
import Analysis from "../assets/images/skills/seo/analysis.jpeg";
import DecisionMaking from "../assets/images/skills/seo/decisionmaking.jpeg";
//Interpersonal Skills
import Collaboration from "../assets/images/skills/interpersonal/collaboration.jpeg";
import Leadership from "../assets/images/skills/interpersonal/leadership.jpg";
import Teamwork from "../assets/images/skills/interpersonal/teamwork.jpg";
import Relationshipmanagement from "../assets/images/skills/interpersonal/relationshipmanagent.jpeg";
import Empathy from "../assets/images/skills/interpersonal/empathy.jpg";
//Languages
import Spanish from "../assets/images/skills/languajes/spanish.png";
import English from "../assets/images/skills/languajes/english.png";

//companies
import Orion from "../assets/images/companies/logoorion.png";
import UCI from "../assets/images/companies/uci.jpeg";
import Desoft from "../assets/images/companies/desoft.png";
import Freelancer from "../assets/images/companies/freelance.png";
import CubanaA from "../assets/images/companies/logocubana.jpg";
import Mincex from "../assets/images/companies/mincex.jpg";
export const dataslice = createSlice({
  name: "data",
  initialState: {
    IA: IA,
    Original: Original,
    Logo: Logo,
    isActiveSkill: false,
    activeMenu: false,
    ThemeActive: true,
    AnimationDirection: "In",
    timelinecompanies: [
      {
        place: "UCI",
        description: "Start Computer Science Engineering",
        time: "2016",
        img: UCI,
      },
      {
        place: "Snet",
        description: "Proyect to comunity of gamers in Cuba",
        time: "2017",
        img: Freelancer,
      },
      {
        place: "HomeCities",
        description: "Freelance proyect (Angular)",
        time: "2018-2019",
        img: Freelancer,
      },
      {
        place: "CIDI(UCI)",
        description: "Start Orion Browser (Angular)",
        time: "2019",
        img: Orion,
      },
      {
        place: "CIDI(UCI)",
        description: "Start Cubana page (Angular)",
        time: "2019-2020",
        img: CubanaA,
      },
      {
        place: "UCI",
        description: "End Computer Science Engineering",
        time: "2021",
        img: UCI,
      },
      {
        place: "Desoft",
        description: "Start work",
        time: "2021-Present",
        img: Desoft,
      },
      {
        place: "MINCEX",
        description: "Proyect to Mincex in Desoft (Nuxt JS)",
        time: "2021-Present",
        img: Mincex,
      },
    ],
    skillsItems: [
      {
        name: "Programming languages",
        img: PLIMG,
        action: "",
        items: [
          {
            name: "JavaScript",
            progress: 85,
            img: JavaScript,
          },
          {
            name: "Java",
            progress: 70,
            img: Java,
          },
          {
            name: "CSS",
            progress: 95,
            img: CSS,
          },
          {
            name: "HTML",
            progress: 100,
            img: HTML,
          },
          {
            name: "PHP",
            progress: 45,
            img: PHP,
          },
          {
            name: "Python",
            progress: 35,
            img: Python,
          },
        ],
      },
      {
        name: "Frameworks",
        img: FIMG,
        items: [
          {
            name: "VueJS",
            progress: 90,
            img: VueJS,
          },
          {
            name: "ReactJs",
            progress: 70,
            img: ReactJs,
          },
          {
            name: "NuxtJS",
            progress: 95,
            img: NuxtJS,
          },
          {
            name: "NodeJS",
            progress: 45,
            img: NodeJS,
          },
          {
            name: "Django",
            progress: 35,
            img: Django,
          },
          {
            name: "Symfony",
            progress: 30,
            img: Symfony,
          },
        ],
      },
      {
        name: "Analytical",
        img: ASIMG,
        items: [
          {
            name: "Problem solving",
            progress: 85,
            img: problemsolving,
          },
          {
            name: "Critical thinking",
            progress: 80,
            img: criticalthinking,
          },
          {
            name: "Research",
            progress: 95,
            img: research,
          },
          {
            name: "Creativity",
            progress: 90,
            img: creativity,
          },
          {
            name: "Communication",
            progress: 100,
            img: comunication,
          },
        ],
      },
      {
        name: "Testing-Debugging",
        img: TDSIMG,
        items: [
          {
            name: "Reactive",
            progress: 95,
            img: Reactive,
          },
          {
            name: "Proactive",
            progress: 90,
            img: Proactive,
          },
          {
            name: "Backtracking",
            progress: 100,
            img: Backtracking,
          },
          {
            name: "Unit",
            progress: 100,
            img: Unit,
          },
          {
            name: "Integration",
            progress: 90,
            img: Integration,
          },
          {
            name: "Acceptance",
            progress: 80,
            img: Acceptance,
          },
        ],
      },
      {
        name: "Search Engine Optimization",
        img: SEOIMG,
        items: [
          {
            name: "Search Algorithms",
            progress: 80,
            img: SearchEngineAlgorithms,
          },
          {
            name: "Prioritization",
            progress: 90,
            img: Prioritization,
          },
          {
            name: "Project Management",
            progress: 70,
            img: ProjectManagement,
          },
          {
            name: "Analysis",
            progress: 80,
            img: Analysis,
          },
          {
            name: "Decision Making",
            progress: 80,
            img: DecisionMaking,
          },
        ],
      },
      {
        name: "Interpersonal Skills",
        img: ISIMG,
        items: [
          {
            name: "Collaboration",
            progress: 90,
            img: Collaboration,
          },
          {
            name: "Leadership",
            progress: 65,
            img: Leadership,
          },
          {
            name: "Teamwork",
            progress: 100,
            img: Teamwork,
          },
          {
            name: "Relationship management",
            progress: 100,
            img: Relationshipmanagement,
          },
          {
            name: "Empathy",
            progress: 100,
            img: Empathy,
          },
        ],
      },
      {
        name: "Languages",
        img: LIMG,
        items: [
          {
            name: "English B1",
            progress: 70,
            img: English,
          },
          {
            name: "Spanish",
            progress: 100,
            img: Spanish,
          },
        ],
      },
    ],
  },
  reducers: {
    active: (state) => {
      state.isActiveSkill = true;
    },
    desactive: (state) => {
      state.isActiveSkill = false;
    },
    Menuactive: (state) => {
      state.activeMenu = true;
    },
    Menudesactive: (state) => {
      state.activeMenu = false;
    },
    setLightTheme: (state) => {
      state.ThemeActive = true;
      state.Logo = Logo;
    },
    setDarkTheme: (state) => {
      state.ThemeActive = false;
      state.Logo = LogoTwo;
    },
    setAnimationOut: (state) => {
      state.AnimationDirection = "Out";
    },
    setAnimationIn: (state) => {
      state.AnimationDirection = "In";
    },
  },
});

export const {
  active,
  desactive,
  setLightTheme,
  setDarkTheme,
  setAnimationOut,
  setAnimationIn,
  Menuactive,
  Menudesactive,
} = dataslice.actions;

export default dataslice.reducer;
