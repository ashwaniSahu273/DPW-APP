import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProductInfo from "./ProductInfo";
import Media from "./Media";
import Social from "./Social";
import Pricing from "./Pricing";

function ProductForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const [completed, setCompleted] = useState({
    info: false,
    media: false,
    social: false,
    pricing: false,
  });

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    // Add your logic here to handle the form submission, e.g., send data to a server
  };

  const handleNext = () => {
    if (currentStep == 1) {
      setCompleted((prevCompleted) => ({ ...prevCompleted, info: true }));
    } else if (currentStep == 2) {
      setCompleted((prevCompleted) => ({ ...prevCompleted, media: true }));
    } else if (currentStep == 3) {
      setCompleted((prevCompleted) => ({ ...prevCompleted, social: true }));
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };



  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);

    if (currentStep == 3) {
      console.log(currentStep);
      setCompleted((prevCompleted) => ({ ...prevCompleted, social: false }));
    } else if (currentStep == 2) {
      setCompleted((prevCompleted) => ({ ...prevCompleted, media: false }));
    }
  };

  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 flex-0">
        <div className="mb-12">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mx-auto my-12  flex flex-col  justify-center items-center lg:w-8/12">
              <div className="w-3/4  h-1  bg-gray-200  m-3  ml-11 ">
                <div
                  className={` ${currentStep === 1 && "w-0"} ${
                    currentStep === 2 && "w-1/3"
                  } ${currentStep === 3 && "w-4/6"} ${
                    currentStep === 4 && "w-full"
                  }  h-full bg-slate-500`}
                ></div>
              </div>
              <div className=" w-full flex  justify-around">
                <button
                  type="button"
                  className={` ${
                    completed.info ? "text-slate-700   " : " "
                  }  relative step-button font-semibold ${
                    currentStep === 1 ? "text-slate-700   " : ""
                  }  `}
                  onClick={() => setCurrentStep(1)}
                >
                  <div
                    className={`absolute bg-slate-700 
                        -top-5  right-2/4 w-3 h-3  rounded-full `}
                  ></div>{" "}
                  1. Product Info
                </button>

                <button
                  type="button"
                  className={ `${
                    completed.media ? "text-slate-700 " : ""
                  } relative  font-semibold  step-button ${
                    currentStep == 2 ? "text-slate-700 " : ""
                  }  `}
                  onClick={() => setCurrentStep(2)}
                >
                  <div
                    className={`absolute ${
                      currentStep === 2 || currentStep == 3 || currentStep == 4
                        ? "bg-slate-700 "
                        : "bg-slate-200"
                    } -top-5  right-2/4 w-3 h-3  rounded-full `}
                  ></div>{" "}
                  2. Media
                </button>
                <button
                  type="button"
                  className={`${
                    completed.social ? "text-slate-700" : ""
                  } relative step-button font-semibold ${
                    currentStep === 3 ? "text-slate-700" : ""
                  }  `}
                  onClick={() => setCurrentStep(3)}
                >
                  3. Social{" "}
                  <div
                    className={`absolute ${
                      currentStep === 3 || currentStep == 4
                        ? "bg-slate-700 "
                        : "bg-slate-200"
                    } -top-5  right-2/4 w-3 h-3  rounded-full `}
                  ></div>
                </button>
                <button
                  type="button"
                  className={`${
                    completed.pricing ? "text-slate-700  " : ""
                  } relative step-button font-semibold ${
                    currentStep === 4 ? "text-slate-700" : ""
                  }  `}
                  onClick={() => setCurrentStep(4)}
                >
                  4. Pricing{" "}
                  <div
                    className={`absolute ${
                      currentStep == 4 ? "bg-slate-700 " : "bg-gray-300"
                    } -top-5 left-2/4 w-3 h-3  rounded-full `}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
              <form
                className="relative mb-32"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Step 1: Product Info */}
                <div
                  className={`form-step ${
                    currentStep === 1 ? "visible" : "hidden"
                  }`}
                >
                  <ProductInfo
                    register={register}
                    errors={errors}
                    onContinue={handleNext}
                    watch={watch}
                  />
                </div>

                {/* Step 2: Media */}
                <div
                  className={`form-step ${
                    currentStep === 2 ? "visible" : "hidden"
                  }`}
                >
                  <Media
                    errors={errors}
                    onContinue={handleNext}
                    onBack={handlePrev}
                    watch={watch}
                    control={control}
                  />
                </div>

                {/* Step 3: Social */}
                <div
                  className={`form-step ${
                    currentStep === 3 ? "visible" : "hidden"
                  }`}
                >
                  <Social
                    register={register}
                    errors={errors}
                    onContinue={handleNext}
                    onBack={handlePrev}
                    watch={watch}
                  />
                </div>

                {/* Step 4: Pricing */}
                <div
                  className={`form-step ${
                    currentStep === 4 ? "visible" : "hidden"
                  }`}
                >
                  <Pricing
                    register={register}
                    errors={errors}
                    onBack={handlePrev}
                    onSubmit={handleSubmit(onSubmit)} // Pass the submit handler to Pricing
                  />
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
