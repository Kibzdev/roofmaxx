"use client"

// FadeIn.tsx
import { createContext, useContext } from "react";
import { motion, useReducedMotion, Variants, Transition } from "framer-motion";

// Define the type for the FadeIn component props extending motion div props
type FadeInProps = React.ComponentProps<typeof motion.div>;

const FadeInStaggerContext = createContext<boolean>(false);

const viewport = { once: true, margin: "0px 0px -200px" };

const FadeIn: React.FC<FadeInProps> = (props) => {  // Explicitly type props here
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  // Define motion variants
  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  // Define motion transition
  const transition: Transition = { duration: 0.5 };

  return (
    <motion.div
      variants={variants}
      transition={transition}
      {...(isInStaggerGroup ? {} : {
          initial: "hidden",
          whileInView: "visible",
          viewport
      })}
      {...props}
    />
  );
};

export const FadeInStagger: React.FC<FadeInProps & { faster?: boolean }> = ({ faster = false, ...props }) => {  // Correct typing and props spreading
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
};

export default FadeIn;
