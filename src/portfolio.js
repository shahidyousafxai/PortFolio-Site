import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username: "Shahid Bahadur",
  title: "Hi all, I'm Shahid Bahadur",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an Industry experience of building Web applications with JavaScript / ReactJS."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12y4FqFwVRYH2tY4O7AL281UmD0PNsZHX/view?usp=sharing", 
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShahidYousafxai",
  linkedin: "https://www.linkedin.com/in/shahidyousafxai/",
  gmail: "shahidbahadur1998@gmail.com",
  medium: "https://shahidyousafxai.medium.com/",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER WHO WANTS TO EXPLORE NEW TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
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
      skillName: "Material UI",
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
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
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
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "65%" 
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false 
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Associate Software Engineer",
      company: "BITLogix (pvt) ltd",
      companylogo: require("./assets/images/bitlogix.svg"),
      date: "Jan 2022 – Present",
      desc: "Frontend Web Development",
      descBullets: [
        "Cooperated with Team member to build  projects.",
        "Working with different technologies and understanding their work flow.",
        "Worked in almost four projects to build thier frontend using different tech stack i.e React, React Native, MUI, Tailwind"
      ]
    }
  ]
};


const openSource = {
  showGithubProfile: "true", 
  display: false 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED IN",
  projects: [
    {
      image: require("./assets/images/DigitalInvoice.jpeg"),
      projectName: "Digital Invoice",
      projectDesc: "Digital Invoice generating web application",
//       footerLink: [
//         {
//           name: "Live",
//           url: "http://weather-app-self.netlify.app"
//         },
//         {
//           name: "Visit GitHub",
//           url: "https://github.com/shahidyousafxai/Weather-App-Javascript"
//         }
//       ]
    },
    {
      image: require("./assets/images/net-1.png"),
      projectName: ".NET Conf.",
      projectDesc: "A web application for all the information and registeration to the .NET Event held by BITLogix (pvt) ltd Sponcered by Microsoft",
    },
    {
      image: require("./assets/images/clothing.jpeg"),
      projectName: "LeTribe (Mobile Application)",
      projectDesc: "A React Native app where different clothing brands can create thier own store and sell thier product and outfits.",
    }
  ],
  display: true 
};

// Achievement Section

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
      ]
    }
  ],
  display: true
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
  display: false 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "03043050865",
  email_address: "shahidbahadur1998@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false 
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails
};
