'use client'
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion"
import { useRef } from "react"
import { containerVariants, fadeBottomSlide, fadeLeftSlide, fadeTopSlide } from "@/utils/constant";
const Channel = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })
    return (

        <motion.section className="py-24 px-6 md:px-10 lg:px-20 bg-gray-50"
                variants={containerVariants}
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "exit"}>
                <div className="max-w-5xl mx-auto text-center">


                    <motion.h5
                        variants={fadeBottomSlide} className="font-poppins-bold text-(--primary-color) uppercase tracking-[3.5px] text-sm mb-3">
                        Programming Channel
                    </motion.h5>

                    <motion.h2
                        variants={fadeTopSlide} className="font-poppins-bold text-3xl md:text-4xl text-gray-900 mb-6">
                        Sharing Knowledge Through Code
                    </motion.h2>

                    <motion.p
                        variants={fadeLeftSlide} className="text-gray-600 text-[17px] leading-7 max-w-3xl mx-auto mb-10 font-lora-regular">
                        I run a programming-focused channel where I share practical tutorials,
                        real-world development tips, and clear explanations of modern web
                        technologies. My goal is to help developers build real projects with
                        confidence and improve their skills through hands-on learning.
                    </motion.p>


                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {[
                            "Web Development",
                            "Practical Tutorials",
                            "Clean Code",
                            "Real Projects",
                            "Frontend Technologies",
                        ].map((item) => (
                            <motion.span
                                variants={fadeBottomSlide}
                                key={item}
                                className="px-4 py-2 border border-gray-800 text-gray-800 text-sm font-poppins-bold tracking-wide rounded-full hover:bg-gray-800 hover:text-white transition"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                    <motion.div variants={fadeTopSlide}>
                        <Link
                            href="https://t.me/C0de1tN0W"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-8 h-14 border-2 border-gray-800 font-poppins-bold uppercase tracking-[2.5px] text-sm hover:bg-gray-800 hover:text-white transition"
                        >
                            Visit the Channel
                            <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
    );
};

export default Channel;