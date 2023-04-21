import { motion } from "framer-motion";

function FramerMotion({ slogan }) {
  const words = slogan.split("");

  // Variants for container of words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex justify-end"
      style={{ overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          // className="fontCoiny mb-3 md:my-3 text-xl md:text-4xl lg:text-5xl"
          className="md:my-4 text-lg md:text-3xl lg:text-4xl"
          variants={child}
          style={{ marginRight: "4px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
export default FramerMotion;
