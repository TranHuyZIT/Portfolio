import React, { useState } from "react";
import "../../grid.css";
import "./Projects.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";

function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    return Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const projectDetails = [
    {
      title: "A Pathfinding Algorithm Visualisation",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "An application i made to visualize a few graph algorithms including A*, Dijkstra, BFS and DFS. This project is build using Pygame in Python. I've learned a lot about algorithm, OOP and problem solving from making this project.",
      subHeading: "Technologies Used: Python, Pygame",
      img: require("../../assets/Projects/pathFinding.jpg"),
      github: "https://github.com/TranHuy2k2/PathFindingVisualization",
      view: "https://www.facebook.com/100006161016210/videos/856934914931542/",
    },
    {
      title: "A Sudoku Solver - Backtracking Visualisation",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "This sudoku solver is another project i made with Pygame in Python allowing user to enter their sudoku board. Then the program will solve the board while showing every step of backtracking algorithm. After finishing this project, my problem solving as well as Python programming were improved a lot.",
      subHeading: "Technologies Used: Python, Pygame",
      img: require("../../assets/Projects/sudoku.jpg"),
      github: "https://github.com/TranHuy2k2/SudokuBackTracking",
      view: "https://www.facebook.com/100006161016210/videos/596744301365109/",
    },
    {
      title: "A To-do App",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A todo app with many features. This is my first project using ReactJS combine with Redux-tookit and AntD. I also learned how to use redux thunk to handle async action, fake APIS using mirageJS .From building this project, i have improved a lot with my front-end skills and especially using Redux inside an React app.",
      subHeading: "Technologies Used: ReactJS, Redux",
      img: require("../../assets/Projects/todoRedux.jpg"),
      github: "https://github.com/TranHuy2k2/ToDoRedux",
      view: "https://giahui-todo-redux-6w2ho77ar-tranhuy2k2.vercel.app/",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A personal website to showcase all my details and projects.",
      subHeading: "Technologies Used: ReactJS, Bootstrap",
      img: require("../../assets/Projects/portfolio.jpg"),
      github: "https://github.com/TranHuy2k2/Portfolio",
      view: "/",
    },
    {
      title: "CTU Timetable",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A web-app i made in order to help students in my university to manage their timetable more easily. By selecting a specific group for a course, the web-app will show all the informations needed from the university's data inside a timetable.",
      subHeading: "Technologies Used: ReactJS, NodeJS",
      img: require("../../assets/Projects/timetable.jpg"),
      github: "https://github.com/TranHuy2k2/CTU_TimeTable",
      view: "https://giahui-ctu-timetable.vercel.app/",
    },
    {
      title: "Library Management System",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A system to manage book data and orders for a small library. From this project, i learned a lot about designing database, user authentication with JWT and redux thunk middleware.",
      subHeading: "Technologies Used: ReactJS, MongoDB, NodeJS",
      img: require("../../assets/Projects/library.jpg"),
      github: "https://github.com/TranHuy2k2/Library_Client",
      view: "https://giahui-library.vercel.app/",
    },
  ];

  return (
    <div
      className="projects-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="project-content grid wide">
        <ScreenHeading
          title="Featured Projects"
          subHeading="My Formal Bio Details"
        />
        <div className="projects-card row">
          {projectDetails.map((detail) => (
            <div className="project col c-12 m-6 l-4">
              <div className="project-img-container">
                <img className="project-img" src={detail.img} />
              </div>
              <div className="project-detail">
                <h1 className="project-title">{detail.title}</h1>
                <h2 className="project-subtitle">{detail.subHeading}</h2>
                <p className="project-description">{detail.description}</p>
              </div>
              <div className="project-control">
                <button className="project-control-github-btn">
                  <a
                    target="_blank"
                    className="project-control-a"
                    href={detail.github}
                  >
                    GitHub
                  </a>
                </button>
                <button className="project-control-view-btn">
                  <a
                    target="_blank"
                    className="project-control-a"
                    href={detail.view}
                  >
                    View
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
