// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { IoIosSend } from 'react-icons/io';
import { COMPONENTBACKGROUND } from '../data/Classes';
// ref={form} onSubmit={sendEmail}

export default function Contact() {

    // const form = useRef(null);

    // const sendEmail = (e: {
    //     target(target: any): unknown; preventDefault: () => void;}) => {
    //     e.preventDefault();
    //     emailjs
    //         .sendForm('service_ey4uvwm', 'template_3znh8vi', form.current, {
    //             publicKey: 'bx2x0fclsBbzvrYuH',
    //         })
    //         .then(
    //             () => {
    //                 console.log('SUCCESS!');
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);
    //             },
    //         );
    // };

    return (
        <div className={`flexCenter z-10 relative pb-16 ${COMPONENTBACKGROUND}`}>
            <div className="container">
                <div className="w-full my-16 flexCenter flex-col  ">
                    <h1 className="font-extrabold text-3xl mb-2 ">contact</h1>
                    <hr className="border-gray-500 w-1/2" />
                </div>
                <div className=" flexCenter">
                    <form  className='  w-1/2 flex flex-col gap-y-6 border-3 '>
                        <div className="relative w-full min-w-[200px] h-14">
                            <input
                                type='text'
                                name='user_name'
                                className="peer text-lg w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-gray-700 placeholder-shown:border-t-gray-700 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100  px-3 py-2.5 rounded-[7px] border-gray-700 focus:border-gray-900"
                                placeholder=" " />

                            <label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-lg text-[11px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-gray-700 peer-focus:before:!border-gray-900 after:border-gray-700 peer-focus:after:!border-gray-900">
                                Name
                            </label>
                        </div>
                        <div className="relative w-full min-w-[200px] h-14">
                            <input
                                type='email'
                                name='user_email'
                                className="peer text-lg w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-gray-700 placeholder-shown:border-t-gray-700 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 px-3 py-2.5 rounded-[7px] border-gray-700 focus:border-gray-900"
                                placeholder=" " />

                            <label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-lg text-[11px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-gray-700 peer-focus:before:!border-gray-900 after:border-gray-700 peer-focus:after:!border-gray-900">
                                Email
                            </label>
                        </div>
                        <div className="relative w-full min-w-[200px] h-44">
                            <textarea
                                name='message'
                                className="peer text-lg w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0  disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-gray-700 placeholder-shown:border-t-gray-700 border focus:border-2 border-t-transparent focus:border-t-transparent  px-3 py-2.5 rounded-[7px] border-gray-700 focus:border-gray-900 !resize-none"
                                placeholder=" " />
                            <label
                                className="flex text-gray-500 w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-lg text-[11px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-gray-900 before:border-gray-700 peer-focus:before:!border-gray-900 after:border-gray-700 peer-focus:after:!border-gray-900">
                                Message
                            </label>
                        </div>
                        <button
                            className=" flex flexCenter gap-1 text-md w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans  font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit">
                            Send
                            <IoIosSend  className='text-2xl' />
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}
