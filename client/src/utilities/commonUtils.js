import Home from "../Container/Home/Home";
import AboutMe from "../Container/AboutMe/AboutMe";
import Resume from "../Container/Resume/Resume";
import ContactMe from "../Container/ContactMe/ContactMe";
import Projects from "../Container/Projects/Projects";
export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About Me",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  { screen_name: "Projects", component: Projects },
  {
    screen_name: "Contact Me",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].name === screen_name) {
      return i;
    }
  }
  return -1;
};
