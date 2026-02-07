import { myProjects } from "@/data/data";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    return myProjects.map(project => ({
        id: project.id.toString(),
    }));
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolveParams = await params;
    const project = myProjects.find(
        pro => pro.id === Number(resolveParams.id)
    );

    if (!project) return <p>Projects not found</p>;

    return (
        <section className="px-6 md:px-30 py-32">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                <div className="relative group">
                    <div className="absolute -inset-2 bg-linear-to-tr from-gray-200 to-transparent rounded-xl blur opacity-70 group-hover:opacity-100 transition" />
                    <Image
                        src={project.img}
                        alt={`project-${project.id}`}
                        width={600}
                        height={400}
                        className="relative rounded-xl shadow-xl object-cover"
                    />
                </div>

                <div>
                    <h1 className="font-poppins-bold text-gray-900 uppercase text-3xl tracking-[3px] mb-4">
                        {project.title}
                    </h1>

                    <div className="mb-6">
                        <h5 className="font-poppins-bold text-gray-700 uppercase text-sm tracking-[3px] mb-3">
                            Tech Stack
                        </h5>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <span
                                    key={tech}
                                    className="px-4 py-1.5 rounded-full border border-gray-800 text-gray-800 text-sm font-poppins-bold tracking-wide hover:bg-gray-800 hover:text-white transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-600 text-[17px] leading-7 font-lora-regular mb-8">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {project.url && <Link
                            href={project.url}
                            target="_blank"
                            className="group flex items-center gap-2 px-7 h-14 border-2 border-gray-800 font-poppins-bold uppercase text-sm tracking-[2.5px] hover:bg-gray-800 hover:text-white transition"
                        >
                            Live Demo
                            <ArrowUpRight size={18} />
                        </Link>}

                        {project.urlGit && (
                            <Link
                                href={project.urlGit}
                                target="_blank"
                                className="flex items-center gap-2 px-7 h-14 bg-gray-800 text-white border-2 border-gray-800 font-poppins-bold uppercase text-sm tracking-[2.5px] hover:bg-gray-900 hover:border-gray-900 transition"
                            >
                                GitHub
                                <Github size={18} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;