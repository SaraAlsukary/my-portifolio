'use client'
import ContactForm from "./ContactForm"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { containerVariants, fadeBottomSlide, fadeLeftSlide, fadeRightSlide } from "@/utils/constant"
const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })
    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "exit"}
            id="contact" className="py-10 px-6 md:px-10 lg:px-20 bg-(--footer-color)  ">
            <motion.h5
                variants={fadeBottomSlide}
                className="font-poppins-bold text-(--primary-color) text-center uppercase text-[16px] tracking-[3.5]">
                Contact
            </motion.h5>
            <motion.h1
                variants={fadeLeftSlide}
                className="font-bold text-white font-poppins-medium text-center mt-0  text-3xl lg:text-4xl">I'd Love To Hear From You.</motion.h1>

            <motion.p
                variants={fadeRightSlide}
                className="text-gray-400 mx-auto my-6 w-80 md:w-125 text-[17px] leading-7 font-lora-regular text-center">
                Have an idea, a project, or a question? Drop me a message and I’ll get back to you as soon as possible.
            </motion.p>
            <motion.div
                variants={fadeBottomSlide}
            >
                <ContactForm />
            </motion.div>
        </motion.section>
    )
}

export default Contact