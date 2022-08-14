/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import env from "react-dotenv";
import splashAnimation from "./assets/lottie/splashAnimation";

const illustration = {
  animated: true // set to false to use static SVG
};

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const greeting = {
  username: "Yassine Nifa",
  title: "Hi all, I'm Yassine",
  subTitle: emoji(
    "A passionate Full Stack Software Developer having an experience of building Web applications with JavaScript / Reactjs and some other cool libraries and frameworks. I have Versatile Skills In Data Science, Deep Learning With Innovative Experiences In The United States, France And Morocco"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ySdNFTlieEu_ZObqYdle22RcbFzQLPwy/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/YasineNifa",
  linkedin: "https://www.linkedin.com/in/yassinenifa/",
  gmail: "yasine.nifa@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/9107241/yassine",
  // facebook: "https://www.facebook.com/",
  //medium: "https://medium.com/@davidrakosi",
  //instagram: 'https://www.instagram.com/davidrakosi/',
  //twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Build complete web application using Django, React"),    
    emoji("⚡ Integration of third party services such as Firebase/ AWS"),
    emoji("⚡ Build services using Machine Learning and Deep Learning models"),
    emoji("⚡ Web Scraping")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName:"machine learning",
      fontAwesomeClassname:"fas fa-robot"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nosql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Paris 8 University",
      logo: require("./assets/images/téléchargement.png"),
      subHeader: "Master of IA and Embedding System",
      duration: "September 2018 - August 2020",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "ENSIAS",
      logo: require("./assets/images/Ensias2.jpg"),
      subHeader: "Computer Science Engineer",
      duration: "September 2015 - August 2018",
      desc:
        "Ranked top 1 in the program. Took courses about Software Engineering, Web Developement, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },  
    {
      Stack: "Machine Learning",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Fullstack Engineer",
      company: "Artex",
      companylogo: require("./assets/images/artex.jfif"),
      date: "May 2021 – Now",
      desc:
        "Build websites and provide services",
      descBullets: [
        "Developing front end website architecture. (Reactjs, JS, HTML/CSS)",
        "Developing back-end website applications. (NodeJS, Python)",
        "Creating servers and databases. (DynamoDB)",
        "Designing and developing APIs. (GraphQL)",
        "WebScraping (puppeteer, selenium, BeautifulSoup)",
        "Ensuring responsiveness of web-applications",
        "Designing user interactions on web pages."
      ]
    },
    {
      role: "Python Software Engineer",
      company: "Groupe Renault",
      companylogo: require("./assets/images/Groupe_Renault_logo.png"),
      date: "February 2020 – August",
      desc:
        "Project of Risk Management to predict the delay in supplying auto parts.",
      descBullets: [
        "Backend developement using Python and Elasticsearch",
        "Frontend developement using Javascript, Html and css",
        "Machine Learning for NER (Named Entity Recognition)",
        "PDF-text-extraction using Tabula,PDFBox and PDFMiner"
      ]
    },
    {
      role: "Python Software Engineer",
      company: "Groupe Renault",
      companylogo: require("./assets/images/Groupe_Renault_logo.png"),
      date: "February 2020 – August",
      desc:
        "Natural Language Processing and Vehicle Configuration.",
      descBullets: [
        "Backend developement using Python and Elasticsearch",
        "Frontend developement using Javascript, Html and css",
        "Machine Learning for NLP using Bert, FastText, Universal Sentence Encoder and Contextualized word embeddings",
      ]
    },
    {
      role: "Python Software Engineer",
      company: "Groupe Renault",
      companylogo: require("./assets/images/Groupe_Renault_logo.png"),
      date: "April 2019 – September",
      desc:
        "Build a voice recognition system using Deep Learning",
      descBullets: [
        "Backend developement using Python",
        "Deep Learning using Deep Speech",
      ]
    },
    {
      role: "Python Software Engineer",
      company: "Mascir",
      companylogo: require("./assets/images/mascir.jpg"),
      date: "March 2019 – September 2020",
      desc: "secure a mobile application using facial recognition"
    },
    {
      role: "C# Software Engineer",
      company: "University Of Houston",
      companylogo: require("./assets/images/UH.png"),
      date: "June 2017 – September",
      desc: "Improve the output of the text detection tool on an image (Microsoft Office Document Imaging) which can help to make caption in videos offered by the University of Houston."
    },
    {
      role: "Java Software Engineer",
      company: "Centre Moroco-Corean",
      companylogo: require("./assets/images/cmc.png"),
      date: "July 2016 – September",
      desc: "Application to manage a training in the society "
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: process.env.REACT_APP_GITHUB_USERNAME,
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "SOME PERSONAL PROJECTS THAT I MAKE TO MASTER SOME TECH",
  projects: [
    {
      image: require("./assets/images/pinterest.png"),
      projectName: "Pinterest clone",
      projectDesc: "Website to look for beautiful images using Unsplash API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://images-searching-ef50b.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/amazon.jpg"),
      projectName: "Amazon clone",
      projectDesc: "Ecommerce website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://clone-559fa.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/airbnb.jpg"),
      projectName: "airbnb clone",
      projectDesc: "Website to rent houses",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://airbnb-clone-bd523.web.app//"
        }
        //  you can add extra buttons here.
      ]
    },
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
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
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+33) 06 56 66 66 75",
  email_address: "yasine.nifa@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "nifa_yassine", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  splashScreen,
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
  podcastSection,
  contactInfo,
  twitterDetails
};
