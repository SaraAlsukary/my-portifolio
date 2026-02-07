'use client'

import { motion } from "framer-motion";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 z-30 w-full"
    >
      <div
        className="
          relative
          bg-black
          h-16
          px-4
          flex
          items-center
        "
      >
        <BurgerMenu />
      </div>
    </motion.header>
  );
};

export default Header;
export default Header;
