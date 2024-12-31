'use client'
import AcmeLogo from "@/assets/logo-acme.png"
import PulseLogo from "@/assets/logo-pulse.png"
import EchoLogo from "@/assets/logo-echo.png"
import CelestialLogo from "@/assets/logo-celestial.png"
import ApexLogo from "@/assets/logo-apex.png"
import Image from "next/image"
import { motion } from "framer-motion"

export const LogoTicker = () => {
  return <section className="py-20 text-white overflow-x-clip md:py-24">
    <div className="container">

      <div className="flex items-center gap-5">

        <div className="flex-1 md:flex-none">
         <h2>Trusted by top innovative teams</h2>
        </div>
       
        <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">

          <motion.div 
          animate={{
            translateX:'-50%'
          }}
          transition={{
            repeat:Infinity,
            repeatType:"loop",
            ease:"linear",
            duration:10
          }}
          className="flex flex-none gap-14 pr-14">


            <Image src={AcmeLogo} alt="Acme logo" className="h-6 w-auto" />
            <Image src={PulseLogo} alt="Pulse logo" className="h-6 w-auto"/>
            <Image src={EchoLogo} alt="Echo logo" className="h-6 w-auto"/>
            <Image src={CelestialLogo} alt="Celestial logo" className="h-6 w-auto"/>
            <Image src={ApexLogo} alt="Apex logo" className="h-6 w-auto"/>

            <Image src={AcmeLogo} alt="Acme logo" className="h-6 w-auto" />
            <Image src={PulseLogo} alt="Pulse logo" className="h-6 w-auto"/>
            <Image src={EchoLogo} alt="Echo logo" className="h-6 w-auto"/>
            <Image src={CelestialLogo} alt="Celestial logo" className="h-6 w-auto"/>
            <Image src={ApexLogo} alt="Apex logo" className="h-6 w-auto"/>

          </motion.div>
        </div>
      </div>

    </div>
  </section>;
};
