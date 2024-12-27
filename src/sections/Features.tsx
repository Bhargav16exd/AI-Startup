'use client'
import { DotLottiePlayer } from "@dotlottie/react-player";
import ProductImage from "@/assets/product-image.png"
import Image from "next/image";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
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
  return <section className="py-20 text-white md:py-24">

    <div className="container ">

      <h2 className="font-medium text-5xl tracking-tighter text-center md:text-6xl">Elevate your SEO efforts</h2>

      <p className="mt-5 text-white/70 text-lg tracking-tight text-center">
      From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
      </p>

      <div className="flex flex-col mt-10 gap-3 md:flex-row md:justify-between">
        {
          tabs.map((tab,index)=>(

            <div key={index} className="py-[10px] px-[10px] flex items-center border border-white/20 rounded-xl gap-[10px] md:flex-1">
              
              <div className="h-12 w-12  border border-white/20 rounded-lg flex justify-center items-center">
               <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay />
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
          ))
        }
      </div>

      <div className="border border-white/20 rounded-xl py-2.5 px-2.5 mt-3">
        
        <div
        className="border border-white/20 rounded-lg aspect-video bg-cover"
        style={{
          backgroundImage:`url(${ProductImage.src})`
        }}
        ></div>

      </div>

    </div>

  </section>;
};
