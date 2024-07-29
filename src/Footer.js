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

export default function Footer() {
  return (
    <div id="contact" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-7">
      <img
        alt=""
        src={footer}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom md:object-bottom"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="text-center  px-6 lg:px-8">
        <div className="">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Contact us
          </h2>

          <div className="flex flex-col md:flex-row max-w-xl m-auto">
            <div className="group relative  flex items-center gap-x-6 rounded-lg p-4 ">
              <div className="mt-1 flex h-8 w-11 flex-none items-center justify-center rounded-lg ">
                <EnvelopeIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-white group-hover:text-indigo-600"
                />
              </div>
              <div>
                <p className="mt-1 text-white">ajithvarma7107@gmail.com</p>
              </div>
            </div>

            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 ">
              <div className="mt-1 flex h-8 w-11 flex-none items-center justify-center rounded-lg ">
                <PhoneIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-white group-hover:text-indigo-600"
                />
              </div>
              <div>
                <p className="mt-1 text-white">+91 9381547107</p>
              </div>
            </div>
          </div>

          <div className="group relative max-w-xl m-auto flex items-center gap-x-6 rounded-lg p-4 ">
            <div className="mt-1 flex h-6 w-11 flex-none items-center justify-center rounded-lg ">
              <MapPinIcon
                aria-hidden="true"
                className="h-6 w-6 text-white group-hover:text-indigo-600"
              />
            </div>
            <div>
              <p className="mt-1 text-left text-white">
                Near Saibaba Temple, Ramalingeswara Nagar, <br />
                Vijayawada-520007
              </p>
            </div>
          </div>

          {/* <div className="group relative w-[350px] m-auto flex items-center gap-x-6 rounded-lg p-4">
            <div className="mt-1 flex h-8 w-11 flex-none items-center justify-center rounded-lg">
              <EnvelopeIcon
                aria-hidden="true"
                className="h-6 w-6 text-white group-hover:text-indigo-600"
              />
            </div>
            <div>
              <p className="mt-1 text-white">ajithvarma7107@gmail.com</p>
            </div>
          </div>

          <div className="group relative w-[350px] m-auto flex items-center gap-x-6  rounded-lg p-4 ">
            <div className="mt-1 flex h-8 w-11 flex-none items-center justify-center rounded-lg">
              <PhoneIcon
                aria-hidden="true"
                className="h-6 w-6 text-white group-hover:text-indigo-600"
              />
            </div>
            <div>
              <p className="mt-1 text-white">+91 9381547107</p>
            </div>
          </div>

          <div className="group relative w-[350px] m-auto flex items-center  gap-x-6 rounded-lg p-4 ">
            <div className="mt-1 flex h-6 w-11 flex-none items-center justify-center rounded-lg ">
              <MapPinIcon
                aria-hidden="true"
                className="h-6 w-6 text-white group-hover:text-indigo-600"
              />
            </div>
            <div>
              <p className="mt-1 text-left text-white">
                Near Saibaba Temple, Ramalingeswara Nagar, <br />
                Vijayawada-520007
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
