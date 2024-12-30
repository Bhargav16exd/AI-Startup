import Logo from "@/assets/logo.svg"
import XLogo from "@/assets/social-x.svg"
import InstaLogo from "@/assets/social-instagram.svg"
import YoutubeLogo from "@/assets/social-youtube.svg"

export const Footer = () => {
  return <footer className="py-5 text-white border-t border-white/15 md:py-2">

    <div className="contianer mx-auto px-4">

      <div className="flex flex-col justify-center items-start lg:gap-8 lg:flex-row lg:justify-between lg:items-center">

        <h2 className="font-medium text-sm flex justify-start items-center gap-2">
          <span><Logo className="h-6 w-6"/></span>
          AI Startup Landing Page
        </h2>

        <div className="mt-8 flex flex-col items-center gap-5 text-xs text-white/70 lg:flex-row lg:items-center lg:m-0 ">
          <a href="#">Features</a>
          <a href="#">Developers</a>
          <a href="#">Company</a>
          <a href="#">Blog</a >
          <a href="#">Changelog</a>
        </div>

        <div className="pt-8 flex items-center gap-5 text-white/70 text-center lg:p-0">
          <XLogo   className="h-6 w-6 " />
          <InstaLogo className="h-6 w-6 "/>
          <YoutubeLogo className="h-6 w-6 text-center"/>
        </div>


      </div>
    </div>
  </footer>;
};
