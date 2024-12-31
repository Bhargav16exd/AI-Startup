'use client'
import { Button } from "@/components/Button";
import StarsBg from "@/assets/stars.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {


  const sectionRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:["start end" , "end start"]
  })

  const YProgress = useTransform(scrollYProgress,[0,1],[-300,300])

  return <motion.section 
  ref={sectionRef}
  style={{
    backgroundImage:`url(${StarsBg.src})`,
    backgroundPositionY:YProgress
  }}
  animate={{
    backgroundPositionX : StarsBg.width
  }}
  transition={{
    repeat:Infinity,
    ease:"linear",
    duration:60
  }}
  className="text-white h-[492px] flex items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] md:h-[800px]" >

  <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_70%,transparent)]"></div>

  {/* Planet  */}
  <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full border bg-purple-500 border-white/10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]  shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] ] "></div>

  {/* Planet Ring 1 */}
  <motion.div 
  style={{
    translateX:"-50%",
    translateY:"-50%"
  }}
  animate={{
    rotate:"1turn"
  }}
  transition={{
    repeat:Infinity,
    repeatType:"loop",
    ease:"linear",
    duration:30
    
  }}
  className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border rounded-full opacity-20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="h-2 w-2 absolute bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 "></div>
    <div className="h-2 w-2 absolute bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
    <div className="h-5 w-5 absolute border rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
     <div className="h-2 w-2 absolute bg-white rounded-full "></div>
    </div>
  </motion.div>

  {/* Planet Ring 2 */}
  <motion.div 
   style={{
    translateX:"-50%",
    translateY:"-50%"
  }}
  animate={{
    rotate:"-1turn"
  }}
  transition={{
    repeat:Infinity,
    repeatType:"loop",
    ease:"linear",
    duration:70
    
  }}
  className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border rounded-full border-dashed opacity-20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></motion.div>

  {/* Planet Ring 3 */}
  <motion.div 
   style={{
    translateX:"-50%",
    translateY:"-50%"
  }}
  animate={{
    rotate:"1turn"
  }}
  transition={{
    repeat:Infinity,
    repeatType:"loop",
    ease:"linear",
    duration:50
    
  }}
  className="absolute h-[544px] w-[544px] border rounded-full md:h-[980px] md:w-[980px]  opacity-20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="h-2 w-2 absolute bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 "></div>
    <div className="h-2 w-2 absolute bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
    <div className="h-5 w-5 absolute border rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
     <div className="h-2 w-2 absolute bg-white rounded-full "></div>
    </div>
  </motion.div>



   
  <div className="container relative max-w-xl">


          <h1 className="mt-16 font-semibold text-8xl tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center md:text-[168px]">
            AI SEO
          </h1>

          <p className="mt-5 text-white/70 text-lg tracking-tight text-center md:text-xl">
          Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
          </p>

          <div className="pt-5 flex justify-center">
           <Button/>
          </div>

  </div>

  </motion.section>;
};
