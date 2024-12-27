import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

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

        <h1 className="font-medium text-5xl tracking-tighterj text-center">
          Beyond Expectations
        </h1>

        <p className="py-5 text-white/70 text-lg tracking-tight text-center ">
        Our revolutionary AI SEO tools have transformed our clients' strategies.
        </p>

        {/* Outer Div that handles Blur and Scroll */}
        <div className="pt-10">
        
          <div className="flex gap-5 border">

            {
              testimonials.map((testimonial,index)=>(

                <div key={index} className="p-6 border border-white/15 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,49,255,.4),black)] flex-none  ">

                  <div className="text-lg tracking-tight">
                    {testimonial.text}
                  </div>

                  <div className="flex pt-5 gap-3 flex-wrap">

                    <Image src={testimonial.avatarImg} alt={testimonial.name} className="rounded-lg h-11 w-11"/>

                    <div>
                      <div className="tracking-tight">{testimonial.name}</div>
                      <div className="text-white/50 text-sm tracking-tight">{testimonial.title}</div>
                    </div>

                  </div>

                </div>
              ))
            }

        </div>

        </div>
    </div>

  </section>;
};
