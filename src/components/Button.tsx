export const Button = () => {
    return (
        <button className="py-2 px-3 relative rounded-lg font-medium text-sm bg-[linear-gradient(to_bottom,#190D2E,#4A208A)] shadow-[0px_0px_12px_#8C45FF] text-white">
          <div className="absolute inset-0 rounded-lg">
            <div className="inset-0 rounded-lg absolute border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className="inset-0 rounded-lg absolute border border-white/40 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>  
            <div className="inset-0 rounded-lg absolute shadow-[inset_0px_0px_10px_#8C45FF] border-opacity-70"></div>       
          </div>  
        Join waitlist
       </button>
    )
}