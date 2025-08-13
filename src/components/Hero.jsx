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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        minHeight: "100vh",
        padding: "2rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div 
        className="hero-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left Content */}
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          style={{
            flex: "1",
            minWidth: "300px",
            maxWidth: "600px",
          }}
        >
          <motion.div 
            className="hero-badge"
            style={{
              marginBottom: "1rem",
            }}
          >
            <span> 👋 Hello, I&#39;m </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              margin: "0 0 1rem 0",
              lineHeight: "1.2",
            }}
          >
            Bansh Kr. Vatsa
          </motion.h1>
          <motion.h2 
            className="hero-subtitle" 
            variants={fadeInUp}
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              margin: "0 0 1.5rem 0",
              opacity: 0.8,
            }}
          >
            Aspiring Software Engineer
          </motion.h2>
          <motion.p 
            className="hero-description" 
            variants={fadeInUp}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              lineHeight: "1.6",
              margin: "0 0 2rem 0",
              opacity: 0.9,
            }}
          >
            I am an aspiring software engineer passionate about building
            innovative digital solutions that blend clean, modern design with
            robust functionality. I specialize in developing interactive web
            applications and engaging user interfaces using contemporary
            technologies.
          </motion.p>

          <motion.div 
  className="cta-buttons" 
  variants={staggerContainer}
  style={{
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
    flexWrap: "wrap",
  }}
>
  <motion.a
    href="#projects"
    className="cta-primary"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{
      padding: "0.8rem 1.5rem",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "600",
      minWidth: "140px",
      textAlign: "center",
      fontSize: "clamp(0.9rem, 2vw, 1rem)",
    }}
  >
    View My Work
  </motion.a>

  <motion.a
    href="#contacts"
    className="cta-secondary"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{
      padding: "0.8rem 1.5rem",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "600",
      minWidth: "140px",
      textAlign: "center",
      fontSize: "clamp(0.9rem, 2vw, 1rem)",
    }}
  >
    Contact Me
  </motion.a>

  <motion.a
    href="https://drive.google.com/file/d/1hmDNAUTt1p1vkbYMj8nLo_odAZ2dUejb/view?usp=sharing"
    download="BanshVatsa.pdf" 
    className="cta-primary"
    target="_blank"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{
      padding: "0.8rem 1.5rem",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "600",
      minWidth: "140px",
      textAlign: "center",
      fontSize: "clamp(0.9rem, 2vw, 1rem)",
    }}
  >
    Download Resume
  </motion.a>
</motion.div>

          <motion.div 
            className="social-links" 
            variants={staggerContainer}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <motion.a 
              href="https://github.com/banshvatsa" 
              target="_blank"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                textDecoration: "none",
              }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/banshvatsa/"
              target="_blank"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                textDecoration: "none",
              }}
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Responsive Image */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "250px",
            maxWidth: "400px",
            width: "100%",
            paddingBottom: "4rem",
          }}
        >
          <img
            src="/myPicture.png"
            alt="Bansh Kr Vatsa"
            style={{
              width: "clamp(250px, 30vw, 300px)",
              height: "clamp(300px, 35vw, 380px)",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              marginBottom: "2rem",
              display: "block",
            }}
          />

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              display: "inline-block",
              padding: "1rem 1rem",
              background: "rgba(30, 41, 59, 0.8)",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              maxWidth: "300px",
              width: "100%",
              marginRight: "80px",
            }}
          >
            <div 
              className="card-content" 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "0.5rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <span 
                className="card-icon" 
                style={{ 
                  fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                }}
              > 
                💻 
              </span>
              <span 
                className="card-text" 
                style={{ 
                  color: "#fff", 
                  fontWeight: "500",
                  fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                  textAlign: "center",
                }}
              >
                Ex-Software Engineer Intern!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional CSS for better mobile responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column !important;
            text-align: center;
            gap: 2rem !important;
          }
          
          .hero-content {
            order: 2;
          }
          
          .hero-image-container {
            order: 1;
            margin-bottom: 1rem;
          }
          
          .cta-buttons {
            justify-content: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .hero {
            padding: 1rem 0.5rem !important;
          }
          
          .hero-container {
            gap: 1.5rem !important;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-buttons a {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
    </motion.section>
  );
};