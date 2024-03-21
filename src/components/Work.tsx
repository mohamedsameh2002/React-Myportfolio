import { useState } from "react";
import { PROJECTS } from "../data/Projects";
import { IoMdCheckbox, IoMdClose } from "react-icons/io";
import { COMPONENTBACKGROUND, POPUPBACKGROUND, PROJECTHOVER } from "../data/Classes";

export default function Work() {
    const [popup, setPopup] = useState('')
    const [allwowPlay, setAllwowPlay] = useState(true)
    const [dir, setDir] = useState('ltr')

    const openPopup = (project) => {
        setPopup(project);
        setAllwowPlay(true)
        document.body.classList.add('overflow-hidden');
    };
    const closePopup = () => {
        setPopup('');
        setAllwowPlay(false)
        document.body.classList.remove('overflow-hidden');
    };

    return (
        <div className={`flexCenter relative ${COMPONENTBACKGROUND} pb-16`}>
            <div className="container">
                <div className="w-full my-16 flexCenter flex-col  ">
                    <h1 className="font-extrabold text-3xl mb-2 ">My Last Work</h1>
                    <hr className="border-gray-500 w-1/2" />
                </div>
                <div className=" flexCenter flex-wrap gap-y-3 gap-x-4 h-fit ">
                    {PROJECTS.map((proj) => (
                        <div key={proj.titel} className="w-[490px] h-64  max-lg:w-[510px] overflow-hidden rounded-lg  flex-col  relative flexCenter group">
                            <div onClick={closePopup} className={`${popup === proj.titel ? 'opacity-100' : ' opacity-0 pointer-events-none'} fixed inset-0 z-50  grid overflow-y-scroll custom-scrollbar h-screen w-screen place-items-center bg-black bg-opacity-60  backdrop-blur-sm transition-opacity duration-300`}>
                                <div onClick={(e) => e.stopPropagation()} className={`${popup === proj.titel ? 'opacity-100 translate-y-0 scale-100  ' : '  opacity-0  -translate-y-28 scale-90 pointer-events-none'} transition-all duration-700 relative m-4 w-[70%] max-xl:w-[95%] rounded-lg px-8 py-4 ${POPUPBACKGROUND} shadow-2xl`}>
                                    <div className=' flex justify-start gap-6 flex-col '>
                                        <div className="flexBetween w-full mb-8">
                                            <div className="flex flex-col w-1/2 gap-3">
                                                <h1 className=" font-bold text-stone-50 text-3xl">Project details</h1>
                                                <span className="w-full h-[1px] bg-stone-400"></span>
                                            </div>
                                            <IoMdClose onClick={closePopup} className="text-4xl cursor-pointer text-stone-50 hover:text-stone-200 duration-150" />
                                        </div>
                                        <iframe
                                            className='w-full h-[70vh] my-8 rounded-lg'
                                            src={allwowPlay ? proj.youtubeLink : ''}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>

                                        <div className="flex flex-wrap justify-around w-full ">
                                            <h1 className=" font-bold text-stone-50 text-2xl w-[160px]">Project URL</h1>
                                            {proj.link == '' ? <p className="text-lg font-bold text-stone-300 w-72  ">It has not been uploaded yet</p> : <a className="truncate text-lg font-bold text-amber-200  w-72" href={proj.link}>{proj.link}</a>}
                                        </div>

                                        {proj.fronEndLink !== '' && <div className="flex justify-around w-full ">
                                            <h1 className=" font-bold text-stone-50 text-2xl w-[160px]">Frontend URL</h1>
                                            <a target="_blank" className="truncate text-lg font-bold text-amber-200 hover:text-amber-50 duration-150 w-72" href={proj.fronEndLink}>{proj.fronEndLink}</a>
                                        </div>}
                                        {
                                            proj.backEndLink !== '' && <div className="flex justify-around w-full ">
                                                <h1 className=" font-bold text-stone-50 text-2xl w-[160px]">Backend URL</h1>
                                                <a target="_blank" className="truncate text-lg font-bold text-amber-200 hover:text-amber-50 duration-150 w-72" href={proj.backEndLink}>{proj.backEndLink}</a>
                                            </div>
                                        }
                                        <div dir={dir} className="flex w-full flex-col gap-3">
                                            <div className="flexCenter gap-3 flex-col">
                                                <h1 className=" font-bold  text-stone-50 text-3xl ">Project URL</h1>
                                                <span className="w-1/2 h-[1px] bg-stone-400"></span>
                                            </div>
                                            <div>
                                                <button type="button" className="font-bold px-6 py-2 duration-200 hover:bg-black  text-2xl bg-stone-500  rounded-md  text-stone-200" onClick={() => setDir(dir === 'ltr' ? 'rtl' : 'ltr')}>{dir === 'ltr' ? 'عربي' : 'English'}</button>
                                            </div>
                                            {
                                                dir === 'ltr' ? (
                                                    <>
                                                        {
                                                            proj.info.en.map((el) => (
                                                                <div className="flex  my-4 justify-start items-center gap-2">
                                                                    <IoMdCheckbox className="text-xl shrink-0 text-amber-50" />
                                                                    <p className="font-bold text-wrap capitapze text-2xl text-stone-200">{el}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </>
                                                ) : (
                                                    <>
                                                        {
                                                            proj.info.ar.map((el) => (
                                                                <div className="flex  my-4 justify-start items-center gap-2">
                                                                    <IoMdCheckbox className="text-xl shrink-0 text-amber-50" />
                                                                    <p className="font-bold text-wrap capitapze text-2xl text-stone-200">{el}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`w-full h-full ${PROJECTHOVER} absolute opacity-0 group-hover:opacity-80 duration-500 transition-all`}></div>
                            <div className="transition-all   duration-300 absolute left-6 -top-12 group-hover:top-7 ">
                                <p className=" py-2 px-4 rounded-full font-extrabold text-xl  text-white duration-200 transition-all capitalize">{proj.titel}</p>
                            </div>
                            <img src={proj.imgae} alt="proj" className="object-cover w-full h-full" />
                            <div className="transition-all   duration-300 absolute -bottom-12 group-hover:bottom-14 ">
                                <button onClick={() => openPopup(proj.titel)} className=" py-2 px-4 rounded-full font-bold  bg-white text-black hover:bg-gray-800 hover:text-white duration-200 transition-all">Details?</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
