"use client"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import SocialMedia from "./SocialMedia"
import { containerVariants, fadeBottomSlide, fadeLeftSlide, fadeRightSlide, fadeTopSlide } from "@/utils/constant"
import { useRef } from "react"

const Hero = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.4 })
    return (

        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "exit"}
            id="home" className="relative min-h-screen
                     flex items-center ">
            <motion.div
                initial={{ filter: "blur(10px)", opacity: 0.7 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
            >
                <Image
                    src="/imgs/index.jpg"
                    alt="hero"
                    fill
                    className="object-cover back lg:object-fill"
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/60" />
            <div
                className="relative z-10 px-6 md:px-20 text-white text-center w-full"
            >
                <motion.h5
                    variants={fadeLeftSlide}
                    className="font-poppins-bold text-(--primary-color) uppercase tracking-wider"
                >
                    Hello, World.
                </motion.h5>
                <motion.h1
                    variants={fadeRightSlide}
                    className="text-4xl md:text-[84px] font-poppins-bold"
                >
                    I'm Sara Al-Sukary.
                </motion.h1>
                <motion.p
                    variants={fadeBottomSlide}

                >
                    <span className="font-lora-regular text-[1.1rem] uppercase before:content-['|'] before:px-3.5">
                        Web Developer
                    </span>
                    <span className="font-lora-regular text-[1.1rem] before:content-['|'] after:content-['|'] before:px-3.5 after:px-3.5">
                        Skilled in React, Next.js, Laravel & WordPress
                    </span>
                </motion.p>
                <motion.div
                    variants={fadeTopSlide}

                >
                    <Link
                        href="#about"
                        className="mt-4 border-2 border-gray-600 hover:border-(--primary-color)
                            transition-all duration-500 px-6 h-15! w-60 mx-auto flex items-center justify-center"
                    >
                        <span className="uppercase text-[14px] font-poppins-bold tracking-[2.5px]">
                            More About Me
                        </span>
                        <ChevronDown size={20} />
                    </Link>
                </motion.div>
                <motion.div
                    variants={fadeTopSlide}
                >
                    <SocialMedia className="absolute -bottom-30 left-[50%] -translate-x-[50%]" />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Hero