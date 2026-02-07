'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BurgerMenu from "./BurgerMenu";
import { containerVariants, fadeBottomSlide } from "@/utils/constant";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <motion.header
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="fixed top-0 left-0 z-30 w-full overflow-x-hidden"
    >
      <motion.div
        variants={fadeBottomSlide}
        className="
          relative
          bg-black
          h-16
          w-fit
          px-4
          ml-4
          lg:ml-12
        "
      >
        <BurgerMenu />
      </motion.div>
    </motion.header>
  );
};

export default Header;
