import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
  } from "@heroicons/react/24/outline";
  import footer from "./assets/foooter.png";
  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];
  const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];
  
  export default function About() {
    return (
        <div id="about" className="mt-[150px] mb-[100px]">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-[10px]">About Us</h1>

            <p className=" w-auto md:mx-auto ml-[10px] mr-[10px] md:max-w-[60%] text-xl text-gray-500 text-left">With a wealth of experience in metal fabrication since 2016, we have successfully completed over numerous diverse projects, delivering high-quality solutions tailored to our clients' needs. Specializing in a broad range of services, including custom gates, polycarbonate sheds, ACB framing, and more, we pride ourselves on our craftsmanship, attention to detail, and commitment to excellence.</p>
        </div>
    );
  }
  
