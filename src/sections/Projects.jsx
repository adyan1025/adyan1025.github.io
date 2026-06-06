import { motion } from "framer-motion";
import "../styling/Projects.css";

const projectData = [
  {
    id: 1,
    title: "Project One",
    description: "Brief description of project one. Highlight tech stack, goals, and impact.",
    // image: "path/to/image1.png", // optional image placeholder
  },
  {
    id: 2,
    title: "Project Two",
    description: "Brief description of project two. Highlight tech stack, goals, and impact.",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Brief description of project three. Highlight tech stack, goals, and impact.",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Brief description of project four. Highlight tech stack, goals, and impact.",
  },
];

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

function Projects() {
  return (
    <motion.section id="projects" className="projects-wrapper" {...sectionAnimation}>
      <header className="projects-header">
        <h2>projects</h2>
      </header>
      <div className="project-grid">
        {projectData.map((proj) => (
          <div key={proj.id} className="project-card">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-description">{proj.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
