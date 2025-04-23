const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration: Allow all origins and only GET methods for the API
const corsOptions = {
  origin: '*',  // Allows all origins (change to a specific domain for production)
  methods: 'GET',  // Allow only GET requests
  allowedHeaders: ['Content-Type'],  // Only allow Content-Type headers
};

// Middleware
app.use(cors(corsOptions)); 
app.use(express.json());  // Middleware to parse incoming JSON requests

// Sample route to check if the server is working
app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});

// Projects route (mock data)
const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "Full-Stack personal website developed on React JS (HTML, CSS, JS) and Sanity",
    imgUrl: "https://via.placeholder.com/300",
    projectLink: "#",
    codeLink: "https://github.com/gracehe04/gracehe-portfolio",
    tags: ["Web"],
  },
  {
    id: 2,
    name: "Pawsome Companion",
    description: "This website was created using React (TS, HTML, CSS)",
    imgUrl: "https://via.placeholder.com/300",
    projectLink: "https://mypawsomecompanions.netlify.app/",
    codeLink: "https://github.com/gracehe04/mypawsomecompanion",
    tags: ["Web"],
  },
  {
    id: 3,
    name: "GDG Website",
    description: "[Work in Progress]: Leading a team of ~5 developers to develop a full stack GDG @ NYU website to showcase team operations",
    imgUrl: "https://via.placeholder.com/300",
    codeLink: "https://github.com/BAMOEQ/GDG_Website",
    tags: ["Web"],
  },
  {
    id: 4,
    name: "Snake Game",
    description: "Simple implementation of the google snake game. TODO: improve UI",
    imgUrl: "https://via.placeholder.com/300",
    codeLink: "https://github.com/gracehe04/snake-game",
    tags: ["Web"],
  },
];

// Projects API route to serve project data
app.get('/api/projects', (req, res) => {
  try {
    res.json(projects);  // Send the projects array as JSON
  } catch (error) {
    console.error('Error fetching projects:', error);  // Log any error
    res.status(500).send('Internal Server Error');  // Send error response
  }
});

// Start the server and handle potential errors
app.listen(PORT, () => {
  try {
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Error starting server:', error);  // Log any error during startup
  }
});