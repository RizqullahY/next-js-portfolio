import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculated
const reverseIndex = (index) => {
  const totalSteps = 8; // number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>

      {/*render 6 motion divs, each representing stp of the stairs.
  Each div will have the same animation defined by th stairAnimation object.
  The delay for each div is calculated sinamically based on it's reserved index,
  creating a staggered effect with decreasing delay for each sub subsequent.
  */}
  
      {[...Array(8)].map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={stairAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
              }}
              className="h-full w-full bg-white relative"
            />
          );
        })},
    </>
  );
};

export default Stairs;
