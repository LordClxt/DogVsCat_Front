/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import {motion} from "framer-motion"

export const Prediction = ({text})=>{
    return (
        <motion.div
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                transition={{duration:0.5}}
                className="border border-dashed w-5/6 mx-auto rounded py-5 text-center text-white font-bold text-xl">
            Il s'agit d'un {text}
        </motion.div>
    )
}