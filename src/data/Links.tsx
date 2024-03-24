import { HiHome } from "react-icons/hi";
import {   HiEnvelope, HiSquare2Stack } from "react-icons/hi2";
import { RiToolsFill } from "react-icons/ri";

export const LINKS =[
    {
        title:'home',
        icon:<HiHome className="font-bold text-3xl max-md:text-2xl"/>,
        section:"landing"
    },
    
    {
        title:'Which I used',
        icon:<RiToolsFill  className="font-bold text-3xl max-md:text-2xl"/>,
        section:"skills"
    },
    {
        title:'work',
        icon:<HiSquare2Stack  className="font-bold text-3xl max-md:text-2xl"/>,
        section:"work"
    },
    {
        title:'contact',
        icon:<HiEnvelope  className="font-bold text-3xl max-md:text-2xl"/>,
        section:"contact"
    },
]