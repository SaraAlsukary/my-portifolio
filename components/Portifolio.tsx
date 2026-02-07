'use client'
import { AnimatePresence, motion, useInView } from "framer-motion"
import Image from "next/image";
import Button from "./Button";
import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { myProjects } from "@/data/data";
import { containerVariants, fadeBottomSlide, fadeLeftSlide, fadeRightSlide, fadeTopSlide } from "@/utils/constant";

const Portifolio = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })
    const [filter, setFilter] = useState('All');
    const filterProjects = !(filter === 'All') ? myProjects.filter(pro => pro.category.includes(filter)) : myProjects
    const projectsToShow = filterProjects.slice(0, 5)
    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "exit"}
            id="portifolio" className="py-20 px-6 md:px-10 lg:px-20 ">
            <motion.h5
                variants={fadeBottomSlide}
                className="font-poppins-bold text-(--primary-color) text-center uppercase text-[16px] tracking-[3.5]">
                Portfolio
            </motion.h5>

            <div className="flex gap-2 flex-wrap justify-center my-6">
                {["All", "Fullstack", "React", "Next", "Laravel", "WordPress"].map(
                    (item) => (
                        <motion.div
                            key={item}
                            variants={fadeBottomSlide}
                        >
                            <Button
                                click={() => setFilter(item)}

                                className={`${filter === item ? "bg-gray-800 text-white" : ""} border-gray-800 border-2 text-gray-800 font-poppins-bold tracking-wide hover:bg-gray-800 hover:text-white transition`}
                            >
                                {item}
                            </Button>
                        </motion.div>

                    )
                )}
            </div>

            <div className="flex flex-wrap gap-y-3 md:gap-4 justify-center items-center">
                <AnimatePresence>
                    {projectsToShow.length ? projectsToShow.map((proj, idx) => (
                        <motion.div
                            key={proj.id}
                            variants={idx % 2 === 0 ? fadeLeftSlide : fadeRightSlide}
                            className="relative w-80 md:w-120 h-70"
                            initial="hidden"
                            animate={isInView ? "visible" : "exit"}
                            exit="hidden"
                            layout
                        >
                            <Link
                                href={`portifolio/${proj.id}`}
                                className="group absolute inset-0 overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={proj.img}
                                    alt={`project-${proj.id}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-500"
                                    sizes="(max-width: 768px) 320px, 480px"
                                />

                                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center
                    -translate-x-full group-hover:translate-x-0
                    transition-all duration-500">
                                    <h1 className="font-poppins-bold uppercase tracking-[3.5] text-white">
                                        {proj.title}
                                    </h1>
                                    <h5 className="font-lora-medium text-sm text-white mt-1">
                                        {proj.category}
                                    </h5>
                                </div>
                            </Link>
                        </motion.div>
                    )) : (
                        <motion.div
                            variants={fadeRightSlide}
                            initial="hidden"
                            animate={isInView ? "visible" : "exit"}
                            exit="hidden"
                            layout className="font-poppins-regular text-[20px] my-10">There is no projects!</motion.div>
                    )}
                </AnimatePresence>
            </div>

            {filterProjects.length ? <motion.div
                variants={fadeTopSlide}>
                <Link href={'/portifolio'} className=" group mt-4 hover:border-(--primary-color) border-gray-600 transition-all duration-500 border-2 px-6 py-0 h-15! w-60 mx-auto flex items-center justify-center ">
                    <span className="inline-block uppercase text-[14px] font-poppins-bold mx-2 tracking-[2.5px] leading-3.5  group-hover:text-(--primary-color) transition-all duration-500">More Projects</span>
                    <ChevronDown size={20} className="text-gray-600 group-hover:text-(--primary-color) transition-all duration-500" />
                </Link>
            </motion.div> : ""}
        </motion.section>
    );
};

export default Portifolio;