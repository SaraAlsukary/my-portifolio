'use client'
import Image from "next/image";
import Button from "../../components/Button";
import { useState } from "react";
import { myProjects } from "@/data/data";
import Link from "next/link";


const Portifolio = () => {
    const [filter, setFilter] = useState('All');
    const filterProjects = !(filter === 'All') ? myProjects.filter(pro => pro.category.includes(filter)) : myProjects

    return (
        <div id="portifolio" className="py-20 px-6 md:px-10 lg:px-20">
            <h5 className="font-poppins-bold text-(--primary-color) text-center uppercase text-[16px] tracking-[3.5]">
                Portfolio
            </h5>

            <div className="flex gap-2 flex-wrap justify-center my-6">
                {["All", "Fullstack", "React", "Next", "Laravel", "WordPress"].map(
                    (item) => (
                        <Button
                            key={item}
                            click={() => setFilter(item)}

                            className={`${filter === item ? "bg-gray-800 text-white" : ""} border-gray-800 border-2 text-gray-800 font-poppins-bold tracking-wide hover:bg-gray-800 hover:text-white transition`}
                        >
                            {item}
                        </Button>
                    )
                )}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                {filterProjects.length ? filterProjects.map((proj) =>
                    <Link
                        href={`portifolio/${proj.id}`}
                        key={proj.id}
                        className="group relative w-120 h-70 overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={proj.img}
                            alt={`project-${proj.id}`}
                            fill
                            className="object-cover group-hover:scale-110  transition-all duration-500 "
                        />

                        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center
                                        -translate-x-full group-hover:translate-x-0
                                        transition-all duration-500 "
                        >
                            <h1 className="font-poppins-bold uppercase tracking-[3.5] text-white">
                                {proj.title}
                            </h1>
                            <h5 className="font-lora-medium text-sm text-white mt-1">
                                {proj.category}
                            </h5>
                        </div>
                    </Link>
                ) : <div className="font-poppins-regular text-[20px] my-10">There is no projects!</div>}

            </div>

        </div>
    );
};

export default Portifolio;