import { createSlice } from "@reduxjs/toolkit";
//avatar
import IA from "../../media/avatar/IA-Avatar.png";
import Original from "../../media/avatar/avatar.png";
//logo
import Logo from "../../media/logo/ifLogo.svg";
import LogoTwo from "../../media/logo/ifLogoTwo.svg";
//skills
import PLIMG from "../../media/skills/Programminglanguages.jpg";
import FIMG from "../../media/skills/Frameworks.jpg";
import ASIMG from "../../media/skills/analytical.jpeg";
import TDSIMG from "../../media/skills/debuggin.png";
import SEOIMG from "../../media/skills/seo.png";
import ISIMG from "../../media/skills/interpersonal.png";
import LIMG from "../../media/skills/languajes.jpeg";
//Programminglanguages
import JavaScript from "../../media/skills/Programminglanguages/javascript.jpg";
import Java from "../../media/skills/Programminglanguages/java.jpg";
import CSS from "../../media/skills/Programminglanguages/css.jpeg";
import HTML from "../../media/skills/Programminglanguages/html.jpg";
import PHP from "../../media/skills/Programminglanguages/php.png";
import Python from "../../media/skills/Programminglanguages/python.jpg";
//frameworks
import VueJS from "../../media/skills/frameworks/vuejs.jpg";
import ReactJs from "../../media/skills/frameworks/reactjs.png";
import NuxtJS from "../../media/skills/frameworks/nuxtjs.png";
import NodeJS from "../../media/skills/frameworks/nodejs.jpg";
import Django from "../../media/skills/frameworks/django.jpg";
import Symfony from "../../media/skills/frameworks/symfony.jpg";
//analytical
import comunication from "../../media/skills/analytical/comunication.jpeg";
import creativity from "../../media/skills/analytical/creativity.jpeg";
import criticalthinking from "../../media/skills/analytical/criticalthinking.jpg";
import problemsolving from "../../media/skills/analytical/problemsolving.jpg";
import research from "../../media/skills/analytical/research.jpeg";
//Testing-Debugging
import Reactive from "../../media/skills/testingdebug/reactive.jpeg";
import Proactive from "../../media/skills/testingdebug/proactive.png";
import Backtracking from "../../media/skills/testingdebug/backtracking.png";
import Unit from "../../media/skills/testingdebug/unittest.png";
import Integration from "../../media/skills/testingdebug/integration.jpg";
import Acceptance from "../../media/skills/testingdebug/acceptance.jpeg";
//Search Engine Optimization
import SearchEngineAlgorithms from "../../media/skills/seo/searchenginealgorithm.png";
import Prioritization from "../../media/skills/seo/priorization.jpg";
import ProjectManagement from "../../media/skills/seo/projectmanagement.png";
import Analysis from "../../media/skills/seo/analysis.jpeg";
import DecisionMaking from "../../media/skills/seo/decisionmaking.jpeg";
//Interpersonal Skills
import Collaboration from "../../media/skills/interpersonal/collaboration.jpeg";
import Leadership from "../../media/skills/interpersonal/leadership.jpg";
import Teamwork from "../../media/skills/interpersonal/teamwork.jpg";
import Relationshipmanagement from "../../media/skills/interpersonal/relationshipmanagent.jpeg";
import Empathy from "../../media/skills/interpersonal/empathy.jpg";
//Languages
import Spanish from "../../media/skills/languajes/spanish.png";
import English from "../../media/skills/languajes/english.png";

//companies
import Orion from "../../media/companies/logoorion.PNG";
import UCI from "../../media/companies/uci.jpeg";
import Desoft from "../../media/companies/desoft.png";
import Freelancer from "../../media/companies/freelance.png";
import CubanaA from "../../media/companies/logocubana.jpg";
import Mincex from "../../media/companies/mincex.jpg";
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
