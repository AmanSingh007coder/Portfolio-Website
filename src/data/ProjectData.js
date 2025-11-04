import img1 from "../Assets/Bizsite.png";
import img2 from "../Assets/rockpaper.png";
import img3 from "../Assets/todo.png";
import img4 from "../Assets/tictac.png";
import img5 from "../Assets/stop.png";
import imgZentry from "../Assets/Zentry.png";

const ProjectData = [
  {
    id: "bizsite",
    title: "Bizsite",
    description:
      "A modern, responsive website template built with React and Tailwind.",
    image: img1,
    stack: ["React JS", "Tailwind CSS"],
    github: "https://github.com/AmanSingh007coder/Bizsite",
    demo: "https://bizsite-snowy.vercel.app/",
    longDescription: "Bizsite is a fully responsive and visually engaging business website template crafted using React and Tailwind CSS. It highlights clean UI design principles, smooth animations powered by Framer Motion, and modular reusable components. The site is structured to showcase services, portfolios, and client engagement in a sleek and professional layout, making it ideal for startups or business landing pages. Every section is optimized for responsiveness and aesthetic consistency across devices.",
    platform: "Vercel",
    features: [
  "Fully responsive and mobile-friendly design for modern businesses",
  "Built with reusable React components for scalability",
  "Smooth page transitions and animations powered by Framer Motion",
  "Optimized SEO structure and fast loading performance",
  "Easy to customize for startups, agencies, and freelancers",
],
  },
  {
    id: "stone-paper-scissors",
    title: "Stone Paper Scissors",
    description:
      "A fun, interactive browser game built using HTML, CSS, and JavaScript.",
    image: img2,
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AmanSingh007coder/Stone-Paper-Scissors",
    demo: "https://stone-paper-scissors-drab.vercel.app/",
    longDescription: "Stone Paper Scissors is a simple yet entertaining web-based game that recreates the classic hand game experience. Built with HTML, CSS, and JavaScript, it features an intuitive interface and dynamic score tracking system. The logic is implemented using conditional statements and DOM manipulation to instantly display results. Designed for fast, responsive play, the project demonstrates fundamental front-end logic, interactivity, and styling consistency in a fun, lightweight package.",
    platform: "Vercel",
    features: [
  "Simple and intuitive user interface with vibrant design",
  "Dynamic score tracking and instant result updates",
  "Interactive animations for each move",
  "Lightweight and runs entirely on client-side JavaScript",
  "Reset and replay functionality for continuous gameplay",
],

  },
  {
    id: "todo-list",
    title: "To-Do List App",
    description:
      "A simple and elegant to-do list app with local storage support.",
    image: img3,
    stack: ["React JS", "Tailwind CSS"],
    github: "https://github.com/AmanSingh007coder/TO-DO-LIST-APP",
    demo: "https://to-do-list-app-five-jet.vercel.app/",
    longDescription: "The To-Do List App is a productivity-focused React project designed for simplicity and efficiency. Users can add, edit, and delete tasks, with data saved locally for persistence across sessions. The interface is minimal and distraction-free, ensuring smooth task management. Built with React’s state management and clean component structure, this project reflects practical UI design, functional logic, and a focus on user experience in everyday applications.",
    platform: "Vercel",
    features: [
  "Add, edit, and delete tasks with a smooth user interface",
  "Stores tasks in local storage for persistence between sessions",
  "Clean and minimal layout for distraction-free productivity",
  "Real-time task status updates with completion toggle",
  "Built using React components for modular structure",
],

  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "A responsive web version of the classic Tic Tac Toe game.",
    image: img4,
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AmanSingh007coder/Tic-Tac-Toe",
    demo: "https://tic-tac-toe-alpha-tawny-74.vercel.app/",
    longDescription: "Tic Tac Toe is a browser-based implementation of the popular two-player strategy game. It features an interactive grid, automatic turn switching, and result detection using JavaScript logic. The layout is designed with CSS Flexbox for responsiveness and modern aesthetics. This project demonstrates algorithmic thinking, DOM manipulation, and real-time interactivity—all packed into a clean and visually pleasing interface suitable for all screen sizes.",
    platform: "Vercel",
    features: [
  "Interactive 3x3 grid with real-time move updates",
  "Two-player gameplay with clear win and draw detection",
  "Instant board reset for quick replay",
  "Fully responsive layout that adapts to all screen sizes",
  "Lightweight and built using pure HTML, CSS, and JavaScript",
],

  },
  {
    id: "stop-watch",
    title: "Stop Watch",
    description:
      "A sleek and accurate stopwatch app with start, pause, and reset controls.",
    image: img5,
    stack: ["React JS", "Tailwind CSS"],
    github: "https://github.com/AmanSingh007coder/Stop-Watch",
    demo: "https://stop-watch-one-pi.vercel.app/",
    longDescription: "Stop Watch is a precise and elegant browser-based stopwatch built using vanilla JavaScript. It includes essential time controls such as start, pause, and reset, powered by interval-based time tracking. The interface is designed with CSS for a smooth, minimalist look and real-time updates. This project highlights functional programming concepts, clean code structure, and attention to UI detail—all in a compact and efficient implementation.",
    platform: "Vercel",
    features: [
  "Start, pause, and reset functionality with precision timing",
  "Clean and minimal user interface for clarity",
  "Accurate time calculation using JavaScript intervals",
  "Responsive design that fits both desktop and mobile",
  "Lightweight code optimized for smooth performance",
],

  },
  {
    id: "zentry-blog",
    title: "Zentry Blog",
    description:
      "A full-stack MERN blog platform with full community features.",
    image: imgZentry, 
    stack: ["Node JS", "Express JS", "MongoDB", "React JS", "Tailwind CSS", "Firebase"],
    github: "https://github.com/AmanSingh007coder/Zentry-Blog",
    demo: "https://zentry-blog.vercel.app/",
    longDescription: "Zentry Blog is a complete, full-stack web application built from the ground up using the MERN stack (MongoDB, Express, React, Node.js). It functions as a modern, community-driven platform where users can sign up, create feature-rich articles using a Tiptap-based rich text editor, and upload images to Cloudinary. The platform features a robust, role-based authentication system with both manual JWT and Google Firebase sign-in. It also includes a full suite of community engagement tools like post commenting, full-text search, and a 'Save for Later' bookmarking system. The entire site is managed via a secure admin panel that allows for complete moderation of all users and content.",
    platform: "Vercel (Frontend), Render (Backend)",
    features: [
      "Full-stack MERN architecture with a monorepo structure.",
      "Secure authentication with JWT and Google Sign-In (Firebase).",
      "Complete role-based admin panel for full user and content moderation.",
      "Rich text post creation (Tiptap) with image uploads (Cloudinary).",
      "Full community features: comments, post bookmarking, and full-text search.",
    ],
  },
];

export default ProjectData;
