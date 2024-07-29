import Pag1 from "./assets/pagola/1.jpeg";
import Pag2 from "./assets/pagola/2.jpeg";
import Pag3 from "./assets/pagola/3.jpeg";
import Pag4 from "./assets/pagola/4.jpeg";
import Pag5 from "./assets/pagola/5.jpeg";
import Sheet1 from "./assets/sheets/1.jpeg";
import Sheet2 from "./assets/sheets/2.jpeg";
import Sheet3 from "./assets/sheets/3.jpeg";
import Sheet4 from "./assets/sheets/4.jpeg";
import Sheet5 from "./assets/sheets/5.jpeg";
import Pcs1 from "./assets/pcg/1.jpeg";
import Pcs2 from "./assets/pcg/2.jpeg";
import Pcs3 from "./assets/pcg/3.jpeg";
import Pcs4 from "./assets/pcg/4.jpeg";
import Pcs5 from "./assets/pcg/5.jpeg";
import Pg1 from "./assets/pg/1.jpeg";
import Pg2 from "./assets/pg/2.jpeg";
import Pg3 from "./assets/pg/3.jpeg";
import Pg4 from "./assets/pg/4.jpeg";
import Pg5 from "./assets/pg/5.jpeg";
import acb1 from "./assets/acb/1.jpeg";
import acb2 from "./assets/acb/2.jpeg";
import acb3 from "./assets/acb/3.jpeg";
import acb4 from "./assets/acb/4.jpeg";
import acb5 from "./assets/acb/5.jpeg";
import { useEffect, useState } from "react";
import Images from "./Images";




export const imageData=[{key: "pag", images: [Pag1, Pag2, Pag3, Pag4, Pag5]}, {key: "pcs", images: [Pcs1, Pcs2, Pcs3, Pcs4, Pcs5]}, {key: "pg", images: [Pg1, Pg2, Pg3, Pg4, Pg5]}, {key: "acb", images: [acb1, acb2, acb3, acb4, acb5]}, {key: "sheet", images: [Sheet1, Sheet2, Sheet3, Sheet4, Sheet5]}]

console.log(Sheet1)


const products = [
  {
    name: "Pergola",
    description: "Transform your backyard into a serene retreat with our expert pergola construction services. A pergola is more than just an architectural feature—it's a stylish, functional addition that elevates your outdoor space. Whether you're seeking a cozy spot to relax, an elegant area for entertaining, or a charming garden focal point, our custom pergolas provide the perfect solution.",
    images: [Pag1, Pag2, Pag3, Pag4, Pag5],
    key: "pag",
  },
  {
    name: "Iron Sheets",
    description: "When it comes to durable, reliable, and cost-effective building materials, iron sheets stand out as a versatile choice. We offer a wide range of iron sheets to meet various construction and design requirements, including bending sheets and normal flat sheets.",
    images: [Sheet1, Sheet2, Sheet3, Sheet4, Sheet5],
    key: "sheet",
  },
  {
    name: "Policarbonate sheds",
    description: "Invest in a polycarbonate shed and enjoy a durable, stylish, and low-maintenance addition to your outdoor space. Contact us today to explore our range of polycarbonate sheds and find the perfect solution for your needs.",
    images: [Pcs1, Pcs2, Pcs3, Pcs4, Pcs5],
    key: "pcs",
  },
  {
    name: "Plain gates",
    description: "With our custom gate construction service, you can bring your ideal gate to life with the materials you select. Contact us today to discuss your project and get started on creating a gate that enhances your property’s entrance.",
    images: [Pg1, Pg2, Pg3, Pg4, Pg5],
    key: "pg",
  },
  {
    name: "ACB Framing",
    description: "Elevate your construction projects with our expert ACB (Aluminum Composite Board) framing services. ACB framing offers a contemporary solution for creating sleek, durable, and aesthetically pleasing facades for both residential and commercial buildings. Our team specializes in the precise installation and framing of ACB panels to ensure your structure stands out with modern elegance and functionality.",
    images: [acb1, acb2, acb3, acb4, acb5],
    key: "acb",
  },
];
export default function Products() {
  const [imageClick, setImageClick] = useState(false);

  const [imgKey, setImgKey] = useState("")
  const [imgIndex, setImgIndex] = useState("")


  function changeState(key, index) {
    setImageClick(!imageClick)
    setImgKey(key)
    setImgIndex(index)
  }

  function handleClose() {
    setImageClick(false)
  }
 
  return (
    <div id="works">
       {
        imageClick && <Images imgKey={imgKey} imgIndex={imgIndex} onClose={handleClose} />
      }
      {products.map((product, index) => (
        <div key={index} className="relative overflow-hidden h-[1000px] md:h-auto mt-[100px]">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-xl text-gray-500 text-left">
                  {product.description}
                </p>
              </div>
              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className=" lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div   className="cursor-pointer h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                            onClick={() => changeState(product.key, 0)}
                              alt=""
                              src={product.images[0]}
                              className="h-full w-full object-cover object-center cursor-pointer"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                             onClick={() => changeState(product.key, 1)}
                              alt=""
                              src={product.images[1]}
                              className="h-full w-full object-cover object-center cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                             onClick={() => changeState(product.key, 2)}
                              alt=""
                              src={product.images[2]}
                              className="h-full w-full object-cover object-center cursor-pointer"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                             onClick={() => changeState(product.key, 3)}
                              alt=""
                              src={product.images[3]}
                              className="h-full w-full object-cover object-center cursor-pointer"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                             onClick={() => changeState(product.key, 4)}
                              alt=""
                              src={product.images[4]}
                              className="h-full w-full object-cover object-center cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                             onClick={() => changeState(product.key, 2)}
                              alt=""
                              src={product.images[2]}
                              className="h-full w-full object-cover object-center cursor-pointer"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                             onClick={() => changeState(product.key, 4)}
                              alt=""
                              src={product.images[4]}
                              className="h-full w-full object-cover object-center cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="inline-flex items-center justify-center w-full mt-[300px]">
            <hr class="w-[80%] h-px my-8 bg-gray-300 border-0 dark:bg-gray-300" />
          </div> */}
        </div>
      ))}
    </div>
  );
}
