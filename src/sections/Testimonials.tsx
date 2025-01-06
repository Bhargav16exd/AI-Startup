'use client'
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return <section className="py-20 text-white overflow-hidden">

    <div className="container">

        <h1 className="font-medium text-5xl tracking-tighterj text-center md:text-6xl">
          Beyond Expectations
        </h1>
        
        <div className="flex justify-center">
          <p className="text-center max-w-96 py-5 text-white/70 text-lg tracking-tight  md:text-xl ">
          Our revolutionary AI SEO tools have transformed our clients' strategies.
          </p>
        </div>
       

        {/* Outer Div that handles Blur and Scroll */}
        <div className="pt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
          <motion.div 
          animate={{ 
            translateX : "-418%"
          }}
          transition={{
            repeat: Infinity,
            repeatType:"loop",
            duration: 30,
            ease: "linear"
          }}
          className="flex gap-5 h-[196px] w-[320px] md:h-[248px] md:w-[440px]">

            {
              testimonials.map((testimonial,index)=>(

                <div key={index} className="p-6 border flex flex-col justify-center border-white/15 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,49,255,.4),black)] w-full h-full flex-none">


                  <p className="text-lg tracking-tight">
                    {testimonial.text}
                  </p>

                  <div className="flex pt-5 gap-3">

                    <Image src={testimonial.avatarImg} alt={testimonial.name} className="rounded-lg h-11 w-11"/>

                    <div>
                      <div className="tracking-tight">{testimonial.name}</div>
                      <div className="text-white/50 text-sm tracking-tight">{testimonial.title}</div>
                    </div>

                  </div>

                </div>
              ))
            }

           {
              testimonials.map((testimonial,index)=>(

                <div key={index} className="p-6 border flex flex-col justify-center border-white/15 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,49,255,.4),black)] w-full h-full flex-none">


                  <p className="text-lg tracking-tight">
                    {testimonial.text}
                  </p>

                  <div className="flex pt-5 gap-3">

                    <Image src={testimonial.avatarImg} alt={testimonial.name} className="rounded-lg h-11 w-11"/>

                    <div>
                      <div className="tracking-tight">{testimonial.name}</div>
                      <div className="text-white/50 text-sm tracking-tight">{testimonial.title}</div>
                    </div>

                  </div>

                </div>
              ))
           }

        </motion.div>

        </div>
    </div>

  </section>;
};
