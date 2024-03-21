import { MdDownload } from 'react-icons/md'
import { motion } from "framer-motion"

export default function Landing() {
    return (
        <div className='h-screen animate-lanidingAnim bg-gradient-to-r from-purple-500 to-pink-500 w-full  flexCenter '>
            {/* <img src="./back-landing.jpg" className=' absolute -z-10 h-screen object-cover w-full' alt="" /> */}
            
            <div className='flex flex-col md:flex-row -mb-20 md:gap-x-16 max-md:gap-y-4 '>
                <motion.div
                    initial={{ opacity: 0, left: '-80%' }}
                    transition={{ duration: 1.5 }}
                    animate={{
                        left: '0%',
                        opacity: 1,
                    }}

                    className='flex flex-col relative items-center justify-center max-md:order-1'>
                    <p className=' font-extrabold text-lg text-gray-600'>Hello,i'm</p>
                    <h1 className=' font-extrabold text-4xl text-gray-800 tracking-normal mb-2'>Mohammed Sameh</h1>
                    <h2 className='font-bold text-2xl  mb-2 text-gray-600 '>Full Stack Develbore</h2>
                    <div className='flex gap-2'>
                        <button className=' group'>
                            <div className=' relative border border-black overflow-hidden rounded-full
                                flexStart  after:absolute after:top-0 after:right-0 after:h-full after:w-0
                                after:bg-black after:transition-all after:duration-500
                                    group-hover:after:w-full hover:after:bg-purple-500 '>
                                <a href="./background-landing.jpg" download="x.jpg" className=' px-3 py-2 z-10 transition-all duration-500 font-bold text-2xl text-slate-600 group-hover:text-white '>Download Cv</a>
                                <span className='flexCenter h-12 w-12 bg-black rounded-full  ring ring-black'><MdDownload color='white'></MdDownload></span>
                            </div>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, left: '80%' }}
                    transition={{ duration: 1.5 }}
                    animate={{
                        left: '0%',
                        opacity: 1,
                    }}
                    className='flexCenter z-10 spin-slow relative'>
                    <img src="./myP.png" className=' border-4 border-slate-600/40 animate-profAnim  ' alt="myp" height={260} width={260} />
                </motion.div>
            </div>
        </div>
    )
}
