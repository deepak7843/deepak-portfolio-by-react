//I Would Highly Recommend You To Customize The Theme According To Your Taste.
export const globalStyles = {
  "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<Deepak>";

// Main Page
export const main = {
  name: "Deepak Shankar dubey",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/file/d/1pA_mzQm0sttXjBHLl0ar7DQ7AU5t1KAn/view",
};

// AboutMe
export const aboutme = {
  imgLink:"https://raw.githubusercontent.com/deepak7843/important/main/circle.png",
  p1: "Hey, My name is Deepak Shankar dubey.I believe practice makes perfect. A Btech holder in Mechanical Engineering. I got to know about Masai School and its Web Development program from a friend. I believed this to be a career that I would excel in and registered for this course. Now, I am working on various projects and have improved my skills in MERN Stack, HTML, CSS, JavaScript, Node.js, MongoDB, Mongoose, etc",

  // I have completed my Bachelor of Management Studies from B.K. Birla college of Science,Arts and Commerce.",
  p2: " I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.",
};

// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    "Building responsive website using HTML, CSS, JS, React",
    // "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    // {
    //   name: "Postman",
    //   iconifyClassName: "logos:postman-icon",
    //   id: "9",
    // },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    // {
    //   name: "Tailwind",
    //   iconifyClassName: "logos:tailwindcss-icon",
    //   id: "12",
    // },
    // {
    //   name: "Material-UI",
    //   iconifyClassName: "logos:material-ui",
    //   id: "13",
    // },
    // {
    //   name: "Ant Design",
    //   iconifyClassName: "logos:ant-design",
    //   id: "14",
    // },
    {
      name: "Netlify",
      iconifyClassName: "vscode-icons:file-type-netlify",
      id: "15",
    },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  {
    id: 1,
    title: "Boat Clone (E-commerce Website)",
    desc: `I did this Project in first construct week in Masai,
    this is our team Project which is E-Commerce site, for
    designing in this project we used Html5, Css3,
    Javascript and to store the data we used local storage,
    to make it responsive we used media query.`,
    feature: `Landing page,
product listing for caterories ,Product detail page,
sorting and filter, add to cart functionality, order summary on the checkout page.`,
    tech: `Tech Stack: HTML | CSS | JavaScript `,

    img: "https://raw.githubusercontent.com/deepak7843/important/main/project%20pics/boat.png",
    github: "https://github.com/Neeraj7071/boAt-lifestyle",
    link: "https://boat-clone-1.vercel.app/",
  },
  {
    id: 2,
    title: "Udemy-Clone",
    desc: ` This is my third construct week Project. There are six
    member in our team for designing we used HTML5, CSS3,
    JAVASCRIPT and for backend we used EXPRESS.JS, MongoDB
    Database.`,
    feature: `Sorting, Filtering etc`,
    tech: `Tech Stack: HTML | CSS | JavaScript `,
    img: "https://raw.githubusercontent.com/deepak7843/important/main/project%20pics/udemy%20project.png",
    link: "https://cloneudemy.netlify.app/",
    github: "https://github.com/Ashish240399/Udemy_Clone",
  },

  {
    id: 3,
    title: "Mytheresa-Clone",
    desc: `This is the team Project, it is the E-Commerce site, for
    designing in this project we used Html5, Css3, Javascript
    and to stored data we used mongoDB.`,
    feature: `
Sign-in/Sign-up, User Authentication,
 shopping page,
Sorting, filtering and debouncing based search bar,
Carousel and slideshows,
Add to cart & Check out.`,
    // tech: `Tech Stack: HTML | CSS | JavaScript `,
    tech: `Tech Stack: REACT REDUX |HTML | CSS | JavaScript `,

    img: "https://raw.githubusercontent.com/deepak7843/important/main/project%20pics/mytheresa%20project.png",
    github: "https://github.com/vineethevk/Mytheresa",
    link: "https://charming-cat-296ee7.netlify.app/",
  },

  //   {
  //     id: 4,
  //     title: "MakeMYHome",
  //     desc: `A small React app to keep the details of the flats and their residents in a society.`,
  //     feature: `User authentication using MongoDB,
  //     Private Routing,
  //     Filter and sorting.`,
  //     tech: `Tech Stack: React | CSS | NodeJS | Exprees | MongoDB .`,
  //     img: "https://github.com/Shivam2101s/images/blob/main/makeMyHouse1.jpg?raw=true",
  //     github: "https://github.com/Shivam2101s/Apartment-Flat-Manager",
  //     link:"https://apartment-flats-manager-shivam2101s.vercel.app"
  //   },
  //   {
  //     id: 5,
  //     title: "Eva Translate",
  //     desc: `Eva Translate is a translating tool, users can translate text from one language to another and also hear its correct pronunciation.`,
  //     feature: `Language translation,
  //     Speech-to-text.`,
  //     tech: `Tech Stack: HTML | CSS | JavaScript .`,
  //     img: "https://github.com/Shivam2101s/images/blob/main/eva%20translate.jpg?raw=true",
  //     link: "https://evatranslate.netlify.app/",
  //     github: "https://github.com/Shivam2101s/Eva-Translate",
  //   },
  //   {
  //     id: 6,
  //     title: "My Recipe App",
  //     desc: `It's a food recipe app, users can search recipes of various dishes and also see the latest recipes as well as the recipe of the day.`,
  //     feature: `Search recipe,
  // Recipe of the day.`,
  //     tech: `Tech Stack: HTML | CSS | JavaScript`,
  //     img: "https://github.com/Shivam2101s/images/blob/main/food%20app.jpg?raw=true",
  //     link: "https://myfoodapp21.netlify.app/",
  //     github: "https://github.com/Shivam2101s/Food-app",
  //    },
];

// Social Media Links
export const links = [
  "https://www.linkedin.com/in/deepak-shankar-dubey",
  "https://api.whatsapp.com/send/?phone=917906074990&text&app_absent=0",
  "mailto:deepakshankardubey123@gmail.com",

  "https://github.com/deepak7843",
];
