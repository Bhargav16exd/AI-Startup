import LogoIcon from "@/assets/logo.svg"
import Menu from "@/assets/icon-menu.svg"

export const Header = () => {

  return <header className="text-white md:py-4 sticky top-0 z-10">

    <div className="container flex justify-between items-center max-w-2xl border-b border-white/20 py-4 md:border md:rounded-xl backdrop-blur ">

      
      <div>
        <span className="flex items-center justify-center h-10 w-10 border border-white/20 rounded-lg"><LogoIcon className="h-8 w-8" /></span>
      </div>


      <ul className="hidden md:flex md:gap-8 md:items-center md:text-sm md:text-white/70">
          <li>Features</li>
          <li>Developers</li>
          <li>Pricing</li>
          <li>Changelog</li>
      </ul>


      <div className="flex gap-4 items-center">

        <button className="py-2 px-3 relative rounded-lg font-medium text-sm bg-[linear-gradient(to_bottom,#190D2E,#4A208A)] shadow-[0px_0px_12px_#8C45FF]">
          <div className="absolute inset-0 rounded-lg">
            <div className="inset-0 rounded-lg absolute border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className="inset-0 rounded-lg absolute border border-white/40 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>  
            <div className="inset-0 rounded-lg absolute shadow-[inset_0px_0px_10px_#8C45FF] border-opacity-70"></div>       
          </div>  
        Join waitlist
       </button>

        

        <Menu className="md:hidden"/>

      </div>



    </div>
  </header>;
};
