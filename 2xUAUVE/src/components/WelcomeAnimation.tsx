import React, { useEffect } from 'react'; // Import useEffect
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const WelcomeAnimation: React.FC = () => {
  const appName = "2xUAUVE";
  const letters = Array.from(appName);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigate]); // Dependency array includes navigate

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const pulseVariant = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: letters.length * 0.1 + 0.5, // Start after letters animation
      },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#111418', overflow: 'hidden' }}>
      <motion.div
        style={{ display: 'flex' }} // Use flex for letters
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{ color: 'white', fontSize: 'clamp(2rem, 10vw, 5rem)', fontWeight: 'bold', position: 'relative' }} // Responsive font size
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        style={{ display: 'flex', position: 'absolute' }}
        initial="hidden"
        animate={["visible", "pulse"]}
        variants={{
          ...containerVariants,
          hidden: { opacity: 0},
          visible: {
            opacity: 1,
            transition: { delay: letters.length * 0.1 + 0.2 }
          },
          pulse: pulseVariant.pulse
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            // variants={letterVariants} // Pulse variant controls this entirely after initial show up
            style={{ color: 'white', fontSize: 'clamp(2rem, 10vw, 5rem)', fontWeight: 'bold' }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default WelcomeAnimation;
