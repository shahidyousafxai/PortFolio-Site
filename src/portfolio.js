/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shahid Bahadur",
  title: "Hi all, I'm Shahid Bahadur",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an Industry experience of building Web applications with JavaScript / ReactJS / NodeJS / Express JS."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RhlHhtHGS7uym5pkG8ZyACnOIoIEKFfX/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShahidYousafxai",
  linkedin: "https://www.linkedin.com/in/shahidyousafxai/",
  gmail: "shahid.bahadur207@amalacademy.org",
  facebook: "https://www.facebook.com/ShahidYousafxai98",
  medium: "https://shahidyousafxai.medium.com/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY MERN STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end and Back end / User Interfaces for your web applications"
    )
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Ant-Design",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React Js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React-Redux",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Node Js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Science And Technology Bannu",
      logo: require("./assets/images/logo.png"),
      subHeader: "Bachelor in Software Engineering",
      duration: "September 2017 - October 2021"
    },
    {
      schoolName: "Iqra APS & CS",
      logo: require("./assets/images/small-logo-grey.png"),
      subHeader: "Faculty of Science Pre-Engineering",
      duration: "September 2014 - April 2016"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "Software Engineer",
//       company: "Facebook",
//       companylogo: require("./assets/images/facebookLogo.png"),
//       date: "June 2018 – Present",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       role: "Front-End Developer",
//       company: "Quora",
//       companylogo: require("./assets/images/quoraLogo.png"),
//       date: "May 2017 – May 2018",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       role: "Software Engineer Intern",
//       company: "Airbnb",
//       companylogo: require("./assets/images/airbnbLogo.png"),
//       date: "Jan 2015 – Sep 2015",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   ]
// };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE BUILD",
  projects: [
    {
      image: require("./assets/images/weather.png"),
      projectName: "Weather App(JavaScript)",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Live",
          url: "http://weather-app-self.netlify.app"
        },
        {
          name: "Visit GitHub",
          url: "https://github.com/shahidyousafxai/Weather-App-Javascript"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/istockphoto.jpg"),
    //   projectName: "PICWIK University Website",
    //   // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://piwic-university.netlify.app"
    //     },
    //     {
    //       name: "Visit GitHub",
    //       url: "https://github.com/shahidyousafxai/Jadu-Third-Project"
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/20945567.jpg"),
      projectName: "Expense Tracker App(React)",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Live",
          url: "https://expensetrackerreactjs.netlify.app"
        },
        {
          name: "Visit GitHub",
          url: "https://github.com/shahidyousafxai/Expense_Tracker-ReactJS"
        }
      ]
    },
    {
      image: require("./assets/images/43029.jpg"),
      projectName: "Todo App(React)",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Live",
          url: "https://todoapp-project-react.netlify.app"
        },
        {
          name: "Visit GitHub",
          url: "https://github.com/shahidyousafxai/Todo-App-ReactJS"
        }
      ]
    },
    {
      image: require("./assets/images/weather.png"),
      projectName: "Weather App(React)",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Live",
          url: "https://openweather-react-application.netlify.app"
        },
        {
          name: "Visit GitHub",
          url: "https://github.com/shahidyousafxai/Weather-App-React"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "JaduJobs",
      subtitle: "Remote MERN Stack web development 4-months fellowship",
      date: "Feb 2021 - June 2021",
      image: require("./assets/images/jadu-jobs-logo1.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1GQuT6RYStAoUFdAoOHdyZSbgRLt97FvG/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "DevNation",
      subtitle:
        "DevNation is a start-up company where they provide 6-months MERN Stack Web development training remotly.",
      date: "July 2021 - Present",
      image: require("./assets/images/devnation.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/18nFaEDRV3aSscB1IdeDwME2us55msL4o/view?usp=sharing"
        }
      ]
    },

    {
      title: "Amal Academy",
      subtitle:
        "Career Preparation fellowship where they train student in order to develop business skills e.g communication, leadership, problem solving, teamwork, etc.",
      date: "July 2021 - Oct 2021",
      image: require("./assets/images/Logo-Black.png"),
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/nerd-for-tech/jsx-rules-in-react-a-javascript-framework-4b0ab66fdbf9",
      title: "JSX Rules in React(A JavaScript Framework)",
      description:
        "I have come across some of the React JSX rules must be follow while using React."
    },
    {
      url: "https://medium.com/nerd-for-tech/git-github-branches-merging-branches-collaboration-forking-81ff0a15f13a",
      title:
        "Git & GitHub (Branches, Merging Branches, Collaboration, Forking)",
      description:
        "Git is a high-quality version control system. Git is installed and maintained on your local system and gives you a self-contained record of your ongoing programming versions."
    },
    {
      url: "https://medium.com/@shahidyousafxai/eating-that-frog-with-a-pomodoro-561666205dfc",
      title:
        "Eating that Frog with a Pomodoro",
      description:
        "The Pomodoro Technique is a time management system that encourages people to work with the time they have rather than against it."
    }
  ],
  display: true 
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3043050865",
  email_address: "shahid.bahadur207@amalacademy.org"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  // workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
