'use client'
import { Button } from "@/components/Button";
import StarsBg  from "@/assets/stars.png"
import GridLines from "@/assets/grid-lines.png"
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { use, useEffect, useRef } from "react";

export const CallToAction = () => {

  //Ref Section
  const sectionRef = useRef(null);
  const borderRef  = useRef(null) as any;
  
  //Motion Values 
  const offSetX = useMotionValue(50)
  const offSetY = useMotionValue(35)

  const maskImage = useMotionTemplate`radial-gradient(25% 50% at ${offSetX}px ${offSetY}px,black,transparent)`

  const { scrollYProgress} = useScroll({
    target:sectionRef,
    offset:["start end","end start"]
  })

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0,1],
    [-300,300]
  )

  function updateMousePosition(e:any){

    if (!borderRef.current) return ;
    const borderPosition = borderRef.current?.getBoundingClientRect(); 

    offSetX.set(e.x - borderPosition.x);
    offSetY.set(e.y - borderPosition.y);

  }

  useEffect(()=>{

    offSetX.set(50);
    offSetY.set(35);

    window.addEventListener('mousemove',updateMousePosition)

    return () => {
      window.removeEventListener('mousemove',updateMousePosition)
    }
  },[])

  return <section className="my-20 px-4">

    <motion.div 
    ref={borderRef}
    animate={{
      backgroundPositionX:StarsBg.width
    }}
    transition={{
      duration:20,
      repeat:Infinity,
      repeatType:"loop",
      ease:"linear"
    }}
    style={{
      backgroundImage:`url(${StarsBg.src})`,
      backgroundPositionY
    }}
    className="container py-24 text-white border border-white/15 rounded-xl relative cursor-pointer ">

      <motion.div 
      style={{
        maskImage:maskImage,
        backgroundImage:`url(${GridLines.src})`
      }}
      className="absolute inset-0  bg-[#4A208A] rounded-xl bg-blend-overlay " >
      </motion.div>
      
        <div className="flex justify-center">
         <h1 className="text-center font-medium text-5xl tracking-tighter relative md:text-6xl md:max-w-96">
         AI-driven SEO for everyone.
         </h1>
        </div>
        
        <div className="flex justify-center">
          <p className="text-center mt-5 text-white/70 text-lg tracking-tight relative max-w-80">
          Achieve clear, impactful results without the complexity.
          </p>
        </div>
        
        <div className="flex justify-center items-center pt-5">
        <Button/>
        </div>
    
      
    </motion.div>
  </section>;
};
