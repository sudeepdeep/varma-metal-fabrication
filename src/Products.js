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

const products = [
  {
    name: "Pagola",
    description: "This is the pagola description",
    images: [Pag1, Pag2, Pag3, Pag4, Pag5],
    key: "Pag",
  },
  {
    name: "Iron Sheets",
    description: "This is the description",
    images: [Sheet1, Sheet2, Sheet3, Sheet4, Sheet5],
    key: "Sheet",
  },
  {
    name: "Policarbonate sheds",
    description: "This is the description",
    images: [Pag1, Pag2, Pag3, Pag4, Pag5],
    key: "Pag",
  },
  {
    name: "Plain gates design",
    description: "This is the description",
    images: [Sheet1, Sheet2, Sheet3, Sheet4, Sheet5],
    key: "Sheet",
  },
];
export default function Products() {
  return (
    <>
      {products.map((product) => (
        <div className="relative overflow-hidden h-[1000px] md:h-auto mt-[100px]">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  {product.description}
                  {product.key}
                </p>
              </div>
              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              alt=""
                              src={product.images[0]}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={product.images[1]}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={product.images[2]}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={product.images[3]}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={product.images[4]}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={product.images[2]}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={product.images[4]}
                              className="h-full w-full object-cover object-center"
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
    </>
  );
}
