const skills = [
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 80 },
    { name: "Laravel", level: 70 },
    { name: "PHP", level: 75 },
    { name: "WordPress", level: 85 },
];

const SkillsProgress = () => {
    return (

        <div className="w-full md:w-93.75">
            <h5 className="font-poppins-bold text-gray-800 text-center uppercase text-[16px] tracking-[3.5] mb-0">Skills</h5>

            <div className="space-y-8">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-800 font-poppins-bold uppercase">
                            {skill.name}
                        </span>

                        <div className="relative mt-3">
                            <div
                                className="  absolute -top-9
                                                flex flex-col items-center
                                                text-xs font-medium
                                                text-white
                                                "
                                style={{ left: `${skill.level}%`, transform: "translateX(-50%)" }}
                            >
                                <div className="bg-gray-800 px-2 py-1 rounded">
                                    {skill.level}%
                                </div>

                                <div className="
                                            w-0 h-0
                                            border-l-4 border-r-4 border-t-4
                                            border-l-transparent border-r-transparent
                                            border-t-gray-900
                                            " />
                            </div>

                            <div className="w-full bg-gray-200 dark:bg-gray-300  h-2.5 overflow-hidden">
                                <div
                                    className="h-2.5 bg-gray-800  transition-all duration-700"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsProgress;