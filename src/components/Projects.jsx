import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/image-digital.png')" ,
            backgroundSize:"contain"
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Digital Health</h3>
          <p>
            Created a digital healthcare website, enabling patients and doctors to interact through appointment, medical records, and
responsive design
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>TypeScript</span>
            <span>Node.Js</span>
            <span>PostgreSQL</span>
            <span>Html</span>
            <span>CSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/image-collab.png')",
              backgroundSize:"contain"
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Collab Hub Web App</h3>
          <p>
            Developed a collaborative web application enabling user authentication and functionalities such as collaboration, editing,
content creation, viewing notifications, and messaging
          </p>
          <div className="project-tech">
            <span>EJS</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>authentication System</span>
            <span>html 5</span>
            <span>Bootstrap</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/image-blog.png')",
  backgroundSize: "contain",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Blog Web App</h3>
          <p>
            Created a blogging app enabling CRUD operation for user Management ,featuring dynamic content and responsive design
garnering positive user feedbacks.
          </p>
          <div className="project-tech">
             <span>EJS</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Mongoose</span>
            <span>html 5</span>
            <span>css</span>
            <span>Bootstrap</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
