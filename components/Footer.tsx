'use client'
import { motion, useInView } from "framer-motion"
import SocialMedia from "./SocialMedia"
import { useRef } from "react"
import { containerVariants, fadeLeftSlide, fadeRightSlide } from "@/utils/constant"

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      className="text-gray-500 bg-(--footer-color) py-10 px-10 md:px-30 flex flex-col-reverse md:flex-row justify-between items-center">
      <motion.div
        variants={fadeRightSlide}>

        <span className="font-poppins-regular    text-sm
                     text-shadow-[0px_0px_6px_rgba(0,0,0,0.2)]  ">&copy; Copyright {new Date().getFullYear()}</span>
        <span className="font-poppins-regular    text-sm
                    text-shadow-[0px_0px_6px_rgba(0,0,0,0.2)] before:content-['|'] 
                    before:text-center before:text-gray-400 before:px-3.5 before:pb-2 
                    after:content-['|']  after:text-center after:text-gray-400 after:px-3.5 after:pb-2 
                    ">Made With 💚 Sara</span>
      </motion.div>
      <motion.div
        variants={fadeLeftSlide}
      >
        <SocialMedia size={20} />

      </motion.div>
    </motion.footer>
  )
}

export default Footer