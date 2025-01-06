'use client'
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import ProductImage from "@/assets/product-image.png"
import Image from "next/image";
import { use, useEffect, useRef, useState } from "react";
import {animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 120,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {

  const [selectedTab,setSelectedTab] = useState(0)

  const motionBackgroundPositionX = useMotionValue(tabs[0].backgroundPositionX)
  const motionBackgroundPositionY = useMotionValue(tabs[0].backgroundPositionY)
  const motionBackgroundSizeX = useMotionValue(tabs[0].backgroundSizeX)

  const backgroundPosition  = useMotionTemplate`${motionBackgroundPositionX}% ${motionBackgroundPositionY}%`
  const backgroundSize      = useMotionTemplate`${motionBackgroundSizeX}% auto`


  function handleSelectedTab (index:number){

    setSelectedTab(index)

    const options:any = {
      duration:2,
      ease:"easeInOut"
    }

    animate(motionBackgroundSizeX,[motionBackgroundSizeX.get(),100,tabs[index].backgroundSizeX],options)

    animate(motionBackgroundPositionX,[motionBackgroundPositionX.get(),100,tabs[index].backgroundPositionX],options)

    animate(motionBackgroundPositionY,[motionBackgroundPositionY.get(),100,tabs[index].backgroundPositionY],options)
  }


  return <section className="py-20 text-white md:py-24">

    <div className="container ">

      <h2 className="font-medium text-5xl tracking-tighter text-center md:text-6xl">Elevate your SEO efforts</h2>

      <p className="mt-5 text-white/70 text-lg tracking-tight text-center">
      From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
      </p>

      <div className="flex flex-col mt-10 gap-3 md:flex-row md:justify-between">
        {
          tabs.map((tab,index)=>(
            <FeatureCard tab={tab} key={index} onClick={()=>handleSelectedTab(index)} selectedTab={selectedTab==index} />
          ))
        }
      </div>

      <div className="border border-white/20 rounded-xl py-2.5 px-2.5 mt-3">
        
        <motion.div
         className="border border-white/20 rounded-lg aspect-video bg-cover"
         style={{
          backgroundSize,
          backgroundPosition,
          backgroundImage:`url(${ProductImage.src})`,
         }}
        ></motion.div>

      </div>

    </div>

  </section>;
};


const FeatureCard = ({tab,onClick,selectedTab}:any) => {

  const LottieRef = useRef<DotLottieCommonPlayer>(null)
  const tabRef    = useRef<HTMLDivElement>(null)

  function handleLottieAnimation(){

    if (LottieRef.current == null ) return
    
    LottieRef.current.seek(0)
    LottieRef.current.play()

  }


  // Motion

  const xPercentage = useMotionValue(0)
  const yPercentage = useMotionValue(0)

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`

  useEffect(()=>{

    if (!tabRef.current) return

    const {height , width} = tabRef.current.getBoundingClientRect()
    const circumference = height*2 + width *2 

    xPercentage.set(0)
    yPercentage.set(0)

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width*2 + height ) / circumference,
      1
    ]
    
    animate(xPercentage,[0,100,100,0,0],{
      times,
      duration:5,
      repeat:Infinity,
      repeatType:"loop",
      ease:"linear"
    })

    animate(yPercentage,[0,0,100,100,0],{
      times,
      duration:5,
      repeat:Infinity,
      repeatType:"loop",
      ease:"linear"
    })

  },[selectedTab])

  return(

    <div 
    ref = {tabRef}
    onClick={onClick}
    onMouseEnter={handleLottieAnimation} className="py-[10px] px-[10px] flex items-center border border-white/20 rounded-xl gap-[10px] md:flex-1 relative">

      {
        selectedTab && (
          <motion.div
          style={{
            maskImage
          }}      
          className="absolute inset-0 border border-[#8C44FF] rounded-xl ">
          </motion.div>

        )
      }
      
              
              <div className="h-12 w-12  border border-white/20 rounded-lg flex justify-center items-center">
               <DotLottiePlayer 
               ref={LottieRef}
               src={tab.icon} 
               className="h-5 w-5" 
               autoplay />
              </div>
              

              <div className="font-medium tracking-tighter">
              {tab.title}
              </div>

              {
                tab.isNew && (
                  <div className="text-xs font-semibold rounded-[99px] text-black bg-[#8C44FF] py-0.5 px-2">
                    new
                  </div>
                )
              }
     </div>

  )
}