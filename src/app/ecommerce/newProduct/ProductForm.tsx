import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import Media from "./Media";
import Social from "./Social";
import Pricing from "./Pricing";

function ProductForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };


  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 flex-0">
        <div className=" mb-12">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mx-auto my-12 flex-0 lg:w-8/12">
              <div className="grid grid-cols-4">
                <button
                  aria-controls="info"
                  type="button"
                  className="before:w-3.4 before:h-3.4 before:rounded-circle before:scale-120 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-700 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-current before:transition-all before:ease-linear before:content-[''] sm:indent-0"
                  title="Product Info"
                  onClick={() => setCurrentStep(1)}
                >
                  <span className="text-slate-400">1. Product Info</span>
                </button>
                <button
                  aria-controls="media"
                  type="button"
                  className="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-100 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-white before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0"
                  title="Media"
                  onClick={() => setCurrentStep(2)}
                >
                  2. Media
                </button>
                <button
                  aria-controls="socials"
                  type="button"
                  className="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-100 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-white before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0"
                  title="Socials"
                  onClick={() => setCurrentStep(3)}
                >
                  3. Socials
                </button>
                <button
                  aria-controls="pricing"
                  type="button"
                  className="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-100 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-white before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0"
                  title="Pricing"
                  onClick={() => setCurrentStep(4)}
                >
                  4. Pricing
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
              <form className="relative mb-32">
                <div
                  className={`form-step ${
                    currentStep === 1 ? "visible" : "hidden"
                  }`}
                >
                  <ProductInfo onContinue={handleNext} />
                </div>
                <div
                  className={`form-step ${
                    currentStep === 2 ? "visible" : "hidden"
                  }`}
                >
                  <Media onContinue={handleNext} onBack={handlePrev} />
                </div>
                <div
                  className={`form-step ${
                    currentStep === 3 ? "visible" : "hidden"
                  }`}
                >
                  <Social onContinue={handleNext} onBack={handlePrev} />
                </div>
                <div
                  className={`form-step ${
                    currentStep === 4 ? "visible" : "hidden"
                  }`}
                >
                  <Pricing onBack={handlePrev} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
