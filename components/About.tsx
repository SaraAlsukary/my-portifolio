'use client'
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import SkillsProgress from "./SkillsProgress"
import Button from "./Button"
import Profile from "./Profile"
import { containerVariants, fadeBottomSlide, fadeLeftSlide, fadeRightSlide, fadeTopSlide } from "@/utils/constant"
import { useRef } from "react"

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })

    return (
        <motion.section
            id="about"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "exit"}
            className="py-20 px-6 sm:px-10 md:px-20 lg:px-32 "
        >
            <motion.h5
                variants={fadeBottomSlide}
                className="font-poppins-bold text-(--primary-color) text-center uppercase text-[16px] tracking-[3.5px] mb-2"
            >
                About
            </motion.h5>

            <motion.h1
                variants={fadeTopSlide}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10"
            >
                Let me introduce myself.
            </motion.h1>

            <motion.div
                variants={fadeLeftSlide}
                className="flex flex-col md:flex-row items-center md:items-start gap-7 justify-center"
            >
                <Image src={'/imgs/myself.jpg'} alt="Sara" width={120} height={120} className="rounded-full" />
                <p className="text-gray-500 text-[16px] sm:text-[17px] leading-7 font-lora-regular text-center md:text-left max-w-full md:max-w-md">
                    Web Developer specializing in modern, responsive web interfaces.
                    Passionate about clean code, usability, and continuous learning.
                    Focused on creating practical and efficient web solutions.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-10 justify-center mt-10">
                <motion.div variants={fadeRightSlide}><Profile /></motion.div>
                <motion.div variants={fadeLeftSlide}><SkillsProgress /></motion.div>
            </div>

            <motion.div variants={fadeTopSlide} className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mt-16">
                <Button className="border-gray-800 border-2 w-full md:w-60">
                    <Link href='#contact'>Hire Me</Link>
                </Button>
               <Button className="bg-gray-800 border-gray-800 border-2 text-white w-full md:w-60">
                    <Link href='/Sara-Alsukary-CV.pdf' >Download CV</Link>
                </Button>
            </motion.div>
        </motion.section>
    )
}

export default About
