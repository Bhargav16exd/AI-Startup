import { Button } from "@/components/Button";
import StarsBg  from "@/assets/stars.png"
import GridLines from "@/assets/grid-lines.png"

export const CallToAction = () => {
  return <section className="my-20 px-4">

    <div 
    style={{
      backgroundImage:`url(${StarsBg.src})`
    }}
    className="container py-24 text-white border border-white/15 rounded-xl relative ">

      <div 
      style={{
        backgroundImage:`url(${GridLines.src})`
      }}
      className="absolute inset-0  bg-[#4A208A] rounded-xl bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" >
      </div>
      
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
    
      
    </div>
  </section>;
};
