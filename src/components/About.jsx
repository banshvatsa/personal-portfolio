import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const skillsData = {
  "Languages": ["C++", "JavaScript", "TypeScript"],
  "Frameworks": ["React JS", "Next JS", "Spring Boot", "Tailwind CSS", "Bootstrap", "Material UI", "Shad CN"],
  "Tools/Platforms": ["Git", "Windows", "Linux"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB"],
  "Soft Skills": ["Teamwork", "Problem Solver", "Multi-Tasking", "Excellent verbal & Written Skills"]
};

const workExperience = {
  position: "Software Engineer Intern",
  duration: "Dec 2024 - Jun 2025",
  company: "DigiMantra Labs",
  certificateLink: "https://drive.google.com/file/d/1R-NSIU32ZONnjRZsViBQ0WgW4EqS8Nki/view",
  achievements: [
    "Developed and maintained web applications using modern technologies, including HTML, CSS, JavaScript, Node.js, and MongoDB",
    "Collaborated with cross-functional teams to gather requirements, design system architecture, and deliver robust solutions",
    "Implemented RESTful APIs to enhance data exchange between the front end and back end, improving application performance and scalability"
  ],
  techStack: ["React JS", "Next JS", "Node JS", "Express", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Shad CN"]
};
export const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: "100vh",
        padding: "4rem 1rem",
        background: "linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(14, 165, 233, 0.08) 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Section Header */}
        <motion.div
          className="about-header"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <motion.h2
            variants={fadeInUp}
            style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: "700",
              margin: "0 0 1rem 0",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Me
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              opacity: 0.8,
              maxWidth: "80%",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            I am passionate about crafting innovative digital experiences that combine modern, clean design with powerful and reliable functionality. My focus is on building solutions that not only look visually appealing but also perform seamlessly, ensuring an engaging and intuitive user experience.
          </motion.p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "stretch",
          }}
        >
          {/* Skills Section */}
          <motion.div
            className="skills-section"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              padding: "2rem",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <motion.h3
              variants={fadeInUp}
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: "600",
                marginBottom: "2rem",
                color: "#667eea",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>🚀</span>
              Skills & Technologies
            </motion.h3>

            {Object.entries(skillsData).map(([category, skills]) => (
              <motion.div
                key={category}
                variants={fadeInUp}
                style={{ marginBottom: "1.5rem" }}
              >
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "#8b5cf6",
                  }}
                >
                  {category}
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        padding: "0.3rem 0.8rem",
                        background: "rgba(139, 92, 246, 0.1)",
                        color: "#a78bfa",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                        cursor: "default",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            className="experience-section"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              padding: "2rem",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <motion.h3
              variants={fadeInUp}
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: "600",
                marginBottom: "2rem",
                color: "#667eea",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>💼</span>
              Work Experience
            </motion.h3>
              <div style={{ marginBottom: "1rem" }}>
                <h4
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    margin: "0 0 0.5rem 0",
                    color: "#667eea",
                  }}
                >
                  {workExperience.position}
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#8b5cf6",
                    }}
                  >
                    {workExperience.company}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "#64748b",
                      fontWeight: "500",
                    }}
                  >
                    {workExperience.duration}
                  </span>
                </div>
                <motion.a
                  href={workExperience.certificateLink}
                    target="_blank"
                  style={{
                    fontSize: "0.85rem",
                    color: "#667eea",
                    textDecoration: "underline",
                    fontWeight: "500",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  Certificate Link
                </motion.a>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <h5
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "0.8rem",
                    color: "#8b5cf6",
                  }}
                >
                  Key Achievements:
                </h5>
                <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                  {workExperience.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      style={{
                        marginBottom: "0.5rem",
                        lineHeight: "1.5",
                        fontSize: "0.95rem",
                        opacity: 0.9,
                      }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h5
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "0.8rem",
                    color: "#8b5cf6",
                  }}
                >
                  Tech Stack:
                </h5>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {workExperience.techStack.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        padding: "0.4rem 0.8rem",
                        background: "rgba(102, 126, 234, 0.15)",
                        color: "#667eea",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        border: "1px solid rgba(102, 126, 234, 0.3)",
                        cursor: "default",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .about {
            padding: 3rem 1rem !important;
          }
          
          .about-header {
            margin-bottom: 3rem !important;
          }
          
          .skills-section,
          .experience-section {
            padding: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .about {
            padding: 2rem 0.5rem !important;
          }
          
          .skills-section,
          .experience-section {
            padding: 1rem !important;
            margin: 0 0.5rem;
          }
        }
      `}</style>
    </motion.section>
  );
};