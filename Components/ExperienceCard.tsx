import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
  <article className="flex flex-col rounded-l items-center
  space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900 px] 
  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
  cursor-pointer transition-opacity duration-200 overflow-hidden">
    <motion.img 
        initial={{
             y: -100,
             opacity: 0,
        }}
        transition={{ duration: 1.2}}
        whileInView={{ opacity:1, y: 0}}
        viewport={{ once: true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center"
        src="\Images\McDonalds.png"
        alt="McDonalds"
         />

         <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">CREW TRAINER</h4>
            <p className="font-bold text-2xl mt-1">McDonald&apos;s</p>
            <div className="flex space-x-2 my-2"> 
            
            
              </div>
            <p className="uppercase py-5 text-gray-300">
                Started work - SEPT 2022 , Ended - Currently Working.</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li><p>Learnt Customer Service and Communication</p></li>
                <li><p>Learnt Problem-Solving and Adaptability</p></li>
                <li><p>Learnt Teamwork and Collaboration</p></li>
            </ul>
         </div>
    </article>
  );

}
