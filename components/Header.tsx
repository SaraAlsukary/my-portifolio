'use client'
import { containerVariants, fadeBottomSlide } from "@/utils/constant";
import BurgerMenu from "./BurgerMenu";
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
const Header = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })
    return (
        <motion.header
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "exit"}
            className="fixed z-30 ">
            <motion.div
                variants={fadeBottomSlide}
                className="bg-black w-55 h-16.5 pl-4 absolute top-0 left-8 lg:left-50 md:left-30">
                <BurgerMenu />
            </motion.div>
        </motion.header>
    )
}

export default Header