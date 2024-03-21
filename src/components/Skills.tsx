import { COMPONENTBACKGROUND, SKILLBACKGROUND } from "../data/Classes";
import { LANGUAGES, FRAMEWORKS, DATABASES, TOOLS, LIPRARYS } from "../data/SkillsList";
import { motion } from "framer-motion"

export default function Skills() {
    return (
        <div className={`flexCenter z-10 relative pb-16 ${COMPONENTBACKGROUND}`} >
            <div className="container">
                <div className="w-full my-10 flexCenter flex-col  ">
                    <h1 className="font-extrabold text-3xl mb-2 ">My Skills</h1>
                    <hr className="border-gray-500 w-1/2" />
                </div>
                <div className="flex flex-col">
                    <h1 className="w-full text-center font-bold my-6 text-2xl underline">LANGUAGES</h1>
                    <div className="flexCenter flex-wrap gap-y-3 gap-x-5  2xl:px-72 xl:px-28 md:px-4  ">
                        {LANGUAGES.map((lang) => (
                            <motion.div
                                whileInView={{
                                    transition: { duration: 1, ease: 'easeInOut' },
                                    rotateY: 360
                                }}
                                key={lang.titel} className={`flexCenter shadow-2xl ${SKILLBACKGROUND} flex-col relative  rounded-full border w-[170px] h-40 max-sm:h-36 max-sm:w-36`}>
                                <img src={lang.icon} height={70} width={70} className=" max-sm:h-14 max-sm:w-14" alt="lang" />
                                <p className="capitalize -mb-2 text-xl font-bold text-stone-900 max-sm:text-lg ">{lang.titel}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="w-full text-center font-bold my-6 text-2xl underline">Frameworks</h1>
                    <div className="flexCenter flex-wrap gap-y-3 gap-x-5 2xl:px-72 xl:px-28 md:px-4 ">
                        {FRAMEWORKS.map((framework) => (
                            <motion.div
                                whileInView={{
                                    transition: { duration: 1, ease: 'easeInOut' },
                                    rotateY: 360
                                }}
                                key={framework.titel} className={`flexCenter shadow-2xl ${SKILLBACKGROUND} flex-col relative  rounded-full border w-[170px] h-40 max-sm:h-36 max-sm:w-36`}>
                                <img src={framework.icon} className=" max-sm:h-14 max-sm:w-14" height={70} width={70} alt="framework" />
                                <p className="capitalize -mb-2 text-xl font-bold text-stone-900 max-sm:text-lg ">{framework.titel}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="w-full text-center font-bold my-6 text-2xl underline">LIPRARYS</h1>
                    <div className="flexCenter flex-wrap gap-y-3 gap-x-5 2xl:px-72 xl:px-28 md:px-4 ">
                        {LIPRARYS.map((lip) => (
                            <motion.div
                                whileInView={{
                                    transition: { duration: 1, ease: 'easeInOut' },
                                    rotateY: 360
                                }}
                                key={lip.titel} className={`flexCenter shadow-2xl ${SKILLBACKGROUND} flex-col relative  rounded-full border w-[170px] h-40 max-sm:h-36 max-sm:w-36`}>

                                <img src={lip.icon} className=" object-cover max-sm:h-12 max-sm:w-14" height={70} width={74} alt="lip" />

                                <p className="capitalize -mb-2 text-xl font-bold text-stone-900 max-sm:text-lg ">{lip.titel}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="w-full text-center font-bold my-6 text-2xl underline">Databases</h1>
                    <div className="flexCenter flex-wrap gap-y-3 gap-x-5 2xl:px-72 xl:px-28 md:px-4 ">
                        {DATABASES.map((database) => (
                            <motion.div
                                whileInView={{
                                    transition: { duration: 1, ease: 'easeInOut' },
                                    rotateY: 360
                                }}
                                key={database.titel} className={`flexCenter shadow-2xl ${SKILLBACKGROUND} flex-col relative  rounded-full border w-[170px] h-40 max-sm:h-36 max-sm:w-36`}>
                                <img src={database.icon} className=" max-sm:h-14 max-sm:w-14" height={70} width={70} alt="database" />
                                <p className="capitalize -mb-2 text-xl font-bold text-stone-900 max-sm:text-lg ">{database.titel}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="w-full text-center font-bold my-6 text-2xl underline">Tools</h1>
                    <div className="flexCenter flex-wrap gap-y-3 gap-x-5 2xl:px-72 xl:px-28 md:px-4 ">
                        {TOOLS.map((tool) => (
                            <motion.div
                                whileInView={{
                                    transition: { duration: 1, ease: 'easeInOut' },
                                    rotateY: 360
                                }}
                                key={tool.titel} className={`flexCenter shadow-2xl ${SKILLBACKGROUND} flex-col relative  rounded-full border w-[170px] h-40 max-sm:h-36 max-sm:w-36`}>
                                <img src={tool.icon} className=" max-sm:h-14 max-sm:w-14" height={70} width={70} alt="tool" />
                                <p className="capitalize -mb-2 text-xl font-bold text-stone-900 max-sm:text-lg ">{tool.titel}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
