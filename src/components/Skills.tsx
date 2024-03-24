import { COMPONENTBACKGROUND, SKILLBACKGROUND } from "../data/Classes";
import { LANGUAGES, FRAMEWORKS, DATABASES, TOOLS, LIPRARYS } from "../data/SkillsList";
import { motion } from "framer-motion"

export default function Skills() {
    return (
        <div className={`flexCenter z-10 relative pb-16 ${COMPONENTBACKGROUND}`} >
            <div className="container">
                <div className="w-full my-12 flexCenter flex-col  ">
                    <h1 className="font-extrabold text-3xl mb-2 text-stone-700 ">Tools used</h1>
                    <p className='w-full text-center text-stone-600 text-md font-bold tracking-wider max-sm:tracking-normal'>"A person's value is based on what he does well"</p>
                </div>
                <div className="flex flexCenter flex-col">
                    <h1 className="w-full text-center font-bold mb-1 text-2xl  text-stone-600">languages</h1>
                    <hr  className="w-52 border-stone-300 mb-8"/>
                    <div className="flexCenter flex-wrap gap-y-3 gap-x-5  2xl:px-72 xl:px-28 md:px-4  ">
                        {LANGUAGES.map((lang) => (
                            <motion.div
                                whileInView={{
                                    transition: { duration: 1, ease: 'easeInOut' },
                                    rotateY: 360
                                }}
                                key={lang.titel} className={`flexCenter shadow-2xl ${SKILLBACKGROUND} flex-col relative  rounded-full border w-[165px] h-[165px] max-md:h-36 max-md:w-36`}>
                                <img src={lang.icon} height={70} width={70} className=" max-md:h-14 max-md:w-14" alt="lang" />
                                <p className="capitalize -mb-2 text-xl font-bold text-stone-900 max-sm:text-lg ">{lang.titel}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flexCenter flex-col">
                    <h1 className="w-full text-center font-bold mb-1 mt-7 text-2xl  text-stone-600">frameworks</h1>
                    <hr  className="w-52 border-stone-300 mb-8"/>
                    <div className="flexCenter flex-wrap gap-y-3 gap-x-5 2xl:px-72 xl:px-28 md:px-4 ">
                        {FRAMEWORKS.map((framework) => (
                            <motion.div
                                whileInView={{
                                    transition: { duration: 1, ease: 'easeInOut' },
                                    rotateY: 360
                                }}
                                key={framework.titel} className={`flexCenter shadow-2xl ${SKILLBACKGROUND} flex-col relative  rounded-full border w-[165px] h-[165px] max-md:h-36 max-md:w-36`}>
                                <img src={framework.icon} className=" max-md:h-14 max-md:w-14" height={70} width={70} alt="framework" />
                                <p className="capitalize -mb-2 text-xl font-bold text-stone-900 max-sm:text-lg ">{framework.titel}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flexCenter flex-col">
                    <h1 className="w-full text-center font-bold mb-1 mt-7 text-2xl  text-stone-600">libraries</h1>
                    <hr  className="w-52 border-stone-300 mb-8"/>
                    <div className="flexCenter flex-wrap gap-y-3 gap-x-5 2xl:px-72 xl:px-28 md:px-4 ">
                        {LIPRARYS.map((lip) => (
                            <motion.div
                                whileInView={{
                                    transition: { duration: 1, ease: 'easeInOut' },
                                    rotateY: 360
                                }}
                                key={lip.titel} className={`flexCenter shadow-2xl ${SKILLBACKGROUND} flex-col relative  rounded-full border w-[165px] h-[165px] max-md:h-36 max-md:w-36`}>

                                <img src={lip.icon} className=" object-cover max-md:h-14 max-md:w-14" height={70} width={74} alt="lip" />

                                <p className="capitalize -mb-2 text-xl font-bold text-stone-900 max-sm:text-lg ">{lip.titel}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flexCenter flex-col">
                    <h1 className="w-full text-center font-bold mb-1 mt-7 text-2xl  text-stone-600">databases</h1>
                    <hr  className="w-52 border-stone-300 mb-8"/>
                    <div className="flexCenter flex-wrap gap-y-3 gap-x-5 2xl:px-72 xl:px-28 md:px-4 ">
                        {DATABASES.map((database) => (
                            <motion.div
                                whileInView={{
                                    transition: { duration: 1, ease: 'easeInOut' },
                                    rotateY: 360
                                }}
                                key={database.titel} className={`flexCenter shadow-2xl ${SKILLBACKGROUND} flex-col relative  rounded-full border w-[165px] h-[165px] max-md:h-36 max-md:w-36`}>
                                <img src={database.icon} className=" max-md:h-14 max-md:w-14" height={70} width={70} alt="database" />
                                <p className="capitalize -mb-2 text-xl font-bold text-stone-900 max-sm:text-lg ">{database.titel}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flexCenter flex-col">
                    <h1 className="w-full text-center font-bold mb-1 mt-7 text-2xl  text-stone-600">tools</h1>
                    <hr  className="w-52 border-stone-300 mb-8"/>
                    <div className="flexCenter flex-wrap gap-y-3 gap-x-5 2xl:px-72 xl:px-28 md:px-4 ">
                        {TOOLS.map((tool) => (
                            <motion.div
                                whileInView={{
                                    transition: { duration: 1, ease: 'easeInOut' },
                                    rotateY: 360
                                }}
                                key={tool.titel} className={`flexCenter shadow-2xl ${SKILLBACKGROUND} flex-col relative  rounded-full border w-[165px] h-[165px] max-md:h-36 max-md:w-36`}>
                                <img src={tool.icon} className=" max-md:h-14 max-md:w-14" height={70} width={70} alt="tool" />
                                <p className="capitalize -mb-2 text-xl font-bold text-stone-900 max-sm:text-lg ">{tool.titel}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
